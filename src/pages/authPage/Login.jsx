import React, { useState, useEffect }  from "react";
import AuthLeftPanel from "../../components/Auth/AuthLeftPanel";
import AuthRightPanel from "../../components/Auth/AuthRightPanel";
import { Link } from "react-router-dom";
import useDebouncedValue from "../../hooks/useDebounceValue";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const debouncedEmail = useDebouncedValue(email, 600);
  const debouncedPassword = useDebouncedValue(password, 600);

 useEffect(() => {
    if (debouncedEmail) {
      console.log("Debounced Email:", debouncedEmail);
      // Call API or validation logic here
    }
  }, [debouncedEmail]);

  useEffect(() => {
    if (debouncedPassword) {
      console.log("Debounced Password:", debouncedPassword);
      // Call validation logic here
    }
  }, [debouncedPassword]);



const handleSendOtp = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/request-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await response.json();

    if (response.ok) {
      alert("OTP sent to your email.");
      setOtpSent(true); 
    } else {
      alert(data.message || "Failed to send OTP.");
    }
  } catch (err) {
    console.error("Error sending OTP:", err);
    alert("An error occurred.");
  }
};

const handleVerifyOtp = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp, password }) 
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard"; 
    } else {
      alert(data.message || "OTP/Password incorrect.");
    }
  } catch (err) {
    console.error("Error verifying OTP:", err);
    alert("Something went wrong.");
  }
};



  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <AuthLeftPanel />
      <AuthRightPanel>
        <h2 className="text-center text-xl font-semibold mb-6">
          Sign in your account
        </h2>
      <form className="space-y-5" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}>
  {!otpSent ? (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="demo@gmail.com"
          className="w-full border px-4 py-2 rounded-md shadow-sm"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="******"
          className="w-full border px-4 py-2 rounded-md shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#04254d] text-white py-2 rounded-full font-semibold hover:bg-[#0c1c5c]"
      >
        Send OTP
      </button>

      <div className="text-center mt-2">
        <Link
          to="/forgot-password"
          className="text-[#04254d] font-semibold text-sm hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </>
  ) : (
    <>
      <div>
        <label className="block text-sm font-medium mb-1">Enter OTP</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="6-digit OTP"
          maxLength={6}
          className="w-full border px-4 py-2 rounded-md shadow-sm"
          required
        />
      </div>
 <button
        type="submit"
        className="w-full bg-[#04254d] text-white py-2 rounded-full font-semibold hover:bg-[#0c1c5c]"
      >
        Verify & Login
      </button>
    </>
  )}
</form>

</AuthRightPanel>
    </div>
  );
};

export default Login;
