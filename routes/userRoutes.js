// // // // // // // // const express = require("express")
// // // // // // // // const router = express.Router()
// // // // // // // // const jwt = require("jsonwebtoken")
// // // // // // // // const User = require("../models/User")
// // // // // // // // const auth = require("../middleware/auth")

// // // // // // // // // @route   POST api/users/register
// // // // // // // // // @desc    Register a user
// // // // // // // // // @access  Public
// // // // // // // // router.post("/register", async (req, res) => {
// // // // // // // //   const { username, password } = req.body

// // // // // // // //   try {
// // // // // // // //     // Check if user already exists
// // // // // // // //     let user = await User.findOne({ username })

// // // // // // // //     if (user) {
// // // // // // // //       return res.status(400).json({ msg: "User already exists" })
// // // // // // // //     }

// // // // // // // //     // Create new user
// // // // // // // //     user = new User({
// // // // // // // //       username,
// // // // // // // //       password,
// // // // // // // //       role: "user", // Default role
// // // // // // // //     })

// // // // // // // //     await user.save()

// // // // // // // //     // Create JWT token
// // // // // // // //     const payload = {
// // // // // // // //       user: {
// // // // // // // //         id: user.id,
// // // // // // // //         role: user.role,
// // // // // // // //       },
// // // // // // // //     }

// // // // // // // //     jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "24h" }, (err, token) => {
// // // // // // // //       if (err) throw err
// // // // // // // //       res.json({ token })
// // // // // // // //     })
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error(err.message)
// // // // // // // //     res.status(500).send("Server Error")
// // // // // // // //   }
// // // // // // // // })

// // // // // // // // // @route   POST api/users/login
// // // // // // // // // @desc    Authenticate user & get token
// // // // // // // // // @access  Public
// // // // // // // // router.post("/login", async (req, res) => {
// // // // // // // //   const { username, password } = req.body

// // // // // // // //   try {
// // // // // // // //     // Check if user exists
// // // // // // // //     const user = await User.findOne({ username })

// // // // // // // //     if (!user) {
// // // // // // // //       return res.status(400).json({ msg: "Invalid credentials" })
// // // // // // // //     }

// // // // // // // //     // Check password
// // // // // // // //     const isMatch = await user.comparePassword(password)

// // // // // // // //     if (!isMatch) {
// // // // // // // //       return res.status(400).json({ msg: "Invalid credentials" })
// // // // // // // //     }

// // // // // // // //     // Create JWT token
// // // // // // // //     const payload = {
// // // // // // // //       user: {
// // // // // // // //         id: user.id,
// // // // // // // //         role: user.role,
// // // // // // // //       },
// // // // // // // //     }

// // // // // // // //     jwt.sign(payload, process.env.JWT_SECRET || "secret", { expiresIn: "24h" }, (err, token) => {
// // // // // // // //       if (err) throw err
// // // // // // // //       res.json({ token, user: { id: user.id, username: user.username, role: user.role } })
// // // // // // // //     })
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error(err.message)
// // // // // // // //     res.status(500).send("Server Error")
// // // // // // // //   }
// // // // // // // // })

// // // // // // // // // @route   GET api/users/me
// // // // // // // // // @desc    Get current user
// // // // // // // // // @access  Private
// // // // // // // // router.get("/me", auth, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const user = await User.findById(req.user.id).select("-password")
// // // // // // // //     res.json(user)
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error(err.message)
// // // // // // // //     res.status(500).send("Server Error")
// // // // // // // //   }
// // // // // // // // })

// // // // // // // // module.exports = router

// // // // // // // const express = require("express")
// // // // // // // const router = express.Router()
// // // // // // // const jwt = require("jsonwebtoken")
// // // // // // // const User = require("../models/User")
// // // // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // // // const crypto = require("crypto")

// // // // // // // // @route   POST api/users/register
// // // // // // // // @desc    Register a user
// // // // // // // // @access  Public
// // // // // // // router.post("/register", async (req, res) => {
// // // // // // //   const { username, email, password, firstName, lastName, company, phone } = req.body

// // // // // // //   try {
// // // // // // //     // Check if user already exists
// // // // // // //     let user = await User.findOne({ $or: [{ email }, { username }] })

// // // // // // //     if (user) {
// // // // // // //       return res.status(400).json({ message: "User already exists" })
// // // // // // //     }

// // // // // // //     // Create new user
// // // // // // //     user = new User({
// // // // // // //       username,
// // // // // // //       email,
// // // // // // //       password,
// // // // // // //       firstName,
// // // // // // //       lastName,
// // // // // // //       company,
// // // // // // //       phone,
// // // // // // //       role: "user", // Default role
// // // // // // //     })

// // // // // // //     await user.save()

// // // // // // //     // Create JWT token
// // // // // // //     const payload = {
// // // // // // //       user: {
// // // // // // //         id: user.id,
// // // // // // //         role: user.role,
// // // // // // //       },
// // // // // // //     }

// // // // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // // // //       if (err) throw err
// // // // // // //       res.json({
// // // // // // //         token,
// // // // // // //         user: {
// // // // // // //           id: user.id,
// // // // // // //           username: user.username,
// // // // // // //           email: user.email,
// // // // // // //           firstName: user.firstName,
// // // // // // //           lastName: user.lastName,
// // // // // // //           role: user.role,
// // // // // // //         },
// // // // // // //       })
// // // // // // //     })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error registering user:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   POST api/users/login
// // // // // // // // @desc    Authenticate user & get token
// // // // // // // // @access  Public
// // // // // // // router.post("/login", async (req, res) => {
// // // // // // //   const { email, password } = req.body

// // // // // // //   try {
// // // // // // //     // Check if user exists
// // // // // // //     const user = await User.findOne({ email })

// // // // // // //     if (!user) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // // // //     }

// // // // // // //     // Check password
// // // // // // //     const isMatch = await user.comparePassword(password)

// // // // // // //     if (!isMatch) {
// // // // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // // // //     }

// // // // // // //     // Update last login
// // // // // // //     user.lastLogin = Date.now()
// // // // // // //     await user.save()

// // // // // // //     // Create JWT token
// // // // // // //     const payload = {
// // // // // // //       user: {
// // // // // // //         id: user.id,
// // // // // // //         role: user.role,
// // // // // // //       },
// // // // // // //     }

// // // // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // // // //       if (err) throw err
// // // // // // //       res.json({
// // // // // // //         token,
// // // // // // //         user: {
// // // // // // //           id: user.id,
// // // // // // //           username: user.username,
// // // // // // //           email: user.email,
// // // // // // //           firstName: user.firstName,
// // // // // // //           lastName: user.lastName,
// // // // // // //           role: user.role,
// // // // // // //         },
// // // // // // //       })
// // // // // // //     })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error logging in:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   GET api/users/me
// // // // // // // // @desc    Get current user
// // // // // // // // @access  Private
// // // // // // // router.get("/me", auth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user.id).select("-password")
// // // // // // //     res.json(user)
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching user:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   PUT api/users/me
// // // // // // // // @desc    Update current user
// // // // // // // // @access  Private
// // // // // // // router.put("/me", auth, async (req, res) => {
// // // // // // //   const { firstName, lastName, company, phone, address } = req.body

// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user.id)

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     // Update fields
// // // // // // //     if (firstName) user.firstName = firstName
// // // // // // //     if (lastName) user.lastName = lastName
// // // // // // //     if (company) user.company = company
// // // // // // //     if (phone) user.phone = phone
// // // // // // //     if (address) user.address = address

// // // // // // //     await user.save()

// // // // // // //     res.json(user)
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error updating user:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   PUT api/users/password
// // // // // // // // @desc    Update password
// // // // // // // // @access  Private
// // // // // // // router.put("/password", auth, async (req, res) => {
// // // // // // //   const { currentPassword, newPassword } = req.body

// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.user.id)

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     // Check current password
// // // // // // //     const isMatch = await user.comparePassword(currentPassword)

// // // // // // //     if (!isMatch) {
// // // // // // //       return res.status(400).json({ message: "Current password is incorrect" })
// // // // // // //     }

// // // // // // //     // Update password
// // // // // // //     user.password = newPassword
// // // // // // //     await user.save()

// // // // // // //     res.json({ message: "Password updated successfully" })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error updating password:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   POST api/users/forgot-password
// // // // // // // // @desc    Send password reset email
// // // // // // // // @access  Public
// // // // // // // router.post("/forgot-password", async (req, res) => {
// // // // // // //   const { email } = req.body

// // // // // // //   try {
// // // // // // //     const user = await User.findOne({ email })

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     // Generate reset token
// // // // // // //     const resetToken = crypto.randomBytes(20).toString("hex")
// // // // // // //     user.resetPasswordToken = resetToken
// // // // // // //     user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

// // // // // // //     await user.save()

// // // // // // //     // In a real app, send email with reset link
// // // // // // //     // For demo purposes, just return the token
// // // // // // //     res.json({
// // // // // // //       message: "Password reset email sent",
// // // // // // //       resetToken, // In production, don't send this in the response
// // // // // // //     })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error sending reset email:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   POST api/users/reset-password/:token
// // // // // // // // @desc    Reset password
// // // // // // // // @access  Public
// // // // // // // router.post("/reset-password/:token", async (req, res) => {
// // // // // // //   const { password } = req.body
// // // // // // //   const resetPasswordToken = req.params.token

// // // // // // //   try {
// // // // // // //     const user = await User.findOne({
// // // // // // //       resetPasswordToken,
// // // // // // //       resetPasswordExpires: { $gt: Date.now() },
// // // // // // //     })

// // // // // // //     if (!user) {
// // // // // // //       return res.status(400).json({ message: "Password reset token is invalid or has expired" })
// // // // // // //     }

// // // // // // //     // Update password
// // // // // // //     user.password = password
// // // // // // //     user.resetPasswordToken = undefined
// // // // // // //     user.resetPasswordExpires = undefined

// // // // // // //     await user.save()

// // // // // // //     res.json({ message: "Password has been reset" })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error resetting password:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   GET api/users
// // // // // // // // @desc    Get all users
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const users = await User.find().select("-password")
// // // // // // //     res.json(users)
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching users:", err.message)
// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   GET api/users/:id
// // // // // // // // @desc    Get user by ID
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.params.id).select("-password")

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     res.json(user)
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching user:", err.message)

// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   PUT api/users/:id
// // // // // // // // @desc    Update user
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // //   const { username, email, firstName, lastName, role, company, phone, address } = req.body

// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.params.id)

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     // Update fields
// // // // // // //     if (username) user.username = username
// // // // // // //     if (email) user.email = email
// // // // // // //     if (firstName) user.firstName = firstName
// // // // // // //     if (lastName) user.lastName = lastName
// // // // // // //     if (role) user.role = role
// // // // // // //     if (company) user.company = company
// // // // // // //     if (phone) user.phone = phone
// // // // // // //     if (address) user.address = address

// // // // // // //     await user.save()

// // // // // // //     res.json(user)
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error updating user:", err.message)

// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // // @route   DELETE api/users/:id
// // // // // // // // @desc    Delete user
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const user = await User.findById(req.params.id)

// // // // // // //     if (!user) {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     await user.remove()

// // // // // // //     res.json({ message: "User removed" })
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error deleting user:", err.message)

// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // // //     }

// // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // //   }
// // // // // // // })

// // // // // // // module.exports = router


// // // // // // const express = require("express")
// // // // // // const router = express.Router()
// // // // // // const jwt = require("jsonwebtoken")
// // // // // // const User = require("../models/User")
// // // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // // const crypto = require("crypto")

// // // // // // // @route   POST api/users/register
// // // // // // // @desc    Register a user
// // // // // // // @access  Public
// // // // // // router.post("/register", async (req, res) => {
// // // // // //   const { username, email, password, firstName, lastName, company, phone } = req.body

// // // // // //   try {
// // // // // //     // Check if user already exists
// // // // // //     let user = await User.findOne({ $or: [{ email }, { username }] })

// // // // // //     if (user) {
// // // // // //       return res.status(400).json({ message: "User already exists" })
// // // // // //     }

// // // // // //     // Create new user
// // // // // //     user = new User({
// // // // // //       username,
// // // // // //       email,
// // // // // //       password,
// // // // // //       firstName,
// // // // // //       lastName,
// // // // // //       company,
// // // // // //       phone,
// // // // // //       role: "user", // Default role
// // // // // //     })

// // // // // //     await user.save()

// // // // // //     // Create JWT token
// // // // // //     const payload = {
// // // // // //       user: {
// // // // // //         id: user.id,
// // // // // //         role: user.role,
// // // // // //       },
// // // // // //     }

// // // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // // //       if (err) throw err
// // // // // //       res.json({
// // // // // //         token,
// // // // // //         user: {
// // // // // //           id: user.id,
// // // // // //           username: user.username,
// // // // // //           email: user.email,
// // // // // //           firstName: user.firstName,
// // // // // //           lastName: user.lastName,
// // // // // //           role: user.role,
// // // // // //         },
// // // // // //       })
// // // // // //     })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error registering user:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   POST api/users/login
// // // // // // // @desc    Authenticate user & get token
// // // // // // // @access  Public
// // // // // // router.post("/login", async (req, res) => {
// // // // // //   const { email, password } = req.body

// // // // // //   try {
// // // // // //     // Check if user exists
// // // // // //     const user = await User.findOne({ email })

// // // // // //     if (!user) {
// // // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // // //     }

// // // // // //     // Check password
// // // // // //     const isMatch = await user.comparePassword(password)

// // // // // //     if (!isMatch) {
// // // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // // //     }

// // // // // //     // Update last login
// // // // // //     user.lastLogin = Date.now()
// // // // // //     await user.save()

// // // // // //     // Create JWT token
// // // // // //     const payload = {
// // // // // //       user: {
// // // // // //         id: user.id,
// // // // // //         role: user.role,
// // // // // //       },
// // // // // //     }

// // // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // // //       if (err) throw err
// // // // // //       res.json({
// // // // // //         token,
// // // // // //         user: {
// // // // // //           id: user.id,
// // // // // //           username: user.username,
// // // // // //           email: user.email,
// // // // // //           firstName: user.firstName,
// // // // // //           lastName: user.lastName,
// // // // // //           role: user.role,
// // // // // //         },
// // // // // //       })
// // // // // //     })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error logging in:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   GET api/users/me
// // // // // // // @desc    Get current user
// // // // // // // @access  Private
// // // // // // router.get("/me", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.user.id).select("-password")
// // // // // //     res.json(user)
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching user:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   PUT api/users/me
// // // // // // // @desc    Update current user
// // // // // // // @access  Private
// // // // // // router.put("/me", auth, async (req, res) => {
// // // // // //   const { firstName, lastName, company, phone, address } = req.body

// // // // // //   try {
// // // // // //     const user = await User.findById(req.user.id)

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     // Update fields
// // // // // //     if (firstName) user.firstName = firstName
// // // // // //     if (lastName) user.lastName = lastName
// // // // // //     if (company) user.company = company
// // // // // //     if (phone) user.phone = phone
// // // // // //     if (address) user.address = address

// // // // // //     await user.save()

// // // // // //     res.json(user)
// // // // // //   } catch (err) {
// // // // // //     console.error("Error updating user:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   PUT api/users/password
// // // // // // // @desc    Update password
// // // // // // // @access  Private
// // // // // // router.put("/password", auth, async (req, res) => {
// // // // // //   const { currentPassword, newPassword } = req.body

// // // // // //   try {
// // // // // //     const user = await User.findById(req.user.id)

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     // Check current password
// // // // // //     const isMatch = await user.comparePassword(currentPassword)

// // // // // //     if (!isMatch) {
// // // // // //       return res.status(400).json({ message: "Current password is incorrect" })
// // // // // //     }

// // // // // //     // Update password
// // // // // //     user.password = newPassword
// // // // // //     await user.save()

// // // // // //     res.json({ message: "Password updated successfully" })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error updating password:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   POST api/users/forgot-password
// // // // // // // @desc    Send password reset email
// // // // // // // @access  Public
// // // // // // router.post("/forgot-password", async (req, res) => {
// // // // // //   const { email } = req.body

// // // // // //   try {
// // // // // //     const user = await User.findOne({ email })

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     // Generate reset token
// // // // // //     const resetToken = crypto.randomBytes(20).toString("hex")
// // // // // //     user.resetPasswordToken = resetToken
// // // // // //     user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

// // // // // //     await user.save()

// // // // // //     // In a real app, send email with reset link
// // // // // //     // For demo purposes, just return the token
// // // // // //     res.json({
// // // // // //       message: "Password reset email sent",
// // // // // //       resetToken, // In production, don't send this in the response
// // // // // //     })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error sending reset email:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   POST api/users/reset-password/:token
// // // // // // // @desc    Reset password
// // // // // // // @access  Public
// // // // // // router.post("/reset-password/:token", async (req, res) => {
// // // // // //   const { password } = req.body
// // // // // //   const resetPasswordToken = req.params.token

// // // // // //   try {
// // // // // //     const user = await User.findOne({
// // // // // //       resetPasswordToken,
// // // // // //       resetPasswordExpires: { $gt: Date.now() },
// // // // // //     })

// // // // // //     if (!user) {
// // // // // //       return res.status(400).json({ message: "Password reset token is invalid or has expired" })
// // // // // //     }

// // // // // //     // Update password
// // // // // //     user.password = password
// // // // // //     user.resetPasswordToken = undefined
// // // // // //     user.resetPasswordExpires = undefined

// // // // // //     await user.save()

// // // // // //     res.json({ message: "Password has been reset" })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error resetting password:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   GET api/users
// // // // // // // @desc    Get all users
// // // // // // // @access  Private (Admin only)
// // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const users = await User.find().select("-password")
// // // // // //     res.json(users)
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching users:", err.message)
// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   GET api/users/:id
// // // // // // // @desc    Get user by ID
// // // // // // // @access  Private (Admin only)
// // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.params.id).select("-password")

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     res.json(user)
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching user:", err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   PUT api/users/:id
// // // // // // // @desc    Update user
// // // // // // // @access  Private (Admin only)
// // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // //   const { username, email, firstName, lastName, role, company, phone, address } = req.body

// // // // // //   try {
// // // // // //     const user = await User.findById(req.params.id)

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     // Update fields
// // // // // //     if (username) user.username = username
// // // // // //     if (email) user.email = email
// // // // // //     if (firstName) user.firstName = firstName
// // // // // //     if (lastName) user.lastName = lastName
// // // // // //     if (role) user.role = role
// // // // // //     if (company) user.company = company
// // // // // //     if (phone) user.phone = phone
// // // // // //     if (address) user.address = address

// // // // // //     await user.save()

// // // // // //     res.json(user)
// // // // // //   } catch (err) {
// // // // // //     console.error("Error updating user:", err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // // @route   DELETE api/users/:id
// // // // // // // @desc    Delete user
// // // // // // // @access  Private (Admin only)
// // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const user = await User.findById(req.params.id)

// // // // // //     if (!user) {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     await user.deleteOne()

// // // // // //     res.json({ message: "User removed" })
// // // // // //   } catch (err) {
// // // // // //     console.error("Error deleting user:", err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "User not found" })
// // // // // //     }

// // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // //   }
// // // // // // })

// // // // // // module.exports = router

// // // // // const express = require("express")
// // // // // const router = express.Router()
// // // // // const jwt = require("jsonwebtoken")
// // // // // const User = require("../models/User")
// // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // const crypto = require("crypto")

// // // // // // @route   POST api/users/register
// // // // // // @desc    Register a user
// // // // // // @access  Public
// // // // // router.post("/register", async (req, res) => {
// // // // //   const { username, email, password, firstName, lastName, company, phone } = req.body

// // // // //   try {
// // // // //     // Check if user already exists
// // // // //     let user = await User.findOne({ $or: [{ email }, { username }] })

// // // // //     if (user) {
// // // // //       return res.status(400).json({ message: "User already exists" })
// // // // //     }

// // // // //     // Create new user
// // // // //     user = new User({
// // // // //       username,
// // // // //       email,
// // // // //       password,
// // // // //       firstName,
// // // // //       lastName,
// // // // //       company,
// // // // //       phone,
// // // // //       role: "user", // Default role
// // // // //     })

// // // // //     await user.save()

// // // // //     // Create JWT token
// // // // //     const payload = {
// // // // //       user: {
// // // // //         id: user.id,
// // // // //         role: user.role,
// // // // //       },
// // // // //     }

// // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // //       if (err) throw err
// // // // //       res.json({
// // // // //         token,
// // // // //         user: {
// // // // //           id: user.id,
// // // // //           username: user.username,
// // // // //           email: user.email,
// // // // //           firstName: user.firstName,
// // // // //           lastName: user.lastName,
// // // // //           role: user.role,
// // // // //         },
// // // // //       })
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error registering user:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   POST api/users/login
// // // // // // @desc    Authenticate user & get token
// // // // // // @access  Public
// // // // // router.post("/login", async (req, res) => {
// // // // //   const { email, password } = req.body

// // // // //   try {
// // // // //     // Check if user exists
// // // // //     const user = await User.findOne({ email })

// // // // //     if (!user) {
// // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // //     }

// // // // //     // Check password
// // // // //     const isMatch = await user.comparePassword(password)

// // // // //     if (!isMatch) {
// // // // //       return res.status(400).json({ message: "Invalid credentials" })
// // // // //     }

// // // // //     // Update last login
// // // // //     user.lastLogin = Date.now()
// // // // //     await user.save()

// // // // //     // Create JWT token
// // // // //     const payload = {
// // // // //       user: {
// // // // //         id: user.id,
// // // // //         role: user.role,
// // // // //       },
// // // // //     }

// // // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // // //       if (err) throw err
// // // // //       res.json({
// // // // //         token,
// // // // //         user: {
// // // // //           id: user.id,
// // // // //           username: user.username,
// // // // //           email: user.email,
// // // // //           firstName: user.firstName,
// // // // //           lastName: user.lastName,
// // // // //           role: user.role,
// // // // //         },
// // // // //       })
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error logging in:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/users/me
// // // // // // @desc    Get current user
// // // // // // @access  Private
// // // // // router.get("/me", auth, async (req, res) => {
// // // // //   try {
// // // // //     const user = await User.findById(req.user.id).select("-password")
// // // // //     res.json(user)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching user:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   PUT api/users/me
// // // // // // @desc    Update current user
// // // // // // @access  Private
// // // // // router.put("/me", auth, async (req, res) => {
// // // // //   const { firstName, lastName, company, phone, address } = req.body

// // // // //   try {
// // // // //     const user = await User.findById(req.user.id)

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     // Update fields
// // // // //     if (firstName) user.firstName = firstName
// // // // //     if (lastName) user.lastName = lastName
// // // // //     if (company) user.company = company
// // // // //     if (phone) user.phone = phone
// // // // //     if (address) user.address = address

// // // // //     await user.save()

// // // // //     res.json(user)
// // // // //   } catch (err) {
// // // // //     console.error("Error updating user:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   PUT api/users/password
// // // // // // @desc    Update password
// // // // // // @access  Private
// // // // // router.put("/password", auth, async (req, res) => {
// // // // //   const { currentPassword, newPassword } = req.body

// // // // //   try {
// // // // //     const user = await User.findById(req.user.id)

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     // Check current password
// // // // //     const isMatch = await user.comparePassword(currentPassword)

// // // // //     if (!isMatch) {
// // // // //       return res.status(400).json({ message: "Current password is incorrect" })
// // // // //     }

// // // // //     // Update password
// // // // //     user.password = newPassword
// // // // //     await user.save()

// // // // //     res.json({ message: "Password updated successfully" })
// // // // //   } catch (err) {
// // // // //     console.error("Error updating password:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   POST api/users/forgot-password
// // // // // // @desc    Send password reset email
// // // // // // @access  Public
// // // // // router.post("/forgot-password", async (req, res) => {
// // // // //   const { email } = req.body

// // // // //   try {
// // // // //     const user = await User.findOne({ email })

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     // Generate reset token
// // // // //     const resetToken = crypto.randomBytes(20).toString("hex")
// // // // //     user.resetPasswordToken = resetToken
// // // // //     user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

// // // // //     await user.save()

// // // // //     // In a real app, send email with reset link
// // // // //     // For demo purposes, just return the token
// // // // //     res.json({
// // // // //       message: "Password reset email sent",
// // // // //       resetToken, // In production, don't send this in the response
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error sending reset email:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   POST api/users/reset-password/:token
// // // // // // @desc    Reset password
// // // // // // @access  Public
// // // // // router.post("/reset-password/:token", async (req, res) => {
// // // // //   const { password } = req.body
// // // // //   const resetPasswordToken = req.params.token

// // // // //   try {
// // // // //     const user = await User.findOne({
// // // // //       resetPasswordToken,
// // // // //       resetPasswordExpires: { $gt: Date.now() },
// // // // //     })

// // // // //     if (!user) {
// // // // //       return res.status(400).json({ message: "Password reset token is invalid or has expired" })
// // // // //     }

// // // // //     // Update password
// // // // //     user.password = password
// // // // //     user.resetPasswordToken = undefined
// // // // //     user.resetPasswordExpires = undefined

// // // // //     await user.save()

// // // // //     res.json({ message: "Password has been reset" })
// // // // //   } catch (err) {
// // // // //     console.error("Error resetting password:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/users
// // // // // // @desc    Get all users
// // // // // // @access  Private (Admin only)
// // // // // router.get("/", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const users = await User.find().select("-password")
// // // // //     res.json(users)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching users:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/users/stats
// // // // // // @desc    Get user statistics
// // // // // // @access  Private (Admin only)
// // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     // Get total users count
// // // // //     const totalUsers = await User.countDocuments()

// // // // //     // Get new users in the last 30 days
// // // // //     const thirtyDaysAgo = new Date()
// // // // //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
// // // // //     const newUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } })

// // // // //     // Get users by role
// // // // //     const usersByRole = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }])

// // // // //     // Format role data
// // // // //     const roleData = {}
// // // // //     usersByRole.forEach((item) => {
// // // // //       roleData[item._id] = item.count
// // // // //     })

// // // // //     // Get monthly user registrations for the last 6 months
// // // // //     const sixMonthsAgo = new Date()
// // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5)
// // // // //     sixMonthsAgo.setDate(1) // Start of month

// // // // //     const monthlyRegistrations = await User.aggregate([
// // // // //       { $match: { createdAt: { $gte: sixMonthsAgo } } },
// // // // //       {
// // // // //         $group: {
// // // // //           _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
// // // // //           count: { $sum: 1 },
// // // // //         },
// // // // //       },
// // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // //     ])

// // // // //     // Format monthly data
// // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// // // // //     const monthlyData = []

// // // // //     // Initialize with zeros for all months
// // // // //     for (let i = 0; i < 6; i++) {
// // // // //       const date = new Date()
// // // // //       date.setMonth(date.getMonth() - 5 + i)
// // // // //       date.setDate(1)
// // // // //       monthlyData.push({
// // // // //         month: monthNames[date.getMonth()],
// // // // //         year: date.getFullYear(),
// // // // //         count: 0,
// // // // //       })
// // // // //     }

// // // // //     // Fill in actual data
// // // // //     monthlyRegistrations.forEach((item) => {
// // // // //       const monthIndex = item._id.month - 1
// // // // //       const year = item._id.year

// // // // //       const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year)

// // // // //       if (dataIndex !== -1) {
// // // // //         monthlyData[dataIndex].count = item.count
// // // // //       }
// // // // //     })

// // // // //     res.json({
// // // // //       totalUsers,
// // // // //       newUsers,
// // // // //       roleData,
// // // // //       monthlyData,
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching user stats:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/users/:id
// // // // // // @desc    Get user by ID
// // // // // // @access  Private (Admin only)
// // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const user = await User.findById(req.params.id).select("-password")

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     res.json(user)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching user:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   PUT api/users/:id
// // // // // // @desc    Update user
// // // // // // @access  Private (Admin only)
// // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // //   const { username, email, firstName, lastName, role, company, phone, address } = req.body

// // // // //   try {
// // // // //     const user = await User.findById(req.params.id)

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     // Update fields
// // // // //     if (username) user.username = username
// // // // //     if (email) user.email = email
// // // // //     if (firstName) user.firstName = firstName
// // // // //     if (lastName) user.lastName = lastName
// // // // //     if (role) user.role = role
// // // // //     if (company) user.company = company
// // // // //     if (phone) user.phone = phone
// // // // //     if (address) user.address = address

// // // // //     await user.save()

// // // // //     res.json(user)
// // // // //   } catch (err) {
// // // // //     console.error("Error updating user:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   DELETE api/users/:id
// // // // // // @desc    Delete user
// // // // // // @access  Private (Admin only)
// // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const user = await User.findById(req.params.id)

// // // // //     if (!user) {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     await user.deleteOne()

// // // // //     res.json({ message: "User removed" })
// // // // //   } catch (err) {
// // // // //     console.error("Error deleting user:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "User not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // module.exports = router


// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const jwt = require("jsonwebtoken");
// // // // const User = require("../models/User");
// // // // const { auth, adminAuth } = require("../middleware/auth");
// // // // const crypto = require("crypto");

// // // // // @route   POST api/users/register
// // // // // @desc    Register a user
// // // // // @access  Public
// // // // router.post("/register", async (req, res) => {
// // // //   const { username, email, password, firstName, lastName, company, phone } = req.body;

// // // //   try {
// // // //     // Check if user already exists
// // // //     let user = await User.findOne({ $or: [{ email }, { username }] });

// // // //     if (user) {
// // // //       return res.status(400).json({ message: "User already exists" });
// // // //     }

// // // //     // Create new user
// // // //     user = new User({
// // // //       username,
// // // //       email,
// // // //       password,
// // // //       firstName,
// // // //       lastName,
// // // //       company,
// // // //       phone,
// // // //       role: "user", // Default role
// // // //     });

// // // //     await user.save();

// // // //     // Create JWT token
// // // //     const payload = {
// // // //       user: {
// // // //         id: user.id,
// // // //         role: user.role,
// // // //       },
// // // //     };

// // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // //       if (err) throw err;
// // // //       res.json({
// // // //         token,
// // // //         user: {
// // // //           id: user.id,
// // // //           username: user.username,
// // // //           email: user.email,
// // // //           firstName: user.firstName,
// // // //           lastName: user.lastName,
// // // //           role: user.role,
// // // //         },
// // // //       });
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error registering user:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   POST api/users/add-admin
// // // // // @desc    Add a new admin user
// // // // // @access  Private (Admin only)
// // // // router.post("/add-admin", adminAuth, async (req, res) => {
// // // //   const { username, email, password, firstName, lastName, company, phone } = req.body;

// // // //   try {
// // // //     // Check if user already exists
// // // //     let user = await User.findOne({ $or: [{ email }, { username }] });

// // // //     if (user) {
// // // //       return res.status(400).json({ message: "User already exists" });
// // // //     }

// // // //     // Create new admin user
// // // //     user = new User({
// // // //       username,
// // // //       email,
// // // //       password,
// // // //       firstName,
// // // //       lastName,
// // // //       company,
// // // //       phone,
// // // //       role: "admin",
// // // //     });

// // // //     await user.save();

// // // //     res.json({
// // // //       id: user.id,
// // // //       username: user.username,
// // // //       email: user.email,
// // // //       firstName: user.firstName,
// // // //       lastName: user.lastName,
// // // //       role: user.role,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error adding admin:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   POST api/users/login
// // // // // @desc    Authenticate user & get token
// // // // // @access  Public
// // // // router.post("/login", async (req, res) => {
// // // //   const { email, password } = req.body;

// // // //   try {
// // // //     // Check if user exists
// // // //     const user = await User.findOne({ email });

// // // //     if (!user) {
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     // Check password
// // // //     const isMatch = await user.comparePassword(password);

// // // //     if (!isMatch) {
// // // //       return res.status(400).json({ message: "Invalid credentials" });
// // // //     }

// // // //     // Update last login
// // // //     user.lastLogin = Date.now();
// // // //     await user.save();

// // // //     // Create JWT token
// // // //     const payload = {
// // // //       user: {
// // // //         id: user.id,
// // // //         role: user.role,
// // // //       },
// // // //     };

// // // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // // //       if (err) throw err;
// // // //       res.json({
// // // //         token,
// // // //         user: {
// // // //           id: user.id,
// // // //           username: user.username,
// // // //           email: user.email,
// // // //           firstName: user.firstName,
// // // //           lastName: user.lastName,
// // // //           role: user.role,
// // // //         },
// // // //       });
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error logging in:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/users/me
// // // // // @desc    Get current user
// // // // // @access  Private
// // // // router.get("/me", auth, async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.user.id).select("-password");
// // // //     res.json(user);
// // // //   } catch (err) {
// // // //     console.error("Error fetching user:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/users/me
// // // // // @desc    Update current user
// // // // // @access  Private
// // // // router.put("/me", auth, async (req, res) => {
// // // //   const { firstName, lastName, company, phone, address } = req.body;

// // // //   try {
// // // //     const user = await User.findById(req.user.id);

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     // Update fields
// // // //     if (firstName) user.firstName = firstName;
// // // //     if (lastName) user.lastName = lastName;
// // // //     if (company) user.company = company;
// // // //     if (phone) user.phone = phone;
// // // //     if (address) user.address = address;

// // // //     await user.save();

// // // //     res.json(user);
// // // //   } catch (err) {
// // // //     console.error("Error updating user:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/users/password
// // // // // @desc    Update password
// // // // // @access  Private
// // // // router.put("/password", auth, async (req, res) => {
// // // //   const { currentPassword, newPassword } = req.body;

// // // //   try {
// // // //     const user = await User.findById(req.user.id);

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     // Check current password
// // // //     const isMatch = await user.comparePassword(currentPassword);

// // // //     if (!isMatch) {
// // // //       return res.status(400).json({ message: "Current password is incorrect" });
// // // //     }

// // // //     // Update password
// // // //     user.password = newPassword;
// // // //     await user.save();

// // // //     res.json({ message: "Password updated successfully" });
// // // //   } catch (err) {
// // // //     console.error("Error updating password:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   POST api/users/forgot-password
// // // // // @desc    Send password reset email
// // // // // @access  Public
// // // // router.post("/forgot-password", async (req, res) => {
// // // //   const { email } = req.body;

// // // //   try {
// // // //     const user = await User.findOne({ email });

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     // Generate reset token
// // // //     const resetToken = crypto.randomBytes(20).toString("hex");
// // // //     user.resetPasswordToken = resetToken;
// // // //     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

// // // //     await user.save();

// // // //     // In a real app, send email with reset link
// // // //     // For demo purposes, just return the token
// // // //     res.json({
// // // //       message: "Password reset email sent",
// // // //       resetToken, // In production, don't send this in the response
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error sending reset email:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   POST api/users/reset-password/:token
// // // // // @desc    Reset password
// // // // // @access  Public
// // // // router.post("/reset-password/:token", async (req, res) => {
// // // //   const { password } = req.body;
// // // //   const resetPasswordToken = req.params.token;

// // // //   try {
// // // //     const user = await User.findOne({
// // // //       resetPasswordToken,
// // // //       resetPasswordExpires: { $gt: Date.now() },
// // // //     });

// // // //     if (!user) {
// // // //       return res.status(400).json({ message: "Password reset token is invalid or has expired" });
// // // //     }

// // // //     // Update password
// // // //     user.password = password;
// // // //     user.resetPasswordToken = undefined;
// // // //     user.resetPasswordExpires = undefined;

// // // //     await user.save();

// // // //     res.json({ message: "Password has been reset" });
// // // //   } catch (err) {
// // // //     console.error("Error resetting password:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/users
// // // // // @desc    Get all users
// // // // // @access  Private (Admin only)
// // // // router.get("/", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const users = await User.find().select("-password");
// // // //     res.json(users);
// // // //   } catch (err) {
// // // //     console.error("Error fetching users:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/users/stats
// // // // // @desc    Get user statistics
// // // // // @access  Private (Admin only)
// // // // router.get("/stats", adminAuth, async (req, res) => {
// // // //   try {
// // // //     // Get total users count
// // // //     const totalUsers = await User.countDocuments();

// // // //     // Get new users in the last 30 days
// // // //     const thirtyDaysAgo = new Date();
// // // //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
// // // //     const newUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

// // // //     // Get users by role
// // // //     const usersByRole = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);

// // // //     // Format role data
// // // //     const roleData = {};
// // // //     usersByRole.forEach((item) => {
// // // //       roleData[item._id] = item.count;
// // // //     });

// // // //     // Get monthly user registrations for the last 6 months
// // // //     const sixMonthsAgo = new Date();
// // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // //     sixMonthsAgo.setDate(1); // Start of month

// // // //     const monthlyRegistrations = await User.aggregate([
// // // //       { $match: { createdAt: { $gte: sixMonthsAgo } } },
// // // //       {
// // // //         $group: {
// // // //           _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
// // // //           count: { $sum: 1 },
// // // //         },
// // // //       },
// // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // //     ]);

// // // //     // Format monthly data
// // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // //     const monthlyData = [];

// // // //     // Initialize with zeros for all months
// // // //     for (let i = 0; i < 6; i++) {
// // // //       const date = new Date();
// // // //       date.setMonth(date.getMonth() - 5 + i);
// // // //       date.setDate(1);
// // // //       monthlyData.push({
// // // //         month: monthNames[date.getMonth()],
// // // //         year: date.getFullYear(),
// // // //         count: 0,
// // // //       });
// // // //     }

// // // //     // Fill in actual data
// // // //     monthlyRegistrations.forEach((item) => {
// // // //       const monthIndex = item._id.month - 1;
// // // //       const year = item._id.year;

// // // //       const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year);

// // // //       if (dataIndex !== -1) {
// // // //         monthlyData[dataIndex].count = item.count;
// // // //       }
// // // //     });

// // // //     res.json({
// // // //       totalUsers,
// // // //       newUsers,
// // // //       roleData,
// // // //       monthlyData,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error fetching user stats:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/users/:id
// // // // // @desc    Get user by ID
// // // // // @access  Private (Admin only)
// // // // router.get("/:id", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.params.id).select("-password");

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     res.json(user);
// // // //   } catch (err) {
// // // //     console.error("Error fetching user:", err.message);

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/users/:id
// // // // // @desc    Update user
// // // // // @access  Private (Admin only)
// // // // router.put("/:id", adminAuth, async (req, res) => {
// // // //   const { username, email, firstName, lastName, role, company, phone, address } = req.body;

// // // //   try {
// // // //     const user = await User.findById(req.params.id);

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     // Update fields
// // // //     if (username) user.username = username;
// // // //     if (email) user.email = email;
// // // //     if (firstName) user.firstName = firstName;
// // // //     if (lastName) user.lastName = lastName;
// // // //     if (role) user.role = role;
// // // //     if (company) user.company = company;
// // // //     if (phone) user.phone = phone;
// // // //     if (address) user.address = address;

// // // //     await user.save();

// // // //     res.json(user);
// // // //   } catch (err) {
// // // //     console.error("Error updating user:", err.message);

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   DELETE api/users/:id
// // // // // @desc    Delete user
// // // // // @access  Private (Admin only)
// // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const user = await User.findById(req.params.id);

// // // //     if (!user) {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     await user.deleteOne();

// // // //     res.json({ message: "User removed" });
// // // //   } catch (err) {
// // // //     console.error("Error deleting user:", err.message);

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "User not found" });
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // module.exports = router;

// // // const express = require("express")
// // // const router = express.Router()
// // // const jwt = require("jsonwebtoken")
// // // const User = require("../models/User")
// // // const { auth, adminAuth } = require("../middleware/auth")
// // // const crypto = require("crypto")

// // // // @route   POST api/users/register
// // // // @desc    Register a user (used by admins to add users or admins)
// // // // @access  Private (Admin only)
// // // router.post("/register", adminAuth, async (req, res) => {
// // //   const { username, email, password, firstName, lastName, company, phone, role } = req.body

// // //   try {
// // //     // Check if user already exists
// // //     let user = await User.findOne({ $or: [{ email }, { username }] })

// // //     if (user) {
// // //       return res.status(400).json({ message: "User already exists" })
// // //     }

// // //     // Create new user
// // //     user = new User({
// // //       username,
// // //       email,
// // //       password,
// // //       firstName,
// // //       lastName,
// // //       company,
// // //       phone,
// // //       role: role || "user", // Default to user if role not specified
// // //     })

// // //     await user.save()

// // //     res.status(201).json({
// // //       id: user.id,
// // //       username: user.username,
// // //       email: user.email,
// // //       firstName: user.firstName,
// // //       lastName: user.lastName,
// // //       company: user.company,
// // //       phone: user.phone,
// // //       role: user.role,
// // //     })
// // //   } catch (err) {
// // //     console.error("Error registering user:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   POST api/users/login
// // // // @desc    Authenticate user & get token
// // // // @access  Public
// // // router.post("/login", async (req, res) => {
// // //   const { email, password } = req.body

// // //   try {
// // //     // Check if user exists
// // //     const user = await User.findOne({ email })

// // //     if (!user) {
// // //       return res.status(400).json({ message: "Invalid credentials" })
// // //     }

// // //     // Check password
// // //     const isMatch = await user.comparePassword(password)

// // //     if (!isMatch) {
// // //       return res.status(400).json({ message: "Invalid credentials" })
// // //     }

// // //     // Update last login
// // //     user.lastLogin = Date.now()
// // //     await user.save()

// // //     // Create JWT token
// // //     const payload = {
// // //       user: {
// // //         id: user.id,
// // //         role: user.role,
// // //       },
// // //     }

// // //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// // //       if (err) throw err
// // //       res.json({
// // //         token,
// // //         user: {
// // //           id: user.id,
// // //           username: user.username,
// // //           email: user.email,
// // //           firstName: user.firstName,
// // //           lastName: user.lastName,
// // //           role: user.role,
// // //         },
// // //       })
// // //     })
// // //   } catch (err) {
// // //     console.error("Error logging in:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/users/me
// // // // @desc    Get current user
// // // // @access  Private
// // // router.get("/me", auth, async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.user.id).select("-password")
// // //     res.json(user)
// // //   } catch (err) {
// // //     console.error("Error fetching user:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   PUT api/users/me
// // // // @desc    Update current user
// // // // @access  Private
// // // router.put("/me", auth, async (req, res) => {
// // //   const { firstName, lastName, company, phone, address } = req.body

// // //   try {
// // //     const user = await User.findById(req.user.id)

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     // Update fields
// // //     if (firstName) user.firstName = firstName
// // //     if (lastName) user.lastName = lastName
// // //     if (company) user.company = company
// // //     if (phone) user.phone = phone
// // //     if (address) user.address = address

// // //     await user.save()

// // //     res.json(user)
// // //   } catch (err) {
// // //     console.error("Error updating user:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   PUT api/users/password
// // // // @desc    Update password
// // // // @access  Private
// // // router.put("/password", auth, async (req, res) => {
// // //   const { currentPassword, newPassword } = req.body

// // //   try {
// // //     const user = await User.findById(req.user.id)

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     // Check current password
// // //     const isMatch = await user.comparePassword(currentPassword)

// // //     if (!isMatch) {
// // //       return res.status(400).json({ message: "Current password is incorrect" })
// // //     }

// // //     // Update password
// // //     user.password = newPassword
// // //     await user.save()

// // //     res.json({ message: "Password updated successfully" })
// // //   } catch (err) {
// // //     console.error("Error updating password:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   POST api/users/forgot-password
// // // // @desc    Send password reset email
// // // // @access  Public
// // // router.post("/forgot-password", async (req, res) => {
// // //   const { email } = req.body

// // //   try {
// // //     const user = await User.findOne({ email })

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     // Generate reset token
// // //     const resetToken = crypto.randomBytes(20).toString("hex")
// // //     user.resetPasswordToken = resetToken
// // //     user.resetPasswordExpires = Date.now() + 3600000 // 1 hour

// // //     await user.save()

// // //     // In a real app, send email with reset link
// // //     res.json({
// // //       message: "Password reset email sent",
// // //       resetToken, // In production, don't send this in the response
// // //     })
// // //   } catch (err) {
// // //     console.error("Error sending reset email:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   POST api/users/reset-password/:token
// // // // @desc    Reset password
// // // // @access  Public
// // // router.post("/reset-password/:token", async (req, res) => {
// // //   const { password } = req.body
// // //   const resetPasswordToken = req.params.token

// // //   try {
// // //     const user = await User.findOne({
// // //       resetPasswordToken,
// // //       resetPasswordExpires: { $gt: Date.now() },
// // //     })

// // //     if (!user) {
// // //       return res.status(400).json({ message: "Password reset token is invalid or has expired" })
// // //     }

// // //     // Update password
// // //     user.password = password
// // //     user.resetPasswordToken = undefined
// // //     user.resetPasswordExpires = undefined

// // //     await user.save()

// // //     res.json({ message: "Password has been reset" })
// // //   } catch (err) {
// // //     console.error("Error resetting password:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/users
// // // // @desc    Get all users
// // // // @access  Private (Admin only)
// // // router.get("/", adminAuth, async (req, res) => {
// // //   try {
// // //     const users = await User.find().select("-password")
// // //     res.json(users)
// // //   } catch (err) {
// // //     console.error("Error fetching users:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/users/:id
// // // // @desc    Get user by ID
// // // // @access  Private (Admin only)
// // // router.get("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.params.id).select("-password")

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     res.json(user)
// // //   } catch (err) {
// // //     console.error("Error fetching user:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   PUT api/users/:id
// // // // @desc    Update user
// // // // @access  Private (Admin only)
// // // router.put("/:id", adminAuth, async (req, res) => {
// // //   const { username, email, firstName, lastName, role, company, phone, address } = req.body

// // //   try {
// // //     const user = await User.findById(req.params.id)

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     // Update fields
// // //     if (username) user.username = username
// // //     if (email) user.email = email
// // //     if (firstName) user.firstName = firstName
// // //     if (lastName) user.lastName = lastName
// // //     if (role) user.role = role
// // //     if (company) user.company = company
// // //     if (phone) user.phone = phone
// // //     if (address) user.address = address

// // //     await user.save()

// // //     res.json(user)
// // //   } catch (err) {
// // //     console.error("Error updating user:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   DELETE api/users/:id
// // // // @desc    Delete user
// // // // @access  Private (Admin only)
// // // router.delete("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const user = await User.findById(req.params.id)

// // //     if (!user) {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }

// // //     await user.deleteOne()

// // //     res.json({ message: "User removed" })
// // //   } catch (err) {
// // //     console.error("Error deleting user:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "User not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // module.exports = router

// // const express = require("express");
// // const router = express.Router();
// // const jwt = require("jsonwebtoken");
// // const User = require("../models/User");
// // const { auth, adminAuth } = require("../middleware/auth");
// // const crypto = require("crypto");

// // // @route   POST api/users/register
// // // @desc    Register a user (admin or customer)
// // // @access  Public (but restricted to admins in frontend)
// // router.post("/register", async (req, res) => {
// //   const { username, email, password, firstName, lastName, company, phone, role } = req.body;

// //   try {
// //     // Check if user already exists
// //     let user = await User.findOne({ $or: [{ email }, { username }] });

// //     if (user) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     // Create new user
// //     user = new User({
// //       username,
// //       email,
// //       password,
// //       firstName,
// //       lastName,
// //       company,
// //       phone,
// //       role: role || "user", // Default to 'user' if role not provided
// //     });

// //     await user.save();

// //     // Create JWT token
// //     const payload = {
// //       user: {
// //         id: user.id,
// //         role: user.role,
// //       },
// //     };

// //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// //       if (err) throw err;
// //       res.json({
// //         token,
// //         user: {
// //           id: user.id,
// //           username: user.username,
// //           email: user.email,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           role: user.role,
// //           phone: user.phone,
// //           company: user.company,
// //         },
// //       });
// //     });
// //   } catch (err) {
// //     console.error("Error registering user:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   POST api/users/login
// // // @desc    Authenticate user & get token
// // // @access  Public
// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     // Check if user exists
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Check password
// //     const isMatch = await user.comparePassword(password);

// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Update last login
// //     user.lastLogin = Date.now();
// //     await user.save();

// //     // Create JWT token
// //     const payload = {
// //       user: {
// //         id: user.id,
// //         role: user.role,
// //       },
// //     };

// //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
// //       if (err) throw err;
// //       res.json({
// //         token,
// //         user: {
// //           id: user.id,
// //           username: user.username,
// //           email: user.email,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           role: user.role,
// //         },
// //       });
// //     });
// //   } catch (err) {
// //     console.error("Error logging in:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/users/me
// // // @desc    Get current user
// // // @access  Private
// // router.get("/me", auth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.user.id).select("-password");
// //     res.json(user);
// //   } catch (err) {
// //     console.error("Error fetching user:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/users/me
// // // @desc    Update current user
// // // @access  Private
// // router.put("/me", auth, async (req, res) => {
// //   const { firstName, lastName, company, phone, address } = req.body;

// //   try {
// //     const user = await User.findById(req.user.id);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     // Update fields
// //     if (firstName) user.firstName = firstName;
// //     if (lastName) user.lastName = lastName;
// //     if (company) user.company = company;
// //     if (phone) user.phone = phone;
// //     if (address) user.address = address;

// //     await user.save();

// //     res.json(user);
// //   } catch (err) {
// //     console.error("Error updating user:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/users/password
// // // @desc    Update password
// // // @access  Private
// // router.put("/password", auth, async (req, res) => {
// //   const { currentPassword, newPassword } = req.body;

// //   try {
// //     const user = await User.findById(req.user.id);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     // Check current password
// //     const isMatch = await user.comparePassword(currentPassword);

// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Current password is incorrect" });
// //     }

// //     // Update password
// //     user.password = newPassword;
// //     await user.save();

// //     res.json({ message: "Password updated successfully" });
// //   } catch (err) {
// //     console.error("Error updating password:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   POST api/users/forgot-password
// // // @desc    Send password reset email
// // // @access  Public
// // router.post("/forgot-password", async (req, res) => {
// //   const { email } = req.body;

// //   try {
// //     const user = await User.findOne({ email });

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     // Generate reset token
// //     const resetToken = crypto.randomBytes(20).toString("hex");
// //     user.resetPasswordToken = resetToken;
// //     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

// //     await user.save();

// //     // In a real app, send email with reset link
// //     // For demo purposes, just return the token
// //     res.json({
// //       message: "Password reset email sent",
// //       resetToken, // In production, don't send this in the response
// //     });
// //   } catch (err) {
// //     console.error("Error sending reset email:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   POST api/users/reset-password/:token
// // // @desc    Reset password
// // // @access  Public
// // router.post("/reset-password/:token", async (req, res) => {
// //   const { password } = req.body;
// //   const resetPasswordToken = req.params.token;

// //   try {
// //     const user = await User.findOne({
// //       resetPasswordToken,
// //       resetPasswordExpires: { $gt: Date.now() },
// //     });

// //     if (!user) {
// //       return res.status(400).json({ message: "Password reset token is invalid or has expired" });
// //     }

// //     // Update password
// //     user.password = password;
// //     user.resetPasswordToken = undefined;
// //     user.resetPasswordExpires = undefined;

// //     await user.save();

// //     res.json({ message: "Password has been reset" });
// //   } catch (err) {
// //     console.error("Error resetting password:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/users
// // // @desc    Get all users
// // // @access  Private (Admin only)
// // router.get("/", adminAuth, async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");
// //     res.json(users);
// //   } catch (err) {
// //     console.error("Error fetching users:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/users/stats
// // // @desc    Get user statistics
// // // @access  Private (Admin only)
// // router.get("/stats", adminAuth, async (req, res) => {
// //   try {
// //     // Get total users count
// //     const totalUsers = await User.countDocuments();

// //     // Get new users in the last 30 days
// //     const thirtyDaysAgo = new Date();
// //     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
// //     const newUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

// //     // Get users by role
// //     const usersByRole = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);

// //     // Format role data
// //     const roleData = {};
// //     usersByRole.forEach((item) => {
// //       roleData[item._id] = item.count;
// //     });

// //     // Get monthly user registrations for the last 6 months
// //     const sixMonthsAgo = new Date();
// //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// //     sixMonthsAgo.setDate(1); // Start of month

// //     const monthlyRegistrations = await User.aggregate([
// //       { $match: { createdAt: { $gte: sixMonthsAgo } } },
// //       {
// //         $group: {
// //           _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
// //           count: { $sum: 1 },
// //         },
// //       },
// //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// //     ]);

// //     // Format monthly data
// //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //     const monthlyData = [];

// //     // Initialize with zeros for all months
// //     for (let i = 0; i < 6; i++) {
// //       const date = new Date();
// //       date.setMonth(date.getMonth() - 5 + i);
// //       date.setDate(1);
// //       monthlyData.push({
// //         month: monthNames[date.getMonth()],
// //         year: date.getFullYear(),
// //         count: 0,
// //       });
// //     }

// //     // Fill in actual data
// //     monthlyRegistrations.forEach((item) => {
// //       const monthIndex = item._id.month - 1;
// //       const year = item._id.year;

// //       const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year);

// //       if (dataIndex !== -1) {
// //         monthlyData[dataIndex].count = item.count;
// //       }
// //     });

// //     res.json({
// //       totalUsers,
// //       newUsers,
// //       roleData,
// //       monthlyData,
// //     });
// //   } catch (err) {
// //     console.error("Error fetching user stats:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/users/:id
// // // @desc    Get user by ID
// // // @access  Private (Admin only)
// // router.get("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id).select("-password");

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.json(user);
// //   } catch (err) {
// //     console.error("Error fetching user:", err.message);

// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/users/:id
// // // @desc    Update user
// // // @access  Private (Admin only)
// // router.put("/:id", adminAuth, async (req, res) => {
// //   const { username, email, firstName, lastName, role, company, phone, address } = req.body;

// //   try {
// //     const user = await User.findById(req.params.id);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     // Update fields
// //     if (username) user.username = username;
// //     if (email) user.email = email;
// //     if (firstName) user.firstName = firstName;
// //     if (lastName) user.lastName = lastName;
// //     if (role) user.role = role;
// //     if (company) user.company = company;
// //     if (phone) user.phone = phone;
// //     if (address) user.address = address;

// //     await user.save();

// //     res.json(user);
// //   } catch (err) {
// //     console.error("Error updating user:", err.message);

// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   DELETE api/users/:id
// // // @desc    Delete user
// // // @access  Private (Admin only)
// // router.delete("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.id);

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     await user.deleteOne();

// //     res.json({ message: "User removed" });
// //   } catch (err) {
// //     console.error("Error deleting user:", err.message);

// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // module.exports = router;


// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const { auth, adminAuth } = require("../middleware/auth");
// const crypto = require("crypto");

// // @route   POST api/users/register
// // @desc    Register a user (admin or customer)
// // @access  Public (but restricted to admins in frontend)
// router.post("/register", async (req, res) => {
//   const { username, email, password, firstName, lastName, company, phone, role } = req.body;

//   try {
//     // Check if user already exists
//     let user = await User.findOne({ $or: [{ email }, { username }] });

//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create new user
//     user = new User({
//       username,
//       email,
//       password,
//       firstName,
//       lastName,
//       company,
//       phone,
//       role: role || "user", // Default to 'user' if role not provided
//     });

//     await user.save();

//     // Create JWT token
//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role,
//       },
//     };

//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
//       if (err) throw err;
//       res.json({
//         token,
//         user: {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           role: user.role,
//           phone: user.phone,
//           company: user.company,
//         },
//       });
//     });
//   } catch (err) {
//     console.error("Error registering user:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   POST api/users/login
// // @desc    Authenticate user & get token
// // @access  Public
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Update last login
//     user.lastLogin = Date.now();
//     await user.save();

//     // Create JWT token
//     const payload = {
//       user: {
//         id: user.id,
//         role: user.role,
//       },
//     };

//     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
//       if (err) throw err;
//       res.json({
//         token,
//         user: {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           role: user.role,
//         },
//       });
//     });
//   } catch (err) {
//     console.error("Error logging in:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/users/me
// // @desc    Get current user
// // @access  Private
// router.get("/me", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     console.error("Error fetching user:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/users/me
// // @desc    Update current user
// // @access  Private
// router.put("/me", auth, async (req, res) => {
//   const { firstName, lastName, company, phone, address } = req.body;

//   try {
//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update fields
//     if (firstName) user.firstName = firstName;
//     if (lastName) user.lastName = lastName;
//     if (company) user.company = company;
//     if (phone) user.phone = phone;
//     if (address) user.address = address;

//     await user.save();

//     res.json(user);
//   } catch (err) {
//     console.error("Error updating user:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/users/password
// // @desc    Update password
// // @access  Private
// router.put("/password", auth, async (req, res) => {
//   const { currentPassword, newPassword } = req.body;

//   try {
//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Check current password
//     const isMatch = await user.comparePassword(currentPassword);

//     if (!isMatch) {
//       return res.status(400).json({ message: "Current password is incorrect" });
//     }

//     // Update password
//     user.password = newPassword;
//     await user.save();

//     res.json({ message: "Password updated successfully" });
//   } catch (err) {
//     console.error("Error updating password:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   POST api/users/forgot-password
// // @desc    Send password reset email
// // @access  Public
// router.post("/forgot-password", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Generate reset token
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

//     await user.save();

//     // In a real app, send email with reset link
//     // For demo purposes, just return the token
//     res.json({
//       message: "Password reset email sent",
//       resetToken, // In production, don't send this in the response
//     });
//   } catch (err) {
//     console.error("Error sending reset email:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   POST api/users/reset-password/:token
// // @desc    Reset password
// // @access  Public
// router.post("/reset-password/:token", async (req, res) => {
//   const { password } = req.body;
//   const resetPasswordToken = req.params.token;

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpires: { $gt: Date.now() },
//     });

//     if (!user) {
//       return res.status(400).json({ message: "Password reset token is invalid or has expired" });
//     }

//     // Update password
//     user.password = password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;

//     await user.save();

//     res.json({ message: "Password has been reset" });
//   } catch (err) {
//     console.error("Error resetting password:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/users
// // @desc    Get all users
// // @access  Private (Admin only)
// router.get("/", adminAuth, async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     console.error("Error fetching users:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/users/stats
// // @desc    Get user statistics
// // @access  Private (Admin only)
// router.get("/stats", adminAuth, async (req, res) => {
//   try {
//     // Get total users count
//     const totalUsers = await User.countDocuments();

//     // Get new users in the last 30 days
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//     const newUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

//     // Get users by role
//     const usersByRole = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);

//     // Format role data
//     const roleData = {};
//     usersByRole.forEach((item) => {
//       roleData[item._id] = item.count;
//     });

//     // Get monthly user registrations for the last 6 months
//     const sixMonthsAgo = new Date();
//     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
//     sixMonthsAgo.setDate(1); // Start of month

//     const monthlyRegistrations = await User.aggregate([
//       { $match: { createdAt: { $gte: sixMonthsAgo } } },
//       {
//         $group: {
//           _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
//           count: { $sum: 1 },
//         },
//       },
//       { $sort: { "_id.year": 1, "_id.month": 1 } },
//     ]);

//     // Format monthly data
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const monthlyData = [];

//     // Initialize with zeros for all months
//     for (let i = 0; i < 6; i++) {
//       const date = new Date();
//       date.setMonth(date.getMonth() - 5 + i);
//       date.setDate(1);
//       monthlyData.push({
//         month: monthNames[date.getMonth()],
//         year: date.getFullYear(),
//         count: 0,
//       });
//     }

//     // Fill in actual data
//     monthlyRegistrations.forEach((item) => {
//       const monthIndex = item._id.month - 1;
//       const year = item._id.year;

//       const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year);

//       if (dataIndex !== -1) {
//         monthlyData[dataIndex].count = item.count;
//       }
//     });

//     res.json({
//       totalUsers,
//       newUsers,
//       roleData,
//       monthlyData,
//     });
//   } catch (err) {
//     console.error("Error fetching user stats:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/users/:id
// // @desc    Get user by ID
// // @access  Private (Admin only)
// router.get("/:id", adminAuth, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (err) {
//     console.error("Error fetching user:", err.message);

//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/users/:id
// // @desc    Update user
// // @access  Private (Admin only)
// router.put("/:id", adminAuth, async (req, res) => {
//   const { username, email, firstName, lastName, role, company, phone, address } = req.body;

//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // Update fields
//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (firstName) user.firstName = firstName;
//     if (lastName) user.lastName = lastName;
//     if (role) user.role = role;
//     if (company) user.company = company;
//     if (phone) user.phone = phone;
//     if (address) user.address = address;

//     await user.save();

//     res.json(user);
//   } catch (err) {
//     console.error("Error updating user:", err.message);

//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   DELETE api/users/:id
// // @desc    Delete user
// // @access  Private (Admin only)
// router.delete("/:id", adminAuth, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     await user.deleteOne();

//     res.json({ message: "User removed" });
//   } catch (err) {
//     console.error("Error deleting user:", err.message);

//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { auth, adminAuth } = require("../middleware/auth");
const crypto = require("crypto");

// @route   POST api/users/register
// @desc    Register a user (admin or customer)
// @access  Public (but restricted to admins in frontend)
router.post("/register", async (req, res) => {
  const { username, email, password, firstName, lastName, company, phone, role } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      company,
      phone,
      role: role || "user", // Default to 'user' if role not provided
    });

    await user.save();

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          phone: user.phone,
          company: user.company,
        },
      });
    });
  } catch (err) {
    console.error("Error registering user:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Update last login
    user.lastLogin = Date.now();
    await user.save();

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) throw err;
      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      });
    });
  } catch (err) {
    console.error("Error logging in:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/users/me
// @desc    Get current user
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/users/me
// @desc    Update current user
// @access  Private
router.put("/me", auth, async (req, res) => {
  const { firstName, lastName, company, phone, address } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (company) user.company = company;
    if (phone) user.phone = phone;
    if (address) user.address = address;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error("Error updating user:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/users/password
// @desc    Update password
// @access  Private
router.put("/password", auth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check current password
    const isMatch = await user.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("Error updating password:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST api/users/forgot-password
// @desc    Send password reset email
// @access  Public
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    // In a real app, send email with reset link
    // For demo purposes, just return the token
    res.json({
      message: "Password reset email sent",
      resetToken, // In production, don't send this in the response
    });
  } catch (err) {
    console.error("Error sending reset email:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST api/users/reset-password/:token
// @desc    Reset password
// @access  Public
router.post("/reset-password/:token", async (req, res) => {
  const { password } = req.body;
  const resetPasswordToken = req.params.token;

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Password reset token is invalid or has expired" });
    }

    // Update password
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ message: "Password has been reset" });
  } catch (err) {
    console.error("Error resetting password:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/users
// @desc    Get all users
// @access  Private (Admin only)
router.get("/", adminAuth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/users/stats
// @desc    Get user statistics
// @access  Private (Admin only)
router.get("/stats", adminAuth, async (req, res) => {
  try {
    // Get total users count
    const totalUsers = await User.countDocuments();

    // Get new users in the last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newUsers = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

    // Get users by role
    const usersByRole = await User.aggregate([{ $group: { _id: "$role", count: { $sum: 1 } } }]);

    // Format role data
    const roleData = {};
    usersByRole.forEach((item) => {
      roleData[item._id] = item.count;
    });

    // Get monthly user registrations for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1); // Start of month

    const monthlyRegistrations = await User.aggregate([
      { $match: { createdAt: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    // Format monthly data
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthlyData = [];

    // Initialize with zeros for all months
    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - 5 + i);
      date.setDate(1);
      monthlyData.push({
        month: monthNames[date.getMonth()],
        year: date.getFullYear(),
        count: 0,
      });
    }

    // Fill in actual data
    monthlyRegistrations.forEach((item) => {
      const monthIndex = item._id.month - 1;
      const year = item._id.year;

      const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year);

      if (dataIndex !== -1) {
        monthlyData[dataIndex].count = item.count;
      }
    });

    res.json({
      totalUsers,
      newUsers,
      roleData,
      monthlyData,
    });
  } catch (err) {
    console.error("Error fetching user stats:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/users/:id
// @desc    Get user by ID
// @access  Private (Admin only)
router.get("/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Error fetching user:", err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/users/:id
// @desc    Update user
// @access  Private (Admin only)
router.put("/:id", adminAuth, async (req, res) => {
  const { username, email, firstName, lastName, role, company, phone, address } = req.body;

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    if (username) user.username = username;
    if (email) user.email = email;
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (role) user.role = role;
    if (company) user.company = company;
    if (phone) user.phone = phone;
    if (address) user.address = address;

    await user.save();

    res.json(user);
  } catch (err) {
    console.error("Error updating user:", err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(500).json({ message: "Server Error" });
  }
});

// @route   DELETE api/users/:id
// @desc    Delete user
// @access  Private (Admin only)
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.json({ message: "User removed" });
  } catch (err) {
    console.error("Error deleting user:", err.message);

    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;