// server.js
import express from "express";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());

const otpStore = new Map(); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post("/api/request-otp", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000 
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    html: `<h2>Your OTP is <strong>${otp}</strong></h2><p>This will expire in 5 minutes.</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent to email." });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send OTP." });
  }
});

app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  const stored = otpStore.get(email);

  if (!stored) {
    return res.status(400).json({ message: "No OTP request found." });
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return res.status(400).json({ message: "OTP expired." });
  }

  if (stored.otp !== otp) {
    return res.status(401).json({ message: "Invalid OTP." });
  }

  // Valid OTP
  otpStore.delete(email); // prevent reuse
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
