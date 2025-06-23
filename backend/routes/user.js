// Import the required modules
const express = require("express")
const { signin, sendotp, register } = require("../controllers/AuthController")
const { resetPasswordToken, resetPassword } = require("../controllers/resetPasswordController")
const router = express.Router()

// Routes for Login, Signup, and Authentication

// Route for user login
router.post("/signin", signin)

// Route for user signup
router.post("/register", register)

// Route for sending OTP to the user's email
router.post("/sendotp", sendotp)

// // Route for Changing the password

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)


module.exports = router
