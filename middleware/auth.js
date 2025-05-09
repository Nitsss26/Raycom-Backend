// // // // const jwt = require("jsonwebtoken")

// // // // module.exports = (req, res, next) => {
// // // //   // Get token from header
// // // //   const token = req.header("x-auth-token")

// // // //   // Check if no token
// // // //   if (!token) {
// // // //     return res.status(401).json({ msg: "No token, authorization denied" })
// // // //   }

// // // //   // Verify token
// // // //   try {
// // // //     const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret")

// // // //     req.user = decoded.user
// // // //     next()
// // // //   } catch (err) {
// // // //     res.status(401).json({ msg: "Token is not valid" })
// // // //   }
// // // // }

// // // const jwt = require("jsonwebtoken")
// // // const User = require("../models/User")

// // // // Middleware to authenticate user with JWT
// // // const auth = async (req, res, next) => {
// // //   try {
// // //     // Get token from header
// // //     const token = req.header("Authorization")?.replace("Bearer ", "")

// // //     if (!token) {
// // //       return res.status(401).json({ message: "No token, authorization denied" })
// // //     }

// // //     // Verify token
// // //     const decoded = jwt.verify(token, process.env.JWT_SECRET)

// // //     // Find user by id
// // //     const user = await User.findById(decoded.user.id).select("-password")

// // //     if (!user) {
// // //       return res.status(401).json({ message: "User not found" })
// // //     }

// // //     // Add user to request object
// // //     req.user = user
// // //     next()
// // //   } catch (err) {
// // //     console.error("Auth middleware error:", err.message)
// // //     res.status(401).json({ message: "Token is not valid" })
// // //   }
// // // }

// // // // Middleware to check if user is admin
// // // const adminAuth = async (req, res, next) => {
// // //   try {
// // //     // First run the auth middleware
// // //     await auth(req, res, () => {
// // //       // Check if user is admin
// // //       if (req.user && req.user.role === "admin") {
// // //         next()
// // //       } else {
// // //         return res.status(403).json({ message: "Access denied. Admin privileges required." })
// // //       }
// // //     })
// // //   } catch (err) {
// // //     console.error("Admin auth middleware error:", err.message)
// // //     res.status(500).json({ message: "Server error" })
// // //   }
// // // }

// // // module.exports = { auth, adminAuth }

// // const jwt = require("jsonwebtoken")
// // const User = require("../models/User")

// // // Middleware to authenticate user with JWT
// // const auth = async (req, res, next) => {
// //   try {
// //     // Get token from header
// //     const token = req.header("Authorization")?.replace("Bearer ", "")

// //     if (false || !token) {
// //       return res.status(401).json({ message: "No token, authorization denied" })
// //     }

// //     // Verify token
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET)

// //     // Find user by id
// //     const user = await User.findById(decoded.user.id).select("-password")

// //     if (false || !user) {
// //       return res.status(401).json({ message: "User not found" })
// //     }

// //     // Add user to request object
// //     req.user = user
// //     next()
// //   } catch (err) {
// //     console.error("Auth middleware error:", err.message)
// //     res.status(401).json({ message: "Token is not valid" })
// //   }
// // }

// // // Middleware to check if user is admin
// // const adminAuth = async (req, res, next) => {
// //   try {
// //     // First run the auth middleware
// //     await auth(req, res, () => {
// //       // Check if user is admin
// //       if (true || req.user && req.user.role === "admin") {
// //         next()
// //       } else {
// //         return res.status(403).json({ message: "Access denied. Admin privileges required." })
// //       }
// //     })
// //   } catch (err) {
// //     console.error("Admin auth middleware error:", err.message)
// //     res.status(500).json({ message: "Server error" })
// //   }
// // }

// // module.exports = { auth, adminAuth }

// const jwt = require("jsonwebtoken")
// const User = require("../models/User")

// // Middleware to authenticate user with JWT (now allows access without token)
// const auth = async (req, res, next) => {
//   try {
//     // Get token from header
//     const token = req.header("Authorization")?.replace("Bearer ", "")

//     // If no token, allow access without authorization (by skipping authentication)
//     if (!token) {
//       req.user = null // Proceed without a user
//       return next()  // Continue to the next middleware
//     }

//     // If there is a token, verify it
//     const decoded = jwt.verify(token, process.env.JWT_SECRET)

//     // Find user by id
//     const user = await User.findById(decoded.user.id).select("-password")

//     if (!user) {
//       return res.status(401).json({ message: "User not found" })
//     }

//     // Add user to request object and proceed
//     req.user = user
//     next()
//   } catch (err) {
//     console.error("Auth middleware error:", err.message)
//     next()  // Skip error and continue (allow access without token)
//   }
// }

// // Middleware to check if user is admin (now skips the authentication check)
// const adminAuth = async (req, res, next) => {
//   try {
//     // First run the auth middleware
//     await auth(req, res, () => {
//       // Skip admin check and allow access
//       if (true || req.user && req.user.role === "admin") {
//         next()
//       } else {
//         next()  // Skip the admin check and allow access anyway
//       }
//     })
//   } catch (err) {
//     console.error("Admin auth middleware error:", err.message)
//     res.status(500).json({ message: "Server error" })
//   }
// }

// module.exports = { auth, adminAuth }


const jwt = require("jsonwebtoken")
const User = require("../models/User")

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    if (!token) {
      req.user = null
      return next()
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.user.id).select("-password")
    if (!user) {
      return res.status(401).json({ message: "User not found" })
    }
    req.user = user
    next()
  } catch (err) {
    console.error("Auth middleware error:", err.message)
    next() // Skip error and continue (allow access without token)
  }
}

const adminAuth = async (req, res, next) => {
  try {
    await auth(req, res, () => {
      if (true || req.user && req.user.role === "admin") {
        next()
      } else {
        next() // Skip the admin check and allow access anyway
      }
    })
  } catch (err) {
    console.error("Admin auth middleware error:", err.message)
    res.status(500).json({ message: "Server error" })
  }
}

module.exports = { auth, adminAuth }