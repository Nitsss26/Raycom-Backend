// // // // // // // // // // // // // // // // // // const express = require("express")
// // // // // // // // // // // // // // // // // // const router = express.Router()
// // // // // // // // // // // // // // // // // // const Request = require("../models/Request")
// // // // // // // // // // // // // // // // // // const auth = require("../middleware/auth")

// // // // // // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // // // // // @desc    Get all requests
// // // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // // router.get("/", auth, async (req, res) => {
// // // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // // //     // Check if user is admin
// // // // // // // // // // // // // // // // // //     if (req.user.role !== "admin") {
// // // // // // // // // // // // // // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     const requests = await Request.find().sort({ date: -1 })
// // // // // // // // // // // // // // // // // //     res.json(requests)
// // // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // // //     console.error(err.message)
// // // // // // // // // // // // // // // // // //     res.status(500).send("Server Error")
// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // // router.get("/:id", auth, async (req, res) => {
// // // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // // //     // Check if user is admin
// // // // // // // // // // // // // // // // // //     if (req.user.role !== "admin") {
// // // // // // // // // // // // // // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // // //       return res.status(404).json({ msg: "Request not found" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // // //     console.error(err.message)

// // // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // // //       return res.status(404).json({ msg: "Request not found" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     res.status(500).send("Server Error")
// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // // // // // @desc    Create a request
// // // // // // // // // // // // // // // // // // // @access  Public
// // // // // // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // // //     const newRequest = new Request(req.body)
// // // // // // // // // // // // // // // // // //     const request = await newRequest.save()

// // // // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // // //     console.error(err.message)
// // // // // // // // // // // // // // // // // //     res.status(500).send("Server Error")
// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id
// // // // // // // // // // // // // // // // // // // @desc    Update a request status
// // // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // // router.put("/:id", auth, async (req, res) => {
// // // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // // //     // Check if user is admin
// // // // // // // // // // // // // // // // // //     if (req.user.role !== "admin") {
// // // // // // // // // // // // // // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     const request = await Request.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status } }, { new: true })

// // // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // // //       return res.status(404).json({ msg: "Request not found" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // // //     console.error(err.message)

// // // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // // //       return res.status(404).json({ msg: "Request not found" })
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     res.status(500).send("Server Error")
// // // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // module.exports = router

// // // // // // // // // // // // // // // // // const express = require("express")
// // // // // // // // // // // // // // // // // const router = express.Router()
// // // // // // // // // // // // // // // // // const Request = require("../models/Request")
// // // // // // // // // // // // // // // // // const Product = require("../models/Product")
// // // // // // // // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // // // // // // // // // // // // // const mongoose = require("mongoose")

// // // // // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // // // // @desc    Get all requests (admin) or user's requests (user)
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.get("/", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { status, sort = "newest", limit = 20, page = 1 } = req.query
// // // // // // // // // // // // // // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // // // // // // // // // // // // // // //     // Build query
// // // // // // // // // // // // // // // // //     const query = {}

// // // // // // // // // // // // // // // // //     // If user is not admin, only show their requests
// // // // // // // // // // // // // // // // //     if (req.user.role !== "admin") {
// // // // // // // // // // // // // // // // //       query.userId = req.user._id
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Filter by status if provided
// // // // // // // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // // // // // // //       query.status = status
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Build sort options
// // // // // // // // // // // // // // // // //     let sortOptions = {}
// // // // // // // // // // // // // // // // //     if (sort === "oldest") {
// // // // // // // // // // // // // // // // //       sortOptions = { date: 1 }
// // // // // // // // // // // // // // // // //     } else if (sort === "newest") {
// // // // // // // // // // // // // // // // //       sortOptions = { date: -1 }
// // // // // // // // // // // // // // // // //     } else if (sort === "status") {
// // // // // // // // // // // // // // // // //       sortOptions = { status: 1, date: -1 }
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Get total count for pagination
// // // // // // // // // // // // // // // // //     const total = await Request.countDocuments(query)

// // // // // // // // // // // // // // // // //     // Get requests with pagination
// // // // // // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // // // // // //       .sort(sortOptions)
// // // // // // // // // // // // // // // // //       .skip(skip)
// // // // // // // // // // // // // // // // //       .limit(Number.parseInt(limit))
// // // // // // // // // // // // // // // // //       .populate("userId", "username email firstName lastName")

// // // // // // // // // // // // // // // // //     // Return requests with pagination info
// // // // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // // // //       requests,
// // // // // // // // // // // // // // // // //       pagination: {
// // // // // // // // // // // // // // // // //         total,
// // // // // // // // // // // // // // // // //         page: Number.parseInt(page),
// // // // // // // // // // // // // // // // //         limit: Number.parseInt(limit),
// // // // // // // // // // // // // // // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching requests:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   GET api/requests/stats
// // // // // // // // // // // // // // // // // // @desc    Get request statistics
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     // Get counts by status
// // // // // // // // // // // // // // // // //     const statusCounts = await Request.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])

// // // // // // // // // // // // // // // // //     // Format the results
// // // // // // // // // // // // // // // // //     const stats = {
// // // // // // // // // // // // // // // // //       total: await Request.countDocuments(),
// // // // // // // // // // // // // // // // //       byStatus: {},
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     statusCounts.forEach((item) => {
// // // // // // // // // // // // // // // // //       stats.byStatus[item._id] = item.count
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Get recent requests
// // // // // // // // // // // // // // // // //     const recentRequests = await Request.find()
// // // // // // // // // // // // // // // // //       .sort({ date: -1 })
// // // // // // // // // // // // // // // // //       .limit(5)
// // // // // // // // // // // // // // // // //       .populate("userId", "username email firstName lastName")

// // // // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // // // //       stats,
// // // // // // // // // // // // // // // // //       recentRequests,
// // // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching request stats:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.get("/:id", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)
// // // // // // // // // // // // // // // // //       .populate("userId", "username email firstName lastName")
// // // // // // // // // // // // // // // // //       .populate("items.productId", "name model category price images")

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if user is authorized to view this request
// // // // // // // // // // // // // // // // //     if (req.user.role !== "admin" && request.userId.toString() !== req.user._id.toString()) {
// // // // // // // // // // // // // // // // //       return res.status(403).json({ message: "Not authorized to view this request" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // // // // @desc    Create a request
// // // // // // // // // // // // // // // // // // @access  Private (for logged in users) or Public (for guest checkout)
// // // // // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { name, email, phone, company, address, city, state, zip, country, message, items } = req.body

// // // // // // // // // // // // // // // // //     // Validate items
// // // // // // // // // // // // // // // // //     if (!items || !Array.isArray(items) || items.length === 0) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Items are required" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Create new request
// // // // // // // // // // // // // // // // //     const newRequest = new Request({
// // // // // // // // // // // // // // // // //       name,
// // // // // // // // // // // // // // // // //       email,
// // // // // // // // // // // // // // // // //       phone,
// // // // // // // // // // // // // // // // //       company,
// // // // // // // // // // // // // // // // //       address,
// // // // // // // // // // // // // // // // //       city,
// // // // // // // // // // // // // // // // //       state,
// // // // // // // // // // // // // // // // //       zip,
// // // // // // // // // // // // // // // // //       country,
// // // // // // // // // // // // // // // // //       message,
// // // // // // // // // // // // // // // // //       items: [],
// // // // // // // // // // // // // // // // //       status: "pending",
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Add user ID if authenticated
// // // // // // // // // // // // // // // // //     if (req.user) {
// // // // // // // // // // // // // // // // //       newRequest.userId = req.user._id
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Process items and add to request
// // // // // // // // // // // // // // // // //     for (const item of items) {
// // // // // // // // // // // // // // // // //       // Validate product exists
// // // // // // // // // // // // // // // // //       const product = await Product.findById(item.id || item.productId)
// // // // // // // // // // // // // // // // //       if (!product) {
// // // // // // // // // // // // // // // // //         return res.status(400).json({ message: `Product not found: ${item.id || item.productId}` })
// // // // // // // // // // // // // // // // //       }

// // // // // // // // // // // // // // // // //       // Add item to request
// // // // // // // // // // // // // // // // //       newRequest.items.push({
// // // // // // // // // // // // // // // // //         productId: product._id,
// // // // // // // // // // // // // // // // //         name: product.name,
// // // // // // // // // // // // // // // // //         model: product.model,
// // // // // // // // // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // // // // // // // // //         price: product.price,
// // // // // // // // // // // // // // // // //       })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Save request
// // // // // // // // // // // // // // // // //     const request = await newRequest.save()

// // // // // // // // // // // // // // // // //     res.status(201).json(request)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error creating request:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { status, note } = req.body

// // // // // // // // // // // // // // // // //     // Validate status
// // // // // // // // // // // // // // // // //     const validStatuses = ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"]
// // // // // // // // // // // // // // // // //     if (!validStatuses.includes(status)) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Invalid status" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update status
// // // // // // // // // // // // // // // // //     request.status = status

// // // // // // // // // // // // // // // // //     // Add to status history
// // // // // // // // // // // // // // // // //     request.statusHistory.push({
// // // // // // // // // // // // // // // // //       status,
// // // // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // // // //       note: note || `Status updated to ${status}`,
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error updating request status:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Update request details
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { name, email, phone, company, address, city, state, zip, country, message, items } = req.body

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update fields
// // // // // // // // // // // // // // // // //     if (name) request.name = name
// // // // // // // // // // // // // // // // //     if (email) request.email = email
// // // // // // // // // // // // // // // // //     if (phone) request.phone = phone
// // // // // // // // // // // // // // // // //     if (company) request.company = company
// // // // // // // // // // // // // // // // //     if (address) request.address = address
// // // // // // // // // // // // // // // // //     if (city) request.city = city
// // // // // // // // // // // // // // // // //     if (state) request.state = state
// // // // // // // // // // // // // // // // //     if (zip) request.zip = zip
// // // // // // // // // // // // // // // // //     if (country) request.country = country
// // // // // // // // // // // // // // // // //     if (message) request.message = message

// // // // // // // // // // // // // // // // //     // Update items if provided
// // // // // // // // // // // // // // // // //     if (items && Array.isArray(items)) {
// // // // // // // // // // // // // // // // //       request.items = []

// // // // // // // // // // // // // // // // //       // Process items and add to request
// // // // // // // // // // // // // // // // //       for (const item of items) {
// // // // // // // // // // // // // // // // //         // Validate product exists
// // // // // // // // // // // // // // // // //         const product = await Product.findById(item.id || item.productId)
// // // // // // // // // // // // // // // // //         if (!product) {
// // // // // // // // // // // // // // // // //           return res.status(400).json({ message: `Product not found: ${item.id || item.productId}` })
// // // // // // // // // // // // // // // // //         }

// // // // // // // // // // // // // // // // //         // Add item to request
// // // // // // // // // // // // // // // // //         request.items.push({
// // // // // // // // // // // // // // // // //           productId: product._id,
// // // // // // // // // // // // // // // // //           name: product.name,
// // // // // // // // // // // // // // // // //           model: product.model,
// // // // // // // // // // // // // // // // //           quantity: item.quantity,
// // // // // // // // // // // // // // // // //           price: product.price,
// // // // // // // // // // // // // // // // //         })
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error updating request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // // // // // // // // // // // // @desc    Cancel a request (user)
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.put("/:id/cancel", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { reason } = req.body

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if user is authorized to cancel this request
// // // // // // // // // // // // // // // // //     if (req.user.role !== "admin" && (!request.userId || request.userId.toString() !== req.user._id.toString())) {
// // // // // // // // // // // // // // // // //       return res.status(403).json({ message: "Not authorized to cancel this request" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if request can be cancelled
// // // // // // // // // // // // // // // // //     if (["delivered", "cancelled", "rejected"].includes(request.status)) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: `Request cannot be cancelled when status is ${request.status}` })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update status
// // // // // // // // // // // // // // // // //     request.status = "cancelled"

// // // // // // // // // // // // // // // // //     // Add to status history
// // // // // // // // // // // // // // // // //     request.statusHistory.push({
// // // // // // // // // // // // // // // // //       status: "cancelled",
// // // // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // // // //       note: reason || "Cancelled by user",
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error cancelling request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   DELETE api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Delete a request
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Delete request
// // // // // // // // // // // // // // // // //     await request.remove()

// // // // // // // // // // // // // // // // //     res.json({ message: "Request removed" })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error deleting request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // module.exports = router



// // // // // // // // // // // // // // // // // const express = require("express")
// // // // // // // // // // // // // // // // // const router = express.Router()
// // // // // // // // // // // // // // // // // const Request = require("../models/Request")
// // // // // // // // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // // // // // // // // // // // // // const mongoose = require("mongoose")

// // // // // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // // // // @desc    Get all requests (admin) or user's requests (user)
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.get("/", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { status, sort = "newest", limit = 20, page = 1 } = req.query
// // // // // // // // // // // // // // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // // // // // // // // // // // // // // //     // Build query
// // // // // // // // // // // // // // // // //     const query = {}

// // // // // // // // // // // // // // // // //     // If user is not admin, only show their requests
// // // // // // // // // // // // // // // // //     if (false || req.user?.role !== "admin") {
// // // // // // // // // // // // // // // // //       query.userId = req.user?._id
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Filter by status if provided
// // // // // // // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // // // // // // //       query.status = status
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Build sort options
// // // // // // // // // // // // // // // // //     let sortOptions = {}
// // // // // // // // // // // // // // // // //     if (sort === "oldest") {
// // // // // // // // // // // // // // // // //       sortOptions = { date: 1 }
// // // // // // // // // // // // // // // // //     } else if (sort === "newest") {
// // // // // // // // // // // // // // // // //       sortOptions = { date: -1 }
// // // // // // // // // // // // // // // // //     } else if (sort === "status") {
// // // // // // // // // // // // // // // // //       sortOptions = { status: 1, date: -1 }
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Get total count for pagination
// // // // // // // // // // // // // // // // //     const total = await Request.countDocuments(query)

// // // // // // // // // // // // // // // // //     // Get requests with pagination
// // // // // // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // // // // // //       .sort(sortOptions)
// // // // // // // // // // // // // // // // //       .skip(skip)
// // // // // // // // // // // // // // // // //       .limit(Number.parseInt(limit))
// // // // // // // // // // // // // // // // //       .populate("userId", "username email firstName lastName")

// // // // // // // // // // // // // // // // //     // Return requests with pagination info
// // // // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // // // //       requests,
// // // // // // // // // // // // // // // // //       pagination: {
// // // // // // // // // // // // // // // // //         total,
// // // // // // // // // // // // // // // // //         page: Number.parseInt(page),
// // // // // // // // // // // // // // // // //         limit: Number.parseInt(limit),
// // // // // // // // // // // // // // // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching requests:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   GET api/requests/stats
// // // // // // // // // // // // // // // // // // @desc    Get request statistics
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     // Get counts by status
// // // // // // // // // // // // // // // // //     const statusCounts = await Request.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }])

// // // // // // // // // // // // // // // // //     // Format the results
// // // // // // // // // // // // // // // // //     const stats = {
// // // // // // // // // // // // // // // // //       total: await Request.countDocuments(),
// // // // // // // // // // // // // // // // //       byStatus: {},
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     statusCounts.forEach((item) => {
// // // // // // // // // // // // // // // // //       stats.byStatus[item._id] = item.count
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Get recent requests
// // // // // // // // // // // // // // // // //     const recentRequests = await Request.find()
// // // // // // // // // // // // // // // // //       .sort({ date: -1 })
// // // // // // // // // // // // // // // // //       .limit(5)
// // // // // // // // // // // // // // // // //       .populate("userId", "username email firstName lastName")

// // // // // // // // // // // // // // // // //     // Get total revenue
// // // // // // // // // // // // // // // // //     const revenue = await Request.aggregate([
// // // // // // // // // // // // // // // // //       { $match: { status: { $in: ["approved", "processing", "shipped", "delivered"] } } },
// // // // // // // // // // // // // // // // //       { $group: { _id: null, total: { $sum: "$totalAmount" } } },
// // // // // // // // // // // // // // // // //     ])

// // // // // // // // // // // // // // // // //     const totalRevenue = revenue.length > 0 ? revenue[0].total : 0

// // // // // // // // // // // // // // // // //     // Get monthly request counts for the last 6 months
// // // // // // // // // // // // // // // // //     const today = new Date()
// // // // // // // // // // // // // // // // //     const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 5, 1)

// // // // // // // // // // // // // // // // //     const monthlyRequests = await Request.aggregate([
// // // // // // // // // // // // // // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // // // // // // // // // // // // // //       {
// // // // // // // // // // // // // // // // //         $group: {
// // // // // // // // // // // // // // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" } },
// // // // // // // // // // // // // // // // //           count: { $sum: 1 },
// // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // // // // // // // // // // // // // //     ])

// // // // // // // // // // // // // // // // //     // Format monthly data
// // // // // // // // // // // // // // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// // // // // // // // // // // // // // // // //     const monthlyData = []

// // // // // // // // // // // // // // // // //     // Initialize with zeros for all months
// // // // // // // // // // // // // // // // //     for (let i = 0; i < 6; i++) {
// // // // // // // // // // // // // // // // //       const date = new Date(today.getFullYear(), today.getMonth() - 5 + i, 1)
// // // // // // // // // // // // // // // // //       monthlyData.push({
// // // // // // // // // // // // // // // // //         month: monthNames[date.getMonth()],
// // // // // // // // // // // // // // // // //         year: date.getFullYear(),
// // // // // // // // // // // // // // // // //         count: 0,
// // // // // // // // // // // // // // // // //       })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Fill in actual data
// // // // // // // // // // // // // // // // //     monthlyRequests.forEach((item) => {
// // // // // // // // // // // // // // // // //       const monthIndex = item._id.month - 1
// // // // // // // // // // // // // // // // //       const year = item._id.year

// // // // // // // // // // // // // // // // //       const dataIndex = monthlyData.findIndex((d) => d.month === monthNames[monthIndex] && d.year === year)

// // // // // // // // // // // // // // // // //       if (dataIndex !== -1) {
// // // // // // // // // // // // // // // // //         monthlyData[dataIndex].count = item.count
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // // // //       stats,
// // // // // // // // // // // // // // // // //       recentRequests,
// // // // // // // // // // // // // // // // //       totalRevenue,
// // // // // // // // // // // // // // // // //       monthlyData,
// // // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching request stats:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.get("/:id", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id).populate("userId", "username email firstName lastName")

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if user is authorized to view this request
// // // // // // // // // // // // // // // // //     if (req.user?.role !== "admin" && (!request.userId || request.userId.toString() !== req.user?._id.toString())) {
// // // // // // // // // // // // // // // // //       return res.status(403).json({ message: "Not authorized to view this request" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error fetching request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // // // // @desc    Create a request
// // // // // // // // // // // // // // // // // // @access  Public (for guest checkout) or Private (for logged in users)
// // // // // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { name, email, phone, company, address, city, state, zip, country, message, items } = req.body

// // // // // // // // // // // // // // // // //     // Validate items
// // // // // // // // // // // // // // // // //     if (!items || !Array.isArray(items) || items.length === 0) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Items are required" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Create new request
// // // // // // // // // // // // // // // // //     const newRequest = new Request({
// // // // // // // // // // // // // // // // //       name,
// // // // // // // // // // // // // // // // //       email,
// // // // // // // // // // // // // // // // //       phone,
// // // // // // // // // // // // // // // // //       company,
// // // // // // // // // // // // // // // // //       address,
// // // // // // // // // // // // // // // // //       city,
// // // // // // // // // // // // // // // // //       state,
// // // // // // // // // // // // // // // // //       zip,
// // // // // // // // // // // // // // // // //       country,
// // // // // // // // // // // // // // // // //       message,
// // // // // // // // // // // // // // // // //       items: items.map((item) => ({
// // // // // // // // // // // // // // // // //         id: item.id,
// // // // // // // // // // // // // // // // //         name: item.name,
// // // // // // // // // // // // // // // // //         model: item.model,
// // // // // // // // // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // // // // // // // // //         price: item.price,
// // // // // // // // // // // // // // // // //         image: item.image,
// // // // // // // // // // // // // // // // //       })),
// // // // // // // // // // // // // // // // //       status: "pending",
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Add user ID if authenticated
// // // // // // // // // // // // // // // // //     if (req.user) {
// // // // // // // // // // // // // // // // //       newRequest.userId = req.user?._id
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Save request
// // // // // // // // // // // // // // // // //     const request = await newRequest.save()

// // // // // // // // // // // // // // // // //     res.status(201).json(request)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error creating request:", err.message)
// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error: " + err.message })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { status, note } = req.body

// // // // // // // // // // // // // // // // //     // Validate status
// // // // // // // // // // // // // // // // //     const validStatuses = ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"]
// // // // // // // // // // // // // // // // //     if (!validStatuses.includes(status)) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Invalid status" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update status
// // // // // // // // // // // // // // // // //     request.status = status

// // // // // // // // // // // // // // // // //     // Add to status history
// // // // // // // // // // // // // // // // //     request.statusHistory.push({
// // // // // // // // // // // // // // // // //       status,
// // // // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // // // //       note: note || `Status updated to ${status}`,
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error updating request status:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Update request details
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { name, email, phone, company, address, city, state, zip, country, message, items, status } = req.body

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update fields
// // // // // // // // // // // // // // // // //     if (name) request.name = name
// // // // // // // // // // // // // // // // //     if (email) request.email = email
// // // // // // // // // // // // // // // // //     if (phone) request.phone = phone
// // // // // // // // // // // // // // // // //     if (company) request.company = company
// // // // // // // // // // // // // // // // //     if (address) request.address = address
// // // // // // // // // // // // // // // // //     if (city) request.city = city
// // // // // // // // // // // // // // // // //     if (state) request.state = state
// // // // // // // // // // // // // // // // //     if (zip) request.zip = zip
// // // // // // // // // // // // // // // // //     if (country) request.country = country
// // // // // // // // // // // // // // // // //     if (message) request.message = message
// // // // // // // // // // // // // // // // //     if (status && request.status !== status) {
// // // // // // // // // // // // // // // // //       request.status = status
// // // // // // // // // // // // // // // // //       request.statusHistory.push({
// // // // // // // // // // // // // // // // //         status,
// // // // // // // // // // // // // // // // //         date: new Date(),
// // // // // // // // // // // // // // // // //         note: `Status updated to ${status} by admin`,
// // // // // // // // // // // // // // // // //       })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update items if provided
// // // // // // // // // // // // // // // // //     if (items && Array.isArray(items)) {
// // // // // // // // // // // // // // // // //       request.items = items.map((item) => ({
// // // // // // // // // // // // // // // // //         id: item.id,
// // // // // // // // // // // // // // // // //         name: item.name,
// // // // // // // // // // // // // // // // //         model: item.model,
// // // // // // // // // // // // // // // // //         quantity: item.quantity,
// // // // // // // // // // // // // // // // //         price: item.price,
// // // // // // // // // // // // // // // // //         image: item.image,
// // // // // // // // // // // // // // // // //       }))
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error updating request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // // // // // // // // // // // // @desc    Cancel a request (user)
// // // // // // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // // // // // router.put("/:id/cancel", auth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const { reason } = req.body

// // // // // // // // // // // // // // // // //     // Find request
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if user is authorized to cancel this request
// // // // // // // // // // // // // // // // //     if (req.user?.role !== "admin" && (!request.userId || request.userId.toString() !== req.user?._id.toString())) {
// // // // // // // // // // // // // // // // //       return res.status(403).json({ message: "Not authorized to cancel this request" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Check if request can be cancelled
// // // // // // // // // // // // // // // // //     if (["delivered", "cancelled", "rejected"].includes(request.status)) {
// // // // // // // // // // // // // // // // //       return res.status(400).json({ message: `Request cannot be cancelled when status is ${request.status}` })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Update status
// // // // // // // // // // // // // // // // //     request.status = "cancelled"

// // // // // // // // // // // // // // // // //     // Add to status history
// // // // // // // // // // // // // // // // //     request.statusHistory.push({
// // // // // // // // // // // // // // // // //       status: "cancelled",
// // // // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // // // //       note: reason || "Cancelled by user",
// // // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // // //     // Save updated request
// // // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error cancelling request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // // @route   DELETE api/requests/:id
// // // // // // // // // // // // // // // // // // @desc    Delete a request
// // // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     // Delete request
// // // // // // // // // // // // // // // // //     await request.deleteOne()

// // // // // // // // // // // // // // // // //     res.json({ message: "Request removed" })
// // // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // // //     console.error("Error deleting request:", err.message)

// // // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // module.exports = router

// // // // // // // // // // // // // // // // const express = require("express")
// // // // // // // // // // // // // // // // const router = express.Router()
// // // // // // // // // // // // // // // // const Request = require("../models/Request")
// // // // // // // // // // // // // // // // const { adminAuth } = require("../middleware/auth")

// // // // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // // // @desc    Get all requests with pagination, filtering, sorting, and searching
// // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const { status, search, sortBy = "date", sortOrder = "desc", page = 1, limit = 10 } = req.query
// // // // // // // // // // // // // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // // // // // // // // // // // // // //     // Build query
// // // // // // // // // // // // // // // //     const query = {}

// // // // // // // // // // // // // // // //     // Filter by status if provided
// // // // // // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // // // // // //       query.status = status
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Apply search
// // // // // // // // // // // // // // // //     if (search) {
// // // // // // // // // // // // // // // //       const searchTerm = search.toLowerCase()
// // // // // // // // // // // // // // // //       query.$or = [
// // // // // // // // // // // // // // // //         { name: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // // //         { email: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // // //         { company: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // // //         { "products.name": { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // // //       ]
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Build sort options
// // // // // // // // // // // // // // // //     const sortOptions = {}
// // // // // // // // // // // // // // // //     if (sortBy === "date") {
// // // // // // // // // // // // // // // //       sortOptions.date = sortOrder === "asc" ? 1 : -1
// // // // // // // // // // // // // // // //     } else if (sortBy === "amount") {
// // // // // // // // // // // // // // // //       sortOptions.totalAmount = sortOrder === "asc" ? 1 : -1
// // // // // // // // // // // // // // // //     } else if (sortBy === "name") {
// // // // // // // // // // // // // // // //       sortOptions.name = sortOrder === "asc" ? 1 : -1
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Get total count for pagination
// // // // // // // // // // // // // // // //     const total = await Request.countDocuments(query)

// // // // // // // // // // // // // // // //     // Fetch requests with pagination, sorting, and filtering
// // // // // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // // // // //       .sort(sortOptions)
// // // // // // // // // // // // // // // //       .skip(skip)
// // // // // // // // // // // // // // // //       .limit(Number.parseInt(limit))

// // // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // // //       requests,
// // // // // // // // // // // // // // // //       totalPages: Math.ceil(total / Number.parseInt(limit)),
// // // // // // // // // // // // // // // //     })
// // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // //     console.error("Error fetching requests:", err.message)
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // router.get("/:id", async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found why?" })
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // //     console.error("Error fetching request:", err.message)
// // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found whyy?" })
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // // // @desc    Create a new request
// // // // // // // // // // // // // // // // // @access  Public
// // // // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const { name, email, phone, company, message, products, totalAmount } = req.body

// // // // // // // // // // // // // // // //     // Validate required fields
// // // // // // // // // // // // // // // //     if (!name || !email || !phone || !company || !products || !totalAmount) {
// // // // // // // // // // // // // // // //       return res.status(400).json({ message: "All required fields must be provided" })
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Validate products
// // // // // // // // // // // // // // // //     if (!Array.isArray(products) || products.length === 0) {
// // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Products are required" })
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Create new request
// // // // // // // // // // // // // // // //     const newRequest = new Request({
// // // // // // // // // // // // // // // //       name,
// // // // // // // // // // // // // // // //       email,
// // // // // // // // // // // // // // // //       phone,
// // // // // // // // // // // // // // // //       company,
// // // // // // // // // // // // // // // //       message,
// // // // // // // // // // // // // // // //       products,
// // // // // // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // // // // // //       status: "pending",
// // // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // // //     })

// // // // // // // // // // // // // // // //     // Save request
// // // // // // // // // // // // // // // //     const request = await newRequest.save()

// // // // // // // // // // // // // // // //     res.status(201).json(request)
// // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // //     console.error("Error creating request:", err.message)
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error: " + err.message })
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // // //     const { status } = req.body

// // // // // // // // // // // // // // // //     // Validate status
// // // // // // // // // // // // // // // //     const validStatuses = ["pending", "processing", "completed", "cancelled"]
// // // // // // // // // // // // // // // //     if (!validStatuses.includes(status)) {
// // // // // // // // // // // // // // // //       return res.status(400).json({ message: "Invalid status" })
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     // Find and update request
// // // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     request.status = status
// // // // // // // // // // // // // // // //     const updatedRequest = await request.save()

// // // // // // // // // // // // // // // //     res.json(updatedRequest)
// // // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // // //     console.error("Error updating request status:", err.message)
// // // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // // // module.exports = router


// // // // // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // // // // const router = express.Router();
// // // // // // // // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // // // // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // // @desc    Get all requests with pagination, filtering, sorting, and searching
// // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const { status, search, sortBy = "date", sortOrder = "desc", page = 1, limit = 10 } = req.query;
// // // // // // // // // // // // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit);

// // // // // // // // // // // // // // //     const query = {};

// // // // // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // // // // //       query.status = status;
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     if (search) {
// // // // // // // // // // // // // // //       const searchTerm = search.toLowerCase();
// // // // // // // // // // // // // // //       query.$or = [
// // // // // // // // // // // // // // //         { name: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // //         { email: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // //         { company: { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // //         { "products.name": { $regex: searchTerm, $options: "i" } },
// // // // // // // // // // // // // // //       ];
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const sortOptions = {};
// // // // // // // // // // // // // // //     if (sortBy === "date") {
// // // // // // // // // // // // // // //       sortOptions.date = sortOrder === "asc" ? 1 : -1;
// // // // // // // // // // // // // // //     } else if (sortBy === "amount") {
// // // // // // // // // // // // // // //       sortOptions.totalAmount = sortOrder === "asc" ? 1 : -1;
// // // // // // // // // // // // // // //     } else if (sortBy === "name") {
// // // // // // // // // // // // // // //       sortOptions.name = sortOrder === "asc" ? 1 : -1;
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // // // //       .sort(sortOptions)
// // // // // // // // // // // // // // //       .skip(skip)
// // // // // // // // // // // // // // //       .limit(Number.parseInt(limit));

// // // // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // // // //       requests,
// // // // // // // // // // // // // // //       totalPages: Math.ceil(total / Number.parseInt(limit)),
// // // // // // // // // // // // // // //     });
// // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // // // @access  Public (No middleware)
// // // // // // // // // // // // // // // router.get("/:id", async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     res.json(request);
// // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // // @desc    Create a new request
// // // // // // // // // // // // // // // // @access  Public
// // // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // // // // // // // // // // // //     if (!name || !email || !phone || !company || !products || !totalAmount) {
// // // // // // // // // // // // // // //       return res.status(400).json({ message: "All required fields must be provided" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     if (!Array.isArray(products) || products.length === 0) {
// // // // // // // // // // // // // // //       return res.status(400).json({ message: "Products are required" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     // Map products to include the image field (using images[0] if available)
// // // // // // // // // // // // // // //     const formattedProducts = products.map((product) => ({
// // // // // // // // // // // // // // //       id: product.id,
// // // // // // // // // // // // // // //       name: product.name,
// // // // // // // // // // // // // // //       quantity: product.quantity,
// // // // // // // // // // // // // // //       price: product.price,
// // // // // // // // // // // // // // //       category: product.category,
// // // // // // // // // // // // // // //       image: product.images && product.images.length > 0 ? product.images[0] : null, // Use the first image
// // // // // // // // // // // // // // //     }));

// // // // // // // // // // // // // // //     const newRequest = new Request({
// // // // // // // // // // // // // // //       name,
// // // // // // // // // // // // // // //       email,
// // // // // // // // // // // // // // //       phone,
// // // // // // // // // // // // // // //       company,
// // // // // // // // // // // // // // //       message,
// // // // // // // // // // // // // // //       products: formattedProducts,
// // // // // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // // // // //       status: "pending",
// // // // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // //     const request = await newRequest.save();

// // // // // // // // // // // // // // //     res.status(201).json(request);
// // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error: " + err.message });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // // //     const { status } = req.body;

// // // // // // // // // // // // // // //     const validStatuses = ["pending", "processing", "completed", "cancelled"];
// // // // // // // // // // // // // // //     if (!validStatuses.includes(status)) {
// // // // // // // // // // // // // // //       return res.status(400).json({ message: "Invalid status" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     request.status = status;
// // // // // // // // // // // // // // //     const updatedRequest = await request.save();

// // // // // // // // // // // // // // //     res.json(updatedRequest);
// // // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // module.exports = router;



// // // // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // // // const router = express.Router();
// // // // // // // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // // // // // // const User = require("../models/User");
// // // // // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth");
// // // // // // // // // // // // // // const crypto = require("crypto");

// // // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // // @desc    Get all requests
// // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const { status, search, sortBy, sortOrder, page = 1, limit = 10 } = req.query;
// // // // // // // // // // // // // //     let query = {};

// // // // // // // // // // // // // //     if (status && status !== "all") query.status = status;
// // // // // // // // // // // // // //     if (search) {
// // // // // // // // // // // // // //       query.$or = [
// // // // // // // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // // // // // // //       ];
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const sort = {};
// // // // // // // // // // // // // //     if (sortBy) {
// // // // // // // // // // // // // //       sort[sortBy === "amount" ? "totalAmount" : sortBy] = sortOrder === "asc" ? 1 : -1;
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // // //       .sort(sort)
// // // // // // // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // // // // // // //       .limit(parseInt(limit));

// // // // // // // // // // // // // //     const total = await Request.countDocuments(query);
// // // // // // // // // // // // // //     res.json({ requests, totalPages: Math.ceil(total / limit) });
// // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // //     res.status(500).json({ message: err.message });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // // @desc    Create a request and store/update user in User schema
// // // // // // // // // // // // // // // @access  Public
// // // // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const { name, email, phone, company, products, totalAmount } = req.body;

// // // // // // // // // // // // // //     // Validate required fields for the request
// // // // // // // // // // // // // //     if (!name || !email || !phone || !products || !totalAmount) {
// // // // // // // // // // // // // //       return res.status(400).json({ message: "All fields (name, email, phone, products, totalAmount) are required" });
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     // Check if user exists by email
// // // // // // // // // // // // // //     let user = await User.findOne({ email });

// // // // // // // // // // // // // //     if (user) {
// // // // // // // // // // // // // //       // Update existing user with any new information
// // // // // // // // // // // // // //       user.phone = phone || user.phone;
// // // // // // // // // // // // // //       user.company = company || user.company;
// // // // // // // // // // // // // //       user.firstName = name.split(" ")[0] || user.firstName;
// // // // // // // // // // // // // //       user.lastName = name.split(" ").slice(1).join(" ") || user.lastName;
// // // // // // // // // // // // // //       user.updatedAt = Date.now();
// // // // // // // // // // // // // //       await user.save();
// // // // // // // // // // // // // //     } else {
// // // // // // // // // // // // // //       // Create a new user if they don't exist
// // // // // // // // // // // // // //       const tempPassword = crypto.randomBytes(8).toString("hex"); // Generate temporary password
// // // // // // // // // // // // // //       user = new User({
// // // // // // // // // // // // // //         username: email.split("@")[0] + Math.random().toString(36).slice(2, 8), // Unique username
// // // // // // // // // // // // // //         email,
// // // // // // // // // // // // // //         password: tempPassword, // Temporary password (user can reset later)
// // // // // // // // // // // // // //         phone,
// // // // // // // // // // // // // //         firstName: name.split(" ")[0] || "Unknown",
// // // // // // // // // // // // // //         lastName: name.split(" ").slice(1).join(" ") || "",
// // // // // // // // // // // // // //         company: company || "",
// // // // // // // // // // // // // //         role: "user",
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //       await user.save();
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     // Create the request
// // // // // // // // // // // // // //     const request = new Request({
// // // // // // // // // // // // // //       name,
// // // // // // // // // // // // // //       email,
// // // // // // // // // // // // // //       phone,
// // // // // // // // // // // // // //       company,
// // // // // // // // // // // // // //       products,
// // // // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //     await request.save();

// // // // // // // // // // // // // //     res.status(201).json({
// // // // // // // // // // // // // //       request,
// // // // // // // // // // // // // //       user: {
// // // // // // // // // // // // // //         id: user._id,
// // // // // // // // // // // // // //         username: user.username,
// // // // // // // // // // // // // //         email: user.email,
// // // // // // // // // // // // // //         phone: user.phone,
// // // // // // // // // // // // // //         company: user.company,
// // // // // // // // // // // // // //         firstName: user.firstName,
// // // // // // // // // // // // // //         lastName: user.lastName,
// // // // // // // // // // // // // //         role: user.role,
// // // // // // // // // // // // // //       },
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // // // // // // //     res.status(400).json({ message: err.message });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // // //   try {
// // // // // // // // // // // // // //     const request = await Request.findByIdAndUpdate(
// // // // // // // // // // // // // //       req.params.id,
// // // // // // // // // // // // // //       { status: req.body.status },
// // // // // // // // // // // // // //       { new: true }
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //     if (!request) return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // // //     res.json(request);
// // // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // // //     res.status(400).json({ message: err.message });
// // // // // // // // // // // // // //   }
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // // module.exports = router;

// // // // // // // // // // // // // const express = require("express");
// // // // // // // // // // // // // const router = express.Router();
// // // // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth");
// // // // // // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // // // // // const User = require("../models/User");

// // // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // // @desc    Create a new request
// // // // // // // // // // // // // // @access  Private
// // // // // // // // // // // // // router.post("/", auth, async (req, res) => {
// // // // // // // // // // // // //   const { name, email, company, products, totalAmount, phone } = req.body;

// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     // Check if the user exists in the User collection
// // // // // // // // // // // // //     let user = await User.findOne({ email });

// // // // // // // // // // // // //     if (!user) {
// // // // // // // // // // // // //       // If the user doesn't exist, create a new user with role "user"
// // // // // // // // // // // // //       user = new User({
// // // // // // // // // // // // //         username: email.split("@")[0], // Generate a username from email
// // // // // // // // // // // // //         email,
// // // // // // // // // // // // //         password: "temporaryPassword", // In a real app, generate a random password and notify the user
// // // // // // // // // // // // //         firstName: name.split(" ")[0] || "",
// // // // // // // // // // // // //         lastName: name.split(" ")[1] || "",
// // // // // // // // // // // // //         company: company || "",
// // // // // // // // // // // // //         phone: phone || "",
// // // // // // // // // // // // //         role: "user",
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //       await user.save();
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     // Create a new request
// // // // // // // // // // // // //     const request = new Request({
// // // // // // // // // // // // //       userId: user._id,
// // // // // // // // // // // // //       name,
// // // // // // // // // // // // //       email,
// // // // // // // // // // // // //       company,
// // // // // // // // // // // // //       products,
// // // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // // //       status: "pending",
// // // // // // // // // // // // //       date: new Date(),
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     await request.save();

// // // // // // // // // // // // //     res.json(request);
// // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // // @desc    Get all requests
// // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // // // //   const { status, search, sortBy, sortOrder, page = 1, limit = 10 } = req.query;

// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const query = {};

// // // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // // //       query.status = status;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     if (search) {
// // // // // // // // // // // // //       query.$or = [
// // // // // // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // // // // // //       ];
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const sort = {};
// // // // // // // // // // // // //     if (sortBy) {
// // // // // // // // // // // // //       sort[sortBy] = sortOrder === "asc" ? 1 : -1;
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // // //       .sort(sort)
// // // // // // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // // // // // //       .limit(parseInt(limit));

// // // // // // // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // // // // // // //     res.json({
// // // // // // // // // // // // //       requests,
// // // // // // // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // // // // // // //       currentPage: parseInt(page),
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     res.json(request);
// // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // // //   const { status } = req.body;

// // // // // // // // // // // // //   try {
// // // // // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     request.status = status;
// // // // // // // // // // // // //     await request.save();

// // // // // // // // // // // // //     res.json(request);
// // // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // // //   }
// // // // // // // // // // // // // });

// // // // // // // // // // // // // module.exports = router;

// // // // // // // // // // // // const express = require("express")
// // // // // // // // // // // // const router = express.Router()
// // // // // // // // // // // // const Request = require("../models/Request")
// // // // // // // // // // // // const User = require("../models/User")
// // // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth")

// // // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // // @desc    Create a new request and automatically add user if not exists
// // // // // // // // // // // // // @access  Public
// // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body

// // // // // // // // // // // //   try {
// // // // // // // // // // // //     // Check if user already exists
// // // // // // // // // // // //     let user = await User.findOne({ email })

// // // // // // // // // // // //     if (!user) {
// // // // // // // // // // // //       // Create new user with role 'user'
// // // // // // // // // // // //       user = new User({
// // // // // // // // // // // //         username: email.split("@")[0], // Generate a username from email
// // // // // // // // // // // //         email,
// // // // // // // // // // // //         password: "defaultPassword123", // In a real app, this should be more secure
// // // // // // // // // // // //         firstName: name.split(" ")[0],
// // // // // // // // // // // //         lastName: name.split(" ").slice(1).join(" ") || "",
// // // // // // // // // // // //         company,
// // // // // // // // // // // //         phone,
// // // // // // // // // // // //         role: "user",
// // // // // // // // // // // //       })
// // // // // // // // // // // //       await user.save()
// // // // // // // // // // // //     }

// // // // // // // // // // // //     // Create new request
// // // // // // // // // // // //     const request = new Request({
// // // // // // // // // // // //       name,
// // // // // // // // // // // //       email,
// // // // // // // // // // // //       phone,
// // // // // // // // // // // //       company,
// // // // // // // // // // // //       message,
// // // // // // // // // // // //       products,
// // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // //       status: status || "pending",
// // // // // // // // // // // //     })

// // // // // // // // // // // //     await request.save()
// // // // // // // // // // // //     res.status(201).json(request)
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error("Error creating request:", err.message)
// // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // //   }
// // // // // // // // // // // // })

// // // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // // @desc    Get all requests with filters
// // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const { status, search, sortBy = "date", sortOrder = "desc", page = 1, limit = 10 } = req.query

// // // // // // // // // // // //     const query = {}
// // // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // // //       query.status = status
// // // // // // // // // // // //     }
// // // // // // // // // // // //     if (search) {
// // // // // // // // // // // //       query.$or = [
// // // // // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // // // // //       ]
// // // // // // // // // // // //     }

// // // // // // // // // // // //     const sort = {}
// // // // // // // // // // // //     sort[sortBy] = sortOrder === "asc" ? 1 : -1

// // // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // // //       .sort(sort)
// // // // // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // // // // //       .limit(parseInt(limit))

// // // // // // // // // // // //     const total = await Request.countDocuments(query)

// // // // // // // // // // // //     res.json({
// // // // // // // // // // // //       requests,
// // // // // // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // // // // // //       currentPage: parseInt(page),
// // // // // // // // // // // //     })
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error("Error fetching requests:", err.message)
// // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // //   }
// // // // // // // // // // // // })

// // // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // //     }

// // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error("Error fetching request:", err.message)
// // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // //     }
// // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // //   }
// // // // // // // // // // // // })

// // // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // // //   const { status } = req.body

// // // // // // // // // // // //   try {
// // // // // // // // // // // //     const request = await Request.findById(req.params.id)

// // // // // // // // // // // //     if (!request) {
// // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // //     }

// // // // // // // // // // // //     request.status = status
// // // // // // // // // // // //     await request.save()

// // // // // // // // // // // //     res.json(request)
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error("Error updating request status:", err.message)
// // // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // // //       return res.status(404).json({ message: "Request not found" })
// // // // // // // // // // // //     }
// // // // // // // // // // // //     res.status(500).json({ message: "Server Error" })
// // // // // // // // // // // //   }
// // // // // // // // // // // // })

// // // // // // // // // // // // module.exports = router


// // // // // // // // // // // const express = require("express");
// // // // // // // // // // // const router = express.Router();
// // // // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // // // const User = require("../models/User");
// // // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth");

// // // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // // @desc    Create a new request and ensure user exists in Users collection
// // // // // // // // // // // // @access  Public
// // // // // // // // // // // router.post('/', async (req, res) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     const { name, email, phone, company, message, products } = req.body;

// // // // // // // // // // //     // Calculate total amount
// // // // // // // // // // //     const totalAmount = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);

// // // // // // // // // // //     // Create the request
// // // // // // // // // // //     const newRequest = new Request({
// // // // // // // // // // //       name,
// // // // // // // // // // //       email,
// // // // // // // // // // //       phone,
// // // // // // // // // // //       company,
// // // // // // // // // // //       message,
// // // // // // // // // // //       products,
// // // // // // // // // // //       totalAmount,
// // // // // // // // // // //     });
// // // // // // // // // // //     await newRequest.save();

// // // // // // // // // // //     // Add customer to Customer collection if not already exists
// // // // // // // // // // //     let customer = await Customer.findOne({ email });
// // // // // // // // // // //     if (!customer) {
// // // // // // // // // // //       customer = new Customer({
// // // // // // // // // // //         name, // Use the name from the request payload
// // // // // // // // // // //         email,
// // // // // // // // // // //         phone,
// // // // // // // // // // //         company,
// // // // // // // // // // //       });
// // // // // // // // // // //       await customer.save();
// // // // // // // // // // //     }

// // // // // // // // // // //     res.status(201).json(newRequest);
// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error('Error creating request:', error);
// // // // // // // // // // //     res.status(500).json({ message: 'Server error' });
// // // // // // // // // // //   }
// // // // // // // // // // // });
// // // // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // // // // // // // //   try {
// // // // // // // // // // // //     // Check if user exists by email
// // // // // // // // // // // //     let user = await User.findOne({ email });

// // // // // // // // // // // //     if (!user) {
// // // // // // // // // // // //       // Create a new user if not found
// // // // // // // // // // // //       user = new User({
// // // // // // // // // // // //         username: email.split("@")[0], // Generate a username from email
// // // // // // // // // // // //         email,
// // // // // // // // // // // //         password: "defaultPassword123", // In a real app, you'd hash this and prompt for a password later
// // // // // // // // // // // //         firstName: name.split(" ")[0] || "",
// // // // // // // // // // // //         lastName: name.split(" ").slice(1).join(" ") || "",
// // // // // // // // // // // //         company,
// // // // // // // // // // // //         phone,
// // // // // // // // // // // //         role: "user",
// // // // // // // // // // // //       });
// // // // // // // // // // // //       await user.save();
// // // // // // // // // // // //     }

// // // // // // // // // // // //     // Create the request
// // // // // // // // // // // //     const request = new Request({
// // // // // // // // // // // //       name,
// // // // // // // // // // // //       email,
// // // // // // // // // // // //       phone,
// // // // // // // // // // // //       company,
// // // // // // // // // // // //       message,
// // // // // // // // // // // //       products,
// // // // // // // // // // // //       totalAmount,
// // // // // // // // // // // //       status: status || "pending",
// // // // // // // // // // // //     });

// // // // // // // // // // // //     await request.save();

// // // // // // // // // // // //     res.status(201).json(request);
// // // // // // // // // // // //   } catch (err) {
// // // // // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // // //   }
// // // // // // // // // // // // });

// // // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // // @desc    Get all requests
// // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // // //   const { status, search, sortBy = "date", sortOrder = "desc", page = 1, limit = 10 } = req.query;

// // // // // // // // // // //   try {
// // // // // // // // // // //     const query = {};
// // // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // // //       query.status = status;
// // // // // // // // // // //     }
// // // // // // // // // // //     if (search) {
// // // // // // // // // // //       query.$or = [
// // // // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // // // //       ];
// // // // // // // // // // //     }

// // // // // // // // // // //     const sort = {};
// // // // // // // // // // //     sort[sortBy] = sortOrder === "asc" ? 1 : -1;

// // // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // // //       .sort(sort)
// // // // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // // // //       .limit(parseInt(limit));

// // // // // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // // // // //     res.json({
// // // // // // // // // // //       requests,
// // // // // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // // // // //       currentPage: parseInt(page),
// // // // // // // // // // //     });
// // // // // // // // // // //   } catch (err) {
// // // // // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // router.get('/:id', async (req, res) => {
// // // // // // // // // // //   try {
// // // // // // // // // // //     const request = await Request.findById(req.params.id)
// // // // // // // // // // //       .populate('products')
// // // // // // // // // // //       .exec();
// // // // // // // // // // //     if (!request) {
// // // // // // // // // // //       return res.status(404).json({ message: 'Request not found' });
// // // // // // // // // // //     }
// // // // // // // // // // //     res.status(200).json(request);
// // // // // // // // // // //   } catch (error) {
// // // // // // // // // // //     console.error('Error fetching request:', error);
// // // // // // // // // // //     res.status(500).json({ message: 'Server error' });
// // // // // // // // // // //   }
// // // // // // // // // // // });
// // // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // // //   const { status } = req.body;

// // // // // // // // // // //   try {
// // // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // // //     if (!request) {
// // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // //     }

// // // // // // // // // // //     request.status = status;
// // // // // // // // // // //     await request.save();

// // // // // // // // // // //     res.json(request);
// // // // // // // // // // //   } catch (err) {
// // // // // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // // //     }
// // // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // // //   }
// // // // // // // // // // // });

// // // // // // // // // // // module.exports = router;



// // // // // // // // // // const express = require("express");
// // // // // // // // // // const router = express.Router();
// // // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // // const User = require("../models/User");
// // // // // // // // // // const { auth, adminAuth } = require("../middleware/auth");

// // // // // // // // // // // @route   POST api/requests
// // // // // // // // // // // @desc    Create a new request and ensure user exists in Users collection
// // // // // // // // // // // @access  Public
// // // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // // // // // //   try {
// // // // // // // // // //     // Check if user exists by email
// // // // // // // // // //     let user = await User.findOne({ email });

// // // // // // // // // //     if (!user) {
// // // // // // // // // //       // Split the name into firstName and lastName
// // // // // // // // // //       const nameParts = name.trim().split(" ");
// // // // // // // // // //       const firstName = nameParts[0] || "";
// // // // // // // // // //       const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

// // // // // // // // // //       // Create a new user if not found
// // // // // // // // // //       user = new User({
// // // // // // // // // //         username: email.split("@")[0], // Generate a username from email
// // // // // // // // // //         email,
// // // // // // // // // //         password: "defaultPassword123", // In a real app, you'd hash this and prompt for a password later
// // // // // // // // // //         firstName: firstName || name, // Fallback to full name if splitting fails
// // // // // // // // // //         lastName: lastName || "",
// // // // // // // // // //         company,
// // // // // // // // // //         phone,
// // // // // // // // // //         role: "user",
// // // // // // // // // //       });
// // // // // // // // // //       await user.save();
// // // // // // // // // //     }

// // // // // // // // // //     // Create the request
// // // // // // // // // //     const request = new Request({
// // // // // // // // // //       name,
// // // // // // // // // //       email,
// // // // // // // // // //       phone,
// // // // // // // // // //       company,
// // // // // // // // // //       message,
// // // // // // // // // //       products,
// // // // // // // // // //       totalAmount,
// // // // // // // // // //       status: status || "pending",
// // // // // // // // // //     });

// // // // // // // // // //     await request.save();

// // // // // // // // // //     res.status(201).json(request);
// // // // // // // // // //   } catch (err) {
// // // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // // @route   GET api/requests
// // // // // // // // // // // @desc    Get all requests
// // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // // //   const { status, search, sortBy = "date", sortOrder = "desc", page = 1, limit = 10 } = req.query;

// // // // // // // // // //   try {
// // // // // // // // // //     const query = {};
// // // // // // // // // //     if (status && status !== "all") {
// // // // // // // // // //       query.status = status;
// // // // // // // // // //     }
// // // // // // // // // //     if (search) {
// // // // // // // // // //       query.$or = [
// // // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // // //       ];
// // // // // // // // // //     }

// // // // // // // // // //     const sort = {};
// // // // // // // // // //     sort[sortBy] = sortOrder === "asc" ? 1 : -1;

// // // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // // //       .sort(sort)
// // // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // // //       .limit(parseInt(limit));

// // // // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // // // //     res.json({
// // // // // // // // // //       requests,
// // // // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // // // //       currentPage: parseInt(page),
// // // // // // // // // //     });
// // // // // // // // // //   } catch (err) {
// // // // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // //     if (!request) {
// // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // //     }

// // // // // // // // // //     res.json(request);
// // // // // // // // // //   } catch (err) {
// // // // // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // //     }
// // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // // @desc    Update request status
// // // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // // // //   const { status } = req.body;

// // // // // // // // // //   try {
// // // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // // //     if (!request) {
// // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // //     }

// // // // // // // // // //     request.status = status;
// // // // // // // // // //     await request.save();

// // // // // // // // // //     res.json(request);
// // // // // // // // // //   } catch (err) {
// // // // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // // //     }
// // // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // module.exports = router;


// // // // // // // // // const express = require("express");
// // // // // // // // // const router = express.Router();
// // // // // // // // // const Request = require("../models/Request");
// // // // // // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // // // // // @route   GET api/requests
// // // // // // // // // // @desc    Get all requests with filters
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // // // // // // //     const query = {};
// // // // // // // // //     if (status && status !== "all") {
// // // // // // // // //       query.status = status;
// // // // // // // // //     }
// // // // // // // // //     if (search) {
// // // // // // // // //       query.$or = [
// // // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // // //       ];
// // // // // // // // //     }

// // // // // // // // //     const sortOptions = {};
// // // // // // // // //     if (sort === "newest") sortOptions.date = -1;
// // // // // // // // //     if (sort === "oldest") sortOptions.date = 1;

// // // // // // // // //     const requests = await Request.find(query)
// // // // // // // // //       .sort(sortOptions)
// // // // // // // // //       .skip((page - 1) * limit)
// // // // // // // // //       .limit(parseInt(limit));

// // // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // // //     res.json({
// // // // // // // // //       requests,
// // // // // // // // //       total,
// // // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // // //       currentPage: parseInt(page),
// // // // // // // // //     });
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // // @desc    Get request by ID
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // //     if (!request) {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }

// // // // // // // // //     res.json(request);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   GET api/requests/stats
// // // // // // // // // // @desc    Get request statistics
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     // Get counts by status
// // // // // // // // //     const statusCounts = await Request.aggregate([
// // // // // // // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // // // // // // //     ]);

// // // // // // // // //     // Get total revenue
// // // // // // // // //     const totalRevenueResult = await Request.aggregate([
// // // // // // // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // // // // // // //     ]);
// // // // // // // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // // // // // // //     // Format the status counts
// // // // // // // // //     const stats = {
// // // // // // // // //       total: await Request.countDocuments(),
// // // // // // // // //       byStatus: {
// // // // // // // // //         pending: 0,
// // // // // // // // //         processing: 0,
// // // // // // // // //         completed: 0,
// // // // // // // // //         cancelled: 0,
// // // // // // // // //       },
// // // // // // // // //       totalRevenue,
// // // // // // // // //     };

// // // // // // // // //     statusCounts.forEach((item) => {
// // // // // // // // //       stats.byStatus[item._id] = item.count;
// // // // // // // // //     });

// // // // // // // // //     // Get monthly request trends for the last 6 months
// // // // // // // // //     const sixMonthsAgo = new Date();
// // // // // // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // // // // // // //     sixMonthsAgo.setDate(1); // Start of the month

// // // // // // // // //     const monthlyRequests = await Request.aggregate([
// // // // // // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // // // // // //       {
// // // // // // // // //         $group: {
// // // // // // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" } },
// // // // // // // // //           count: { $sum: 1 },
// // // // // // // // //         },
// // // // // // // // //       },
// // // // // // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // // // // // //     ]);

// // // // // // // // //     // Format monthly data
// // // // // // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // // // // // // //     const monthlyData = [];

// // // // // // // // //     // Initialize with zeros for all months
// // // // // // // // //     for (let i = 0; i < 6; i++) {
// // // // // // // // //       const date = new Date();
// // // // // // // // //       date.setMonth(date.getMonth() - 5 + i);
// // // // // // // // //       date.setDate(1);
// // // // // // // // //       monthlyData.push({
// // // // // // // // //         month: monthNames[date.getMonth()],
// // // // // // // // //         year: date.getFullYear(),
// // // // // // // // //         count: 0,
// // // // // // // // //       });
// // // // // // // // //     }

// // // // // // // // //     // Fill in actual data
// // // // // // // // //     monthlyRequests.forEach((item) => {
// // // // // // // // //       const monthIndex = item._id.month - 1;
// // // // // // // // //       const year = item._id.year;

// // // // // // // // //       const dataIndex = monthlyData.findIndex(
// // // // // // // // //         (d) => d.month === monthNames[monthIndex] && d.year === year
// // // // // // // // //       );

// // // // // // // // //       if (dataIndex !== -1) {
// // // // // // // // //         monthlyData[dataIndex].count = item.count;
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     // Get recent requests
// // // // // // // // //     const recentRequests = await Request.find()
// // // // // // // // //       .sort({ date: -1 })
// // // // // // // // //       .limit(5);

// // // // // // // // //     res.json({
// // // // // // // // //       stats,
// // // // // // // // //       recentRequests,
// // // // // // // // //       monthlyData,
// // // // // // // // //     });
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error fetching request stats:", err.message);
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   POST api/requests
// // // // // // // // // // @desc    Create a new request
// // // // // // // // // // @access  Public
// // // // // // // // // router.post("/", async (req, res) => {
// // // // // // // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // // // // // //   try {
// // // // // // // // //     const request = new Request({
// // // // // // // // //       name,
// // // // // // // // //       email,
// // // // // // // // //       phone,
// // // // // // // // //       company,
// // // // // // // // //       message,
// // // // // // // // //       products,
// // // // // // // // //       totalAmount,
// // // // // // // // //     });

// // // // // // // // //     await request.save();
// // // // // // // // //     res.status(201).json(request);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // // @desc    Update request status
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.put("/:id/status", async (req, res) => {
// // // // // // // // //   const { status, note } = req.body;

// // // // // // // // //   try {
// // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // //     if (!request) {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }

// // // // // // // // //     request.status = status;
// // // // // // // // //     if (note) request.notes = note;
// // // // // // // // //     request.updatedAt = Date.now();

// // // // // // // // //     await request.save();
// // // // // // // // //     res.json(request);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // // // // @desc    Cancel a request
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // // // // // // //   const { reason } = req.body;

// // // // // // // // //   try {
// // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // //     if (!request) {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }

// // // // // // // // //     if (request.status === "cancelled") {
// // // // // // // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // // // // // // //     }

// // // // // // // // //     request.status = "cancelled";
// // // // // // // // //     request.notes = reason || "Cancelled by admin";
// // // // // // // // //     request.updatedAt = Date.now();

// // // // // // // // //     await request.save();
// // // // // // // // //     res.json(request);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error cancelling request:", err.message);
// // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   PUT api/requests/:id
// // // // // // // // // // @desc    Update a request
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // // // // //   try {
// // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // //     if (!request) {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }

// // // // // // // // //     // Update fields
// // // // // // // // //     if (name) request.name = name;
// // // // // // // // //     if (email) request.email = email;
// // // // // // // // //     if (phone) request.phone = phone;
// // // // // // // // //     if (company) request.company = company;
// // // // // // // // //     if (message) request.message = message;
// // // // // // // // //     if (products) request.products = products;
// // // // // // // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // // // // // // //     if (status) request.status = status;
// // // // // // // // //     request.updatedAt = Date.now();

// // // // // // // // //     await request.save();
// // // // // // // // //     res.json(request);
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error updating request:", err.message);
// // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // @route   DELETE api/requests/:id
// // // // // // // // // // @desc    Delete a request
// // // // // // // // // // @access  Private (Admin only)
// // // // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // // //     if (!request) {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }

// // // // // // // // //     await request.deleteOne();
// // // // // // // // //     res.json({ message: "Request removed" });
// // // // // // // // //   } catch (err) {
// // // // // // // // //     console.error("Error deleting request:", err.message);
// // // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // // //     }
// // // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // module.exports = router;


// // // // // // // // const express = require("express");
// // // // // // // // const router = express.Router();
// // // // // // // // const Request = require("../models/Request");
// // // // // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // // // // @route   GET api/requests
// // // // // // // // // @desc    Get all requests with filters
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // // // // // //     const query = {};
// // // // // // // //     if (status && status !== "all") {
// // // // // // // //       query.status = status;
// // // // // // // //     }
// // // // // // // //     if (search) {
// // // // // // // //       query.$or = [
// // // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // // //       ];
// // // // // // // //     }

// // // // // // // //     const sortOptions = {};
// // // // // // // //     if (sort === "newest") sortOptions.date = -1;
// // // // // // // //     if (sort === "oldest") sortOptions.date = 1;

// // // // // // // //     const requests = await Request.find(query)
// // // // // // // //       .sort(sortOptions)
// // // // // // // //       .skip((page - 1) * limit)
// // // // // // // //       .limit(parseInt(limit));

// // // // // // // //     const total = await Request.countDocuments(query);

// // // // // // // //     res.json({
// // // // // // // //       requests,
// // // // // // // //       total,
// // // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // // //       currentPage: parseInt(page),
// // // // // // // //     });
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   GET api/requests/stats
// // // // // // // // // @desc    Get request statistics
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     // Get counts by status
// // // // // // // //     const statusCounts = await Request.aggregate([
// // // // // // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // // // // // //     ]);

// // // // // // // //     // Get total revenue
// // // // // // // //     const totalRevenueResult = await Request.aggregate([
// // // // // // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // // // // // //     ]);
// // // // // // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // // // // // //     // Format the status counts
// // // // // // // //     const stats = {
// // // // // // // //       total: await Request.countDocuments(),
// // // // // // // //       byStatus: {
// // // // // // // //         pending: 0,
// // // // // // // //         processing: 0,
// // // // // // // //         completed: 0,
// // // // // // // //         cancelled: 0,
// // // // // // // //       },
// // // // // // // //       totalRevenue,
// // // // // // // //     };

// // // // // // // //     statusCounts.forEach((item) => {
// // // // // // // //       stats.byStatus[item._id] = item.count;
// // // // // // // //     });

// // // // // // // //     // Get monthly request trends for the last 6 months
// // // // // // // //     const sixMonthsAgo = new Date();
// // // // // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // // // // // //     sixMonthsAgo.setDate(1); // Start of the month

// // // // // // // //     const monthlyRequests = await Request.aggregate([
// // // // // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // // // // //       {
// // // // // // // //         $group: {
// // // // // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" } },
// // // // // // // //           count: { $sum: 1 },
// // // // // // // //         },
// // // // // // // //       },
// // // // // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // // // // //     ]);

// // // // // // // //     // Format monthly data
// // // // // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // // // // // //     const monthlyData = [];

// // // // // // // //     // Initialize with zeros for all months
// // // // // // // //     for (let i = 0; i < 6; i++) {
// // // // // // // //       const date = new Date();
// // // // // // // //       date.setMonth(date.getMonth() - 5 + i);
// // // // // // // //       date.setDate(1);
// // // // // // // //       monthlyData.push({
// // // // // // // //         month: monthNames[date.getMonth()],
// // // // // // // //         year: date.getFullYear(),
// // // // // // // //         count: 0,
// // // // // // // //       });
// // // // // // // //     }

// // // // // // // //     // Fill in actual data
// // // // // // // //     monthlyRequests.forEach((item) => {
// // // // // // // //       const monthIndex = item._id.month - 1;
// // // // // // // //       const year = item._id.year;

// // // // // // // //       const dataIndex = monthlyData.findIndex(
// // // // // // // //         (d) => d.month === monthNames[monthIndex] && d.year === year
// // // // // // // //       );

// // // // // // // //       if (dataIndex !== -1) {
// // // // // // // //         monthlyData[dataIndex].count = item.count;
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     // Get recent requests
// // // // // // // //     const recentRequests = await Request.find()
// // // // // // // //       .sort({ date: -1 })
// // // // // // // //       .limit(5);

// // // // // // // //     res.json({
// // // // // // // //       stats,
// // // // // // // //       recentRequests,
// // // // // // // //       monthlyData,
// // // // // // // //     });
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error fetching request stats:", err.message);
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   GET api/requests/:id
// // // // // // // // // @desc    Get request by ID
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // //     if (!request) {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }

// // // // // // // //     res.json(request);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   POST api/requests
// // // // // // // // // @desc    Create a new request
// // // // // // // // // @access  Public
// // // // // // // // router.post("/", async (req, res) => {
// // // // // // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // // // // //   try {
// // // // // // // //     const request = new Request({
// // // // // // // //       name,
// // // // // // // //       email,
// // // // // // // //       phone,
// // // // // // // //       company,
// // // // // // // //       message,
// // // // // // // //       products,
// // // // // // // //       totalAmount,
// // // // // // // //     });

// // // // // // // //     await request.save();
// // // // // // // //     res.status(201).json(request);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error creating request:", err.message);
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // // @desc    Update request status
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // // //   const { status, note } = req.body;

// // // // // // // //   try {
// // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // //     if (!request) {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }

// // // // // // // //     request.status = status;
// // // // // // // //     if (note) request.notes = note;
// // // // // // // //     request.updatedAt = Date.now();

// // // // // // // //     await request.save();
// // // // // // // //     res.json(request);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // // // @desc    Cancel a request
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // // // // // //   const { reason } = req.body;

// // // // // // // //   try {
// // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // //     if (!request) {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }

// // // // // // // //     if (request.status === "cancelled") {
// // // // // // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // // // // // //     }

// // // // // // // //     request.status = "cancelled";
// // // // // // // //     request.notes = reason || "Cancelled by admin";
// // // // // // // //     request.updatedAt = Date.now();

// // // // // // // //     await request.save();
// // // // // // // //     res.json(request);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error cancelling request:", err.message);
// // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   PUT api/requests/:id
// // // // // // // // // @desc    Update a request
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // // // //   try {
// // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // //     if (!request) {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }

// // // // // // // //     // Update fields
// // // // // // // //     if (name) request.name = name;
// // // // // // // //     if (email) request.email = email;
// // // // // // // //     if (phone) request.phone = phone;
// // // // // // // //     if (company) request.company = company;
// // // // // // // //     if (message) request.message = message;
// // // // // // // //     if (products) request.products = products;
// // // // // // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // // // // // //     if (status) request.status = status;
// // // // // // // //     request.updatedAt = Date.now();

// // // // // // // //     await request.save();
// // // // // // // //     res.json(request);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error updating request:", err.message);
// // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // @route   DELETE api/requests/:id
// // // // // // // // // @desc    Delete a request
// // // // // // // // // @access  Private (Admin only)
// // // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // // //     if (!request) {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }

// // // // // // // //     await request.deleteOne();
// // // // // // // //     res.json({ message: "Request removed" });
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Error deleting request:", err.message);
// // // // // // // //     if (err.kind === "ObjectId") {
// // // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // module.exports = router;


// // // // // // // const express = require("express");
// // // // // // // const router = express.Router();
// // // // // // // const Request = require("../models/Request");
// // // // // // // const User = require("../models/User");
// // // // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // // // @route   GET api/requests
// // // // // // // // @desc    Get all requests with filters
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // // // // //     const query = {};
// // // // // // //     if (status && status !== "all") {
// // // // // // //       query.status = status;
// // // // // // //     }
// // // // // // //     if (search) {
// // // // // // //       query.$or = [
// // // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // // //       ];
// // // // // // //     }

// // // // // // //     const sortOptions = {};
// // // // // // //     if (sort === "newest") sortOptions.date = -1;
// // // // // // //     if (sort === "oldest") sortOptions.date = 1;

// // // // // // //     const requests = await Request.find(query)
// // // // // // //       .sort(sortOptions)
// // // // // // //       .skip((page - 1) * limit)
// // // // // // //       .limit(parseInt(limit));

// // // // // // //     const total = await Request.countDocuments(query);

// // // // // // //     res.json({
// // // // // // //       requests,
// // // // // // //       total,
// // // // // // //       totalPages: Math.ceil(total / limit),
// // // // // // //       currentPage: parseInt(page),
// // // // // // //     });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching requests:", err.message);
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   GET api/requests/stats
// // // // // // // // @desc    Get request statistics
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     // Get counts by status
// // // // // // //     const statusCounts = await Request.aggregate([
// // // // // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // // // // //     ]);

// // // // // // //     // Get total revenue
// // // // // // //     const totalRevenueResult = await Request.aggregate([
// // // // // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // // // // //     ]);
// // // // // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // // // // //     // Format the status counts
// // // // // // //     const stats = {
// // // // // // //       total: await Request.countDocuments(),
// // // // // // //       byStatus: {
// // // // // // //         pending: 0,
// // // // // // //         processing: 0,
// // // // // // //         completed: 0,
// // // // // // //         cancelled: 0,
// // // // // // //       },
// // // // // // //       totalRevenue,
// // // // // // //     };

// // // // // // //     statusCounts.forEach((item) => {
// // // // // // //       stats.byStatus[item._id] = item.count;
// // // // // // //     });

// // // // // // //     // Get monthly request trends for the last 6 months with status breakdown
// // // // // // //     const sixMonthsAgo = new Date();
// // // // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // // // // //     sixMonthsAgo.setDate(1);

// // // // // // //     const monthlyRequests = await Request.aggregate([
// // // // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // // // //       {
// // // // // // //         $group: {
// // // // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// // // // // // //           count: { $sum: 1 },
// // // // // // //         },
// // // // // // //       },
// // // // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // // // //     ]);

// // // // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // // // // //     const monthlyData = [];

// // // // // // //     for (let i = 0; i < 6; i++) {
// // // // // // //       const date = new Date();
// // // // // // //       date.setMonth(date.getMonth() - 5 + i);
// // // // // // //       date.setDate(1);
// // // // // // //       const month = monthNames[date.getMonth()];
// // // // // // //       const year = date.getFullYear();

// // // // // // //       const monthData = monthlyRequests.filter(
// // // // // // //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// // // // // // //       );

// // // // // // //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// // // // // // //       const byStatus = {
// // // // // // //         pending: 0,
// // // // // // //         processing: 0,
// // // // // // //         completed: 0,
// // // // // // //         cancelled: 0,
// // // // // // //       };

// // // // // // //       monthData.forEach((item) => {
// // // // // // //         byStatus[item._id.status] = item.count;
// // // // // // //       });

// // // // // // //       monthlyData.push({
// // // // // // //         month,
// // // // // // //         year,
// // // // // // //         count: totalCount,
// // // // // // //         byStatus,
// // // // // // //       });
// // // // // // //     }

// // // // // // //     // Get recent requests
// // // // // // //     const recentRequests = await Request.find()
// // // // // // //       .sort({ date: -1 })
// // // // // // //       .limit(5);

// // // // // // //     res.json({
// // // // // // //       stats,
// // // // // // //       recentRequests,
// // // // // // //       monthlyData,
// // // // // // //     });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching request stats:", err.message);
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   GET api/requests/:id
// // // // // // // // @desc    Get request by ID
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // //     if (!request) {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }

// // // // // // //     res.json(request);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error fetching request:", err.message);
// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   POST api/requests
// // // // // // // // @desc    Create a new request and associate with a user
// // // // // // // // @access  Public
// // // // // // // router.post("/", async (req, res) => {
// // // // // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // // // //   try {
// // // // // // //     // Check if a user with this email already exists
// // // // // // //     let user = await User.findOne({ email });

// // // // // // //     if (!user) {
// // // // // // //       // Create a new user with a temporary password
// // // // // // //       const username = email.split("@")[0]; // Generate a username from the email
// // // // // // //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// // // // // // //       user = new User({
// // // // // // //         username,
// // // // // // //         email,
// // // // // // //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// // // // // // //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// // // // // // //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// // // // // // //         phone,
// // // // // // //         company,
// // // // // // //         role: "user",
// // // // // // //       });

// // // // // // //       await user.save();
// // // // // // //     }

// // // // // // //     // Create the request and link it to the user
// // // // // // //     const request = new Request({
// // // // // // //       name,
// // // // // // //       email,
// // // // // // //       phone,
// // // // // // //       company,
// // // // // // //       message,
// // // // // // //       products,
// // // // // // //       totalAmount,
// // // // // // //       userId: user._id, // Link the request to the user
// // // // // // //     });

// // // // // // //     await request.save();
// // // // // // //     res.status(201).json(request);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error creating request:", err.message);
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   PUT api/requests/:id/status
// // // // // // // // @desc    Update request status
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // // //   const { status, note } = req.body;

// // // // // // //   try {
// // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // //     if (!request) {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }

// // // // // // //     request.status = status;
// // // // // // //     if (note) request.notes = note;
// // // // // // //     request.updatedAt = Date.now();

// // // // // // //     await request.save();
// // // // // // //     res.json(request);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error updating request status:", err.message);
// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // // @desc    Cancel a request
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // // // // //   const { reason } = req.body;

// // // // // // //   try {
// // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // //     if (!request) {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }

// // // // // // //     if (request.status === "cancelled") {
// // // // // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // // // // //     }

// // // // // // //     request.status = "cancelled";
// // // // // // //     request.notes = reason || "Cancelled by admin";
// // // // // // //     request.updatedAt = Date.now();

// // // // // // //     await request.save();
// // // // // // //     res.json(request);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error cancelling request:", err.message);
// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   PUT api/requests/:id
// // // // // // // // @desc    Update a request
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // // //   try {
// // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // //     if (!request) {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }

// // // // // // //     // Update fields
// // // // // // //     if (name) request.name = name;
// // // // // // //     if (email) request.email = email;
// // // // // // //     if (phone) request.phone = phone;
// // // // // // //     if (company) request.company = company;
// // // // // // //     if (message) request.message = message;
// // // // // // //     if (products) request.products = products;
// // // // // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // // // // //     if (status) request.status = status;
// // // // // // //     request.updatedAt = Date.now();

// // // // // // //     await request.save();
// // // // // // //     res.json(request);
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error updating request:", err.message);
// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // @route   DELETE api/requests/:id
// // // // // // // // @desc    Delete a request
// // // // // // // // @access  Private (Admin only)
// // // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // // //   try {
// // // // // // //     const request = await Request.findById(req.params.id);

// // // // // // //     if (!request) {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }

// // // // // // //     await request.deleteOne();
// // // // // // //     res.json({ message: "Request removed" });
// // // // // // //   } catch (err) {
// // // // // // //     console.error("Error deleting request:", err.message);
// // // // // // //     if (err.kind === "ObjectId") {
// // // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // // //     }
// // // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // module.exports = router;

// // // // // // const express = require("express");
// // // // // // const router = express.Router();
// // // // // // const Request = require("../models/Request");
// // // // // // const Product = require("../models/Product");
// // // // // // const User = require("../models/User");
// // // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // // @route   GET api/requests
// // // // // // // @desc    Get all requests with filters
// // // // // // // @access  Private (Admin only)
// // // // // // router.get("/", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // // // //     const query = {};
// // // // // //     if (status && status !== "all") {
// // // // // //       query.status = status;
// // // // // //     }
// // // // // //     if (search) {
// // // // // //       query.$or = [
// // // // // //         { name: { $regex: search, $options: "i" } },
// // // // // //         { email: { $regex: search, $options: "i" } },
// // // // // //         { company: { $regex: search, $options: "i" } },
// // // // // //       ];
// // // // // //     }

// // // // // //     const sortOptions = {};
// // // // // //     if (sort === "newest") sortOptions.date = -1;
// // // // // //     if (sort === "oldest") sortOptions.date = 1;

// // // // // //     const requests = await Request.find(query)
// // // // // //       .sort(sortOptions)
// // // // // //       .skip((page - 1) * limit)
// // // // // //       .limit(parseInt(limit));

// // // // // //     const total = await Request.countDocuments(query);

// // // // // //     res.json({
// // // // // //       requests,
// // // // // //       total,
// // // // // //       totalPages: Math.ceil(total / limit),
// // // // // //       currentPage: parseInt(page),
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching requests:", err.message);
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   GET api/requests/stats
// // // // // // // @desc    Get request statistics
// // // // // // // @access  Private (Admin only)
// // // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     // Get counts by status
// // // // // //     const statusCounts = await Request.aggregate([
// // // // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // // // //     ]);

// // // // // //     // Get total revenue
// // // // // //     const totalRevenueResult = await Request.aggregate([
// // // // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // // // //     ]);
// // // // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // // // //     // Format the status counts
// // // // // //     const stats = {
// // // // // //       total: await Request.countDocuments(),
// // // // // //       byStatus: {
// // // // // //         pending: 0,
// // // // // //         processing: 0,
// // // // // //         completed: 0,
// // // // // //         cancelled: 0,
// // // // // //       },
// // // // // //       totalRevenue,
// // // // // //     };

// // // // // //     statusCounts.forEach((item) => {
// // // // // //       stats.byStatus[item._id] = item.count;
// // // // // //     });

// // // // // //     // Get monthly request trends for the last 6 months with status breakdown
// // // // // //     const sixMonthsAgo = new Date();
// // // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // // // //     sixMonthsAgo.setDate(1);

// // // // // //     const monthlyRequests = await Request.aggregate([
// // // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // // //       {
// // // // // //         $group: {
// // // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// // // // // //           count: { $sum: 1 },
// // // // // //         },
// // // // // //       },
// // // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // // //     ]);

// // // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // // // //     const monthlyData = [];

// // // // // //     for (let i = 0; i < 6; i++) {
// // // // // //       const date = new Date();
// // // // // //       date.setMonth(date.getMonth() - 5 + i);
// // // // // //       date.setDate(1);
// // // // // //       const month = monthNames[date.getMonth()];
// // // // // //       const year = date.getFullYear();

// // // // // //       const monthData = monthlyRequests.filter(
// // // // // //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// // // // // //       );

// // // // // //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// // // // // //       const byStatus = {
// // // // // //         pending: 0,
// // // // // //         processing: 0,
// // // // // //         completed: 0,
// // // // // //         cancelled: 0,
// // // // // //       };

// // // // // //       monthData.forEach((item) => {
// // // // // //         byStatus[item._id.status] = item.count;
// // // // // //       });

// // // // // //       monthlyData.push({
// // // // // //         month,
// // // // // //         year,
// // // // // //         count: totalCount,
// // // // // //         byStatus,
// // // // // //       });
// // // // // //     }

// // // // // //     // Get recent requests
// // // // // //     const recentRequests = await Request.find()
// // // // // //       .sort({ date: -1 })
// // // // // //       .limit(5);

// // // // // //     res.json({
// // // // // //       stats,
// // // // // //       recentRequests,
// // // // // //       monthlyData,
// // // // // //     });
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching request stats:", err.message);
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   GET api/requests/:id
// // // // // // // @desc    Get request by ID
// // // // // // // @access  Private (Admin only)
// // // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const request = await Request.findById(req.params.id);

// // // // // //     if (!request) {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }

// // // // // //     res.json(request);
// // // // // //   } catch (err) {
// // // // // //     console.error("Error fetching request:", err.message);
// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   POST api/requests
// // // // // // // @desc    Create a new request and associate with a user
// // // // // // // @access  Public
// // // // // // router.post("/", async (req, res) => {
// // // // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // // //   try {
// // // // // //     // Check if a user with this email already exists
// // // // // //     let user = await User.findOne({ email });

// // // // // //     if (!user) {
// // // // // //       // Create a new user with a temporary password
// // // // // //       const username = email.split("@")[0]; // Generate a username from the email
// // // // // //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// // // // // //       user = new User({
// // // // // //         username,
// // // // // //         email,
// // // // // //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// // // // // //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// // // // // //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// // // // // //         phone,
// // // // // //         company,
// // // // // //         role: "user",
// // // // // //       });

// // // // // //       await user.save();
// // // // // //     }

// // // // // //     // Create the request and link it to the user
// // // // // //     const request = new Request({
// // // // // //       name,
// // // // // //       email,
// // // // // //       phone,
// // // // // //       company,
// // // // // //       message,
// // // // // //       products,
// // // // // //       totalAmount,
// // // // // //       userId: user._id, // Link the request to the user
// // // // // //     });

// // // // // //     await request.save();
// // // // // //     res.status(201).json(request);
// // // // // //   } catch (err) {
// // // // // //     console.error("Error creating request:", err.message);
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   PUT api/requests/:id/status
// // // // // // // @desc    Update request status and manage stock
// // // // // // // @access  Private (Admin only)
// // // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // // //   const { status, note } = req.body;

// // // // // //   try {
// // // // // //     const request = await Request.findById(req.params.id);

// // // // // //     if (!request) {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }

// // // // // //     const previousStatus = request.status;
// // // // // //     request.status = status;
// // // // // //     if (note) request.notes = note;
// // // // // //     request.updatedAt = Date.now();

// // // // // //     // Stock Management Logic
// // // // // //     if (previousStatus !== status) {
// // // // // //       // Case 1: Status changes to "completed" (decrement stock)
// // // // // //       if (status === "completed" && previousStatus !== "completed") {
// // // // // //         for (const product of request.products) {
// // // // // //           const productDoc = await Product.findOne({ model: product.id });
// // // // // //           if (productDoc) {
// // // // // //             const newStock = productDoc.stockQuantity - product.quantity;
// // // // // //             if (newStock < 0) {
// // // // // //               return res.status(400).json({ message: `Insufficient stock for product ${productDoc.name}` });
// // // // // //             }
// // // // // //             productDoc.stockQuantity = newStock;
// // // // // //             await productDoc.save();
// // // // // //           }
// // // // // //         }
// // // // // //       }
// // // // // //       // Case 2: Status changes from "completed" to another status (increment stock)
// // // // // //       else if (previousStatus === "completed" && status !== "completed") {
// // // // // //         for (const product of request.products) {
// // // // // //           const productDoc = await Product.findOne({ model: product.id });
// // // // // //           if (productDoc) {
// // // // // //             productDoc.stockQuantity += product.quantity;
// // // // // //             await productDoc.save();
// // // // // //           }
// // // // // //         }
// // // // // //       }
// // // // // //       // Case 3: Status changes between pending/processing/cancelled (no stock change)
// // // // // //       // No action needed
// // // // // //     }

// // // // // //     await request.save();
// // // // // //     res.json(request);
// // // // // //   } catch (err) {
// // // // // //     console.error("Error updating request status:", err.message);
// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   PUT api/requests/:id/cancel
// // // // // // // @desc    Cancel a request
// // // // // // // @access  Private (Admin only)
// // // // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // // // //   const { reason } = req.body;

// // // // // //   try {
// // // // // //     const request = await Request.findById(req.params.id);

// // // // // //     if (!request) {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }

// // // // // //     if (request.status === "cancelled") {
// // // // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // // // //     }

// // // // // //     const previousStatus = request.status;
// // // // // //     request.status = "cancelled";
// // // // // //     request.notes = reason || "Cancelled by admin";
// // // // // //     request.updatedAt = Date.now();

// // // // // //     // Stock Management Logic for cancellation
// // // // // //     if (previousStatus === "completed") {
// // // // // //       for (const product of request.products) {
// // // // // //         const productDoc = await Product.findOne({ model: product.id });
// // // // // //         if (productDoc) {
// // // // // //           productDoc.stockQuantity += product.quantity;
// // // // // //           await productDoc.save();
// // // // // //         }
// // // // // //       }
// // // // // //     }

// // // // // //     await request.save();
// // // // // //     res.json(request);
// // // // // //   } catch (err) {
// // // // // //     console.error("Error cancelling request:", err.message);
// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   PUT api/requests/:id
// // // // // // // @desc    Update a request
// // // // // // // @access  Private (Admin only)
// // // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // // //   try {
// // // // // //     const request = await Request.findById(req.params.id);

// // // // // //     if (!request) {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }

// // // // // //     // Update fields
// // // // // //     if (name) request.name = name;
// // // // // //     if (email) request.email = email;
// // // // // //     if (phone) request.phone = phone;
// // // // // //     if (company) request.company = company;
// // // // // //     if (message) request.message = message;
// // // // // //     if (products) request.products = products;
// // // // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // // // //     if (status) request.status = status;
// // // // // //     request.updatedAt = Date.now();

// // // // // //     await request.save();
// // // // // //     res.json(request);
// // // // // //   } catch (err) {
// // // // // //     console.error("Error updating request:", err.message);
// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // // @route   DELETE api/requests/:id
// // // // // // // @desc    Delete a request
// // // // // // // @access  Private (Admin only)
// // // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // // //   try {
// // // // // //     const request = await Request.findById(req.params.id);

// // // // // //     if (!request) {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }

// // // // // //     await request.deleteOne();
// // // // // //     res.json({ message: "Request removed" });
// // // // // //   } catch (err) {
// // // // // //     console.error("Error deleting request:", err.message);
// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ message: "Request not found" });
// // // // // //     }
// // // // // //     res.status(500).json({ message: "Server Error" });
// // // // // //   }
// // // // // // });

// // // // // // module.exports = router;

// // // // // const express = require("express");
// // // // // const router = express.Router();
// // // // // const Request = require("../models/Request");
// // // // // const Product = require("../models/Product");
// // // // // const User = require("../models/User");
// // // // // const { adminAuth } = require("../middleware/auth");

// // // // // // @route   GET api/requests
// // // // // // @desc    Get all requests with filters
// // // // // // @access  Private (Admin only)
// // // // // router.get("/", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // // //     const query = {};
// // // // //     if (status && status !== "all") {
// // // // //       query.status = status;
// // // // //     }
// // // // //     if (search) {
// // // // //       query.$or = [
// // // // //         { name: { $regex: search, $options: "i" } },
// // // // //         { email: { $regex: search, $options: "i" } },
// // // // //         { company: { $regex: search, $options: "i" } },
// // // // //       ];
// // // // //     }

// // // // //     const sortOptions = {};
// // // // //     if (sort === "newest") sortOptions.date = -1;
// // // // //     if (sort === "oldest") sortOptions.date = 1;

// // // // //     const requests = await Request.find(query)
// // // // //       .sort(sortOptions)
// // // // //       .skip((page - 1) * limit)
// // // // //       .limit(parseInt(limit));

// // // // //     const total = await Request.countDocuments(query);

// // // // //     res.json({
// // // // //       requests,
// // // // //       total,
// // // // //       totalPages: Math.ceil(total / limit),
// // // // //       currentPage: parseInt(page),
// // // // //     });
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching requests:", err.message);
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   GET api/requests/stats
// // // // // // @desc    Get request statistics
// // // // // // @access  Private (Admin only)
// // // // // router.get("/stats", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     // Get counts by status
// // // // //     const statusCounts = await Request.aggregate([
// // // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // // //     ]);

// // // // //     // Get total revenue
// // // // //     const totalRevenueResult = await Request.aggregate([
// // // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // // //     ]);
// // // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // // //     // Format the status counts
// // // // //     const stats = {
// // // // //       total: await Request.countDocuments(),
// // // // //       byStatus: {
// // // // //         pending: 0,
// // // // //         processing: 0,
// // // // //         completed: 0,
// // // // //         cancelled: 0,
// // // // //       },
// // // // //       totalRevenue,
// // // // //     };

// // // // //     statusCounts.forEach((item) => {
// // // // //       stats.byStatus[item._id] = item.count;
// // // // //     });

// // // // //     // Get monthly request trends for the last 6 months with status breakdown
// // // // //     const sixMonthsAgo = new Date();
// // // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // // //     sixMonthsAgo.setDate(1);

// // // // //     const monthlyRequests = await Request.aggregate([
// // // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // // //       {
// // // // //         $group: {
// // // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// // // // //           count: { $sum: 1 },
// // // // //         },
// // // // //       },
// // // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // // //     ]);

// // // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // // //     const monthlyData = [];

// // // // //     for (let i = 0; i < 6; i++) {
// // // // //       const date = new Date();
// // // // //       date.setMonth(date.getMonth() - 5 + i);
// // // // //       date.setDate(1);
// // // // //       const month = monthNames[date.getMonth()];
// // // // //       const year = date.getFullYear();

// // // // //       const monthData = monthlyRequests.filter(
// // // // //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// // // // //       );

// // // // //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// // // // //       const byStatus = {
// // // // //         pending: 0,
// // // // //         processing: 0,
// // // // //         completed: 0,
// // // // //         cancelled: 0,
// // // // //       };

// // // // //       monthData.forEach((item) => {
// // // // //         byStatus[item._id.status] = item.count;
// // // // //       });

// // // // //       monthlyData.push({
// // // // //         month,
// // // // //         year,
// // // // //         count: totalCount,
// // // // //         byStatus,
// // // // //       });
// // // // //     }

// // // // //     // Get recent requests
// // // // //     const recentRequests = await Request.find()
// // // // //       .sort({ date: -1 })
// // // // //       .limit(5);

// // // // //     res.json({
// // // // //       stats,
// // // // //       recentRequests,
// // // // //       monthlyData,
// // // // //     });
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching request stats:", err.message);
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   GET api/requests/:id
// // // // // // @desc    Get request by ID
// // // // // // @access  Private (Admin only)
// // // // // router.get("/:id", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const request = await Request.findById(req.params.id);

// // // // //     if (!request) {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }

// // // // //     res.json(request);
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching request:", err.message);
// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   POST api/requests
// // // // // // @desc    Create a new request and associate with a user
// // // // // // @access  Public
// // // // // router.post("/", async (req, res) => {
// // // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // // //   try {
// // // // //     // Check if a user with this email already exists
// // // // //     let user = await User.findOne({ email });

// // // // //     if (!user) {
// // // // //       // Create a new user with a temporary password
// // // // //       const username = email.split("@")[0]; // Generate a username from the email
// // // // //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// // // // //       user = new User({
// // // // //         username,
// // // // //         email,
// // // // //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// // // // //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// // // // //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// // // // //         phone,
// // // // //         company,
// // // // //         role: "user",
// // // // //       });

// // // // //       await user.save();
// // // // //     }

// // // // //     // Create the request and link it to the user
// // // // //     const request = new Request({
// // // // //       name,
// // // // //       email,
// // // // //       phone,
// // // // //       company,
// // // // //       message,
// // // // //       products,
// // // // //       totalAmount,
// // // // //       userId: user._id, // Link the request to the user
// // // // //     });

// // // // //     await request.save();
// // // // //     res.status(201).json(request);
// // // // //   } catch (err) {
// // // // //     console.error("Error creating request:", err.message);
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   PUT api/requests/:id/status
// // // // // // @desc    Update request status and manage stock
// // // // // // @access  Private (Admin only)
// // // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // // //   const { status, note } = req.body;

// // // // //   try {
// // // // //     const request = await Request.findById(req.params.id);

// // // // //     if (!request) {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }

// // // // //     const previousStatus = request.status;
// // // // //     request.status = status;
// // // // //     if (note) request.notes = note;
// // // // //     request.updatedAt = Date.now();

// // // // //     // Stock Management Logic
// // // // //     if (previousStatus !== status) {
// // // // //       // Case 1: Status changes to "completed" (decrement stock)
// // // // //       if (status === "completed" && previousStatus !== "completed") {
// // // // //         for (const product of request.products) {
// // // // //           const productDoc = await Product.findOne({ model: product.id });
// // // // //           if (!productDoc) {
// // // // //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // // // //           }
// // // // //           const quantityToSubtract = Number(product.quantity) || 0;
// // // // //           const newStock = productDoc.stockQuantity - quantityToSubtract;
// // // // //           if (newStock < 0) {
// // // // //             return res.status(400).json({ message: `Insufficient stock for product ${productDoc.name}` });
// // // // //           }
// // // // //           productDoc.stockQuantity = newStock;
// // // // //           await productDoc.save();
// // // // //         }
// // // // //       }
// // // // //       // Case 2: Status changes from "completed" to another status (increment stock)
// // // // //       else if (previousStatus === "completed" && status !== "completed") {
// // // // //         for (const product of request.products) {
// // // // //           const productDoc = await Product.findOne({ model: product.id });
// // // // //           if (!productDoc) {
// // // // //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // // // //           }
// // // // //           const quantityToAdd = Number(product.quantity) || 0;
// // // // //           productDoc.stockQuantity += quantityToAdd;
// // // // //           await productDoc.save();
// // // // //         }
// // // // //       }
// // // // //       // Case 3: Status changes between pending/processing/cancelled (no stock change)
// // // // //       // No action needed
// // // // //     }

// // // // //     await request.save();
// // // // //     res.json(request);
// // // // //   } catch (err) {
// // // // //     console.error("Error updating request status:", err.message);
// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   PUT api/requests/:id/cancel
// // // // // // @desc    Cancel a request
// // // // // // @access  Private (Admin only)
// // // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // // //   const { reason } = req.body;

// // // // //   try {
// // // // //     const request = await Request.findById(req.params.id);

// // // // //     if (!request) {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }

// // // // //     if (request.status === "cancelled") {
// // // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // // //     }

// // // // //     const previousStatus = request.status;
// // // // //     request.status = "cancelled";
// // // // //     request.notes = reason || "Cancelled by admin";
// // // // //     request.updatedAt = Date.now();

// // // // //     // Stock Management Logic for cancellation
// // // // //     if (previousStatus === "completed") {
// // // // //       for (const product of request.products) {
// // // // //         const productDoc = await Product.findOne({ model: product.id });
// // // // //         if (!productDoc) {
// // // // //           return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // // // //         }
// // // // //         const quantityToAdd = Number(product.quantity) || 0;
// // // // //         productDoc.stockQuantity += quantityToAdd;
// // // // //         await productDoc.save();
// // // // //       }
// // // // //     }

// // // // //     await request.save();
// // // // //     res.json(request);
// // // // //   } catch (err) {
// // // // //     console.error("Error cancelling request:", err.message);
// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   PUT api/requests/:id
// // // // // // @desc    Update a request
// // // // // // @access  Private (Admin only)
// // // // // router.put("/:id", adminAuth, async (req, res) => {
// // // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // // //   try {
// // // // //     const request = await Request.findById(req.params.id);

// // // // //     if (!request) {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }

// // // // //     // Update fields
// // // // //     if (name) request.name = name;
// // // // //     if (email) request.email = email;
// // // // //     if (phone) request.phone = phone;
// // // // //     if (company) request.company = company;
// // // // //     if (message) request.message = message;
// // // // //     if (products) request.products = products;
// // // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // // //     if (status) request.status = status;
// // // // //     request.updatedAt = Date.now();

// // // // //     await request.save();
// // // // //     res.json(request);
// // // // //   } catch (err) {
// // // // //     console.error("Error updating request:", err.message);
// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // // @route   DELETE api/requests/:id
// // // // // // @desc    Delete a request
// // // // // // @access  Private (Admin only)
// // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const request = await Request.findById(req.params.id);

// // // // //     if (!request) {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }

// // // // //     await request.deleteOne();
// // // // //     res.json({ message: "Request removed" });
// // // // //   } catch (err) {
// // // // //     console.error("Error deleting request:", err.message);
// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Request not found" });
// // // // //     }
// // // // //     res.status(500).json({ message: "Server Error" });
// // // // //   }
// // // // // });

// // // // // module.exports = router;


// // // const express = require("express");
// // // const router = express.Router();
// // // const Request = require("../models/Request");
// // // const Product = require("../models/Product");
// // // const User = require("../models/User");
// // // const { adminAuth } = require("../middleware/auth");

// // // // @route   GET api/requests
// // // // @desc    Get all requests with filters
// // // // @access  Private (Admin only)
// // // router.get("/", adminAuth, async (req, res) => {
// // //   try {
// // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // //     const query = {};
// // //     if (status && status !== "all") {
// // //       query.status = status;
// // //     }
// // //     if (search) {
// // //       query.$or = [
// // //         { name: { $regex: search, $options: "i" } },
// // //         { email: { $regex: search, $options: "i" } },
// // //         { company: { $regex: search, $options: "i" } },
// // //       ];
// // //     }

// // //     const sortOptions = {};
// // //     if (sort === "newest") sortOptions.date = -1;
// // //     if (sort === "oldest") sortOptions.date = 1;

// // //     const requests = await Request.find(query)
// // //       .sort(sortOptions)
// // //       .skip((page - 1) * limit)
// // //       .limit(parseInt(limit));

// // //     const total = await Request.countDocuments(query);

// // //     res.json({
// // //       requests,
// // //       total,
// // //       totalPages: Math.ceil(total / limit),
// // //       currentPage: parseInt(page),
// // //     });
// // //   } catch (err) {
// // //     console.error("Error fetching requests:", err.message);
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   GET api/requests/stats
// // // // @desc    Get request statistics
// // // // @access  Private (Admin only)
// // // router.get("/stats", adminAuth, async (req, res) => {
// // //   try {
// // //     // Get counts by status
// // //     const statusCounts = await Request.aggregate([
// // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // //     ]);

// // //     // Get total revenue
// // //     const totalRevenueResult = await Request.aggregate([
// // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // //     ]);
// // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // //     // Format the status counts
// // //     const stats = {
// // //       total: await Request.countDocuments(),
// // //       byStatus: {
// // //         pending: 0,
// // //         processing: 0,
// // //         completed: 0,
// // //         cancelled: 0,
// // //       },
// // //       totalRevenue,
// // //     };

// // //     statusCounts.forEach((item) => {
// // //       stats.byStatus[item._id] = item.count;
// // //     });

// // //     // Get monthly request trends for the last 6 months with status breakdown
// // //     const sixMonthsAgo = new Date();
// // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // //     sixMonthsAgo.setDate(1);

// // //     const monthlyRequests = await Request.aggregate([
// // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // //       {
// // //         $group: {
// // //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// // //           count: { $sum: 1 },
// // //         },
// // //       },
// // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // //     ]);

// // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // //     const monthlyData = [];

// // //     for (let i = 0; i < 6; i++) {
// // //       const date = new Date();
// // //       date.setMonth(date.getMonth() - 5 + i);
// // //       date.setDate(1);
// // //       const month = monthNames[date.getMonth()];
// // //       const year = date.getFullYear();

// // //       const monthData = monthlyRequests.filter(
// // //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// // //       );

// // //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// // //       const byStatus = {
// // //         pending: 0,
// // //         processing: 0,
// // //         completed: 0,
// // //         cancelled: 0,
// // //       };

// // //       monthData.forEach((item) => {
// // //         byStatus[item._id.status] = item.count;
// // //       });

// // //       monthlyData.push({
// // //         month,
// // //         year,
// // //         count: totalCount,
// // //         byStatus,
// // //       });
// // //     }

// // //     // Get recent requests
// // //     const recentRequests = await Request.find()
// // //       .sort({ date: -1 })
// // //       .limit(5);

// // //     res.json({
// // //       stats,
// // //       recentRequests,
// // //       monthlyData,
// // //     });
// // //   } catch (err) {
// // //     console.error("Error fetching request stats:", err.message);
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   GET api/requests/:id
// // // // @desc    Get request by ID
// // // // @access  Private (Admin only)
// // // router.get("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const request = await Request.findById(req.params.id);

// // //     if (!request) {
// // //       return res.status(404).json({ message: "Request not found" });
// // //     }

// // //     res.json(request);
// // //   } catch (err) {
// // //     console.error("Error fetching request:", err.message);
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Invalid request ID format" });
// // //     }
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   POST api/requests
// // // // @desc    Create a new request and associate with a user
// // // // @access  Public
// // // router.post("/", async (req, res) => {
// // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // //   try {
// // //     // Check if a user with this email already exists
// // //     let user = await User.findOne({ email });

// // //     if (!user) {
// // //       // Create a new user with a temporary password
// // //       const username = email.split("@")[0]; // Generate a username from the email
// // //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// // //       user = new User({
// // //         username,
// // //         email,
// // //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// // //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// // //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// // //         phone,
// // //         company,
// // //         role: "user",
// // //       });

// // //       await user.save();
// // //     }

// // //     // Create the request and link it to the user
// // //     const request = new Request({
// // //       name,
// // //       email,
// // //       phone,
// // //       company,
// // //       message,
// // //       products,
// // //       totalAmount,
// // //       userId: user._id, // Link the request to the user
// // //     });

// // //     await request.save();
// // //     res.status(201).json(request);
// // //   } catch (err) {
// // //     console.error("Error creating request:", err.message);
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   PUT api/requests/:id/status
// // // // @desc    Update request status and manage stock
// // // // @access  Private (Admin only)
// // // router.put("/:id/status", adminAuth, async (req, res) => {
// // //   const { status, note } = req.body;

// // //   try {
// // //     const request = await Request.findById(req.params.id);

// // //     if (!request) {
// // //       return res.status(404).json({ message: "Request not found" });
// // //     }

// // //     const previousStatus = request.status;
// // //     request.status = status;
// // //     if (note) request.notes = note;
// // //     request.updatedAt = Date.now();

// // //     // Stock Management Logic
// // //     if (previousStatus !== status) {
// // //       // Case 1: Status changes to "completed" (decrement stock if not already adjusted)
// // //       if (status === "completed" && previousStatus !== "completed" && !request.stockAdjusted) {
// // //         for (const product of request.products) {
// // //           const productDoc = await Product.findOne({ model: product.id });
// // //           if (!productDoc) {
// // //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // //           }
// // //           const quantityToSubtract = Number(product.quantity) || 0;
// // //           const newStock = productDoc.stockQuantity - quantityToSubtract;
// // //           if (newStock < 0) {
// // //             return res.status(400).json({
// // //               message: `Insufficient stock for product "${productDoc.name}". Available: ${productDoc.stockQuantity}, Requested: ${quantityToSubtract}`,
// // //             });
// // //           }
// // //           productDoc.stockQuantity = newStock;
// // //           await productDoc.save();
// // //         }
// // //         request.stockAdjusted = true; // Mark stock as adjusted
// // //       }
// // //       // Case 2: Status changes from "completed" to another status (increment stock if adjusted)
// // //       else if (previousStatus === "completed" && status !== "completed" && request.stockAdjusted) {
// // //         for (const product of request.products) {
// // //           const productDoc = await Product.findOne({ model: product.id });
// // //           if (!productDoc) {
// // //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // //           }
// // //           const quantityToAdd = Number(product.quantity) || 0;
// // //           productDoc.stockQuantity += quantityToAdd;
// // //           await productDoc.save();
// // //         }
// // //         request.stockAdjusted = false; // Reset stock adjustment flag
// // //       }
// // //       // Case 3: Status changes between pending/processing/cancelled (no stock change)
// // //       // No action needed
// // //     }

// // //     await request.save();
// // //     res.json(request);
// // //   } catch (err) {
// // //     console.error("Error updating request status:", err.message);
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Invalid request ID format" });
// // //     }
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   PUT api/requests/:id/cancel
// // // // @desc    Cancel a request
// // // // @access  Private (Admin only)
// // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // //   const { reason } = req.body;

// // //   try {
// // //     const request = await Request.findById(req.params.id);

// // //     if (!request) {
// // //       return res.status(404).json({ message: "Request not found" });
// // //     }

// // //     if (request.status === "cancelled") {
// // //       return res.status(400).json({ message: "Request is already cancelled" });
// // //     }

// // //     const previousStatus = request.status;
// // //     request.status = "cancelled";
// // //     request.notes = reason || "Cancelled by admin";
// // //     request.updatedAt = Date.now();

// // //     // Stock Management Logic for cancellation
// // //     if (previousStatus === "completed" && request.stockAdjusted) {
// // //       for (const product of request.products) {
// // //         const productDoc = await Product.findOne({ model: product.id });
// // //         if (!productDoc) {
// // //           return res.status(404).json({ message: `Product with model ${product.id} not found` });
// // //         }
// // //         const quantityToAdd = Number(product.quantity) || 0;
// // //         productDoc.stockQuantity += quantityToAdd;
// // //         await productDoc.save();
// // //       }
// // //       request.stockAdjusted = false; // Reset stock adjustment flag
// // //     }

// // //     await request.save();
// // //     res.json(request);
// // //   } catch (err) {
// // //     console.error("Error cancelling request:", err.message);
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Invalid request ID format" });
// // //     }
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   PUT api/requests/:id
// // // // @desc    Update a request
// // // // @access  Private (Admin only)
// // // router.put("/:id", adminAuth, async (req, res) => {
// // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // //   try {
// // //     const request = await Request.findById(req.params.id);

// // //     if (!request) {
// // //       return res.status(404).json({ message: "Request not found" });
// // //     }

// // //     // Update fields
// // //     if (name) request.name = name;
// // //     if (email) request.email = email;
// // //     if (phone) request.phone = phone;
// // //     if (company) request.company = company;
// // //     if (message) request.message = message;
// // //     if (products) request.products = products;
// // //     if (totalAmount) request.totalAmount = totalAmount;
// // //     if (status) request.status = status;
// // //     request.updatedAt = Date.now();

// // //     await request.save();
// // //     res.json(request);
// // //   } catch (err) {
// // //     console.error("Error updating request:", err.message);
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Invalid request ID format" });
// // //     }
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // // @route   DELETE api/requests/:id
// // // // @desc    Delete a request
// // // // @access  Private (Admin only)
// // // router.delete("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const request = await Request.findById(req.params.id);

// // //     if (!request) {
// // //       return res.status(404).json({ message: "Request not found" });
// // //     }

// // //     await request.deleteOne();
// // //     res.json({ message: "Request removed" });
// // //   } catch (err) {
// // //     console.error("Error deleting request:", err.message);
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Invalid request ID format" });
// // //     }
// // //     res.status(500).json({ message: "Server Error" });
// // //   }
// // // });

// // // module.exports = router;


// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const Request = require("../models/Request");
// // // // const Product = require("../models/Product");
// // // // const User = require("../models/User");
// // // // const { adminAuth } = require("../middleware/auth");

// // // // // @route   GET api/requests
// // // // // @desc    Get all requests with filters
// // // // // @access  Private (Admin only)
// // // // router.get("/", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// // // //     const query = {};
// // // //     if (status && status !== "all") {
// // // //       query.status = status;
// // // //     }
// // // //     if (search) {
// // // //       query.$or = [
// // // //         { name: { $regex: search, $options: "i" } },
// // // //         { email: { $regex: search, $options: "i" } },
// // // //         { company: { $regex: search, $options: "i" } },
// // // //       ];
// // // //     }

// // // //     const sortOptions = {};
// // // //     if (sort === "newest") sortOptions.date = -1;
// // // //     if (sort === "oldest") sortOptions.date = 1;

// // // //     const requests = await Request.find(query)
// // // //       .sort(sortOptions)
// // // //       .skip((page - 1) * limit)
// // // //       .limit(parseInt(limit));

// // // //     const total = await Request.countDocuments(query);

// // // //     res.json({
// // // //       requests,
// // // //       total,
// // // //       totalPages: Math.ceil(total / limit),
// // // //       currentPage: parseInt(page),
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error fetching requests:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/requests/stats
// // // // // @desc    Get request statistics
// // // // // @access  Private (Admin only)
// // // // router.get("/stats", adminAuth, async (req, res) => {
// // // //   try {
// // // //     // Get counts by status
// // // //     const statusCounts = await Request.aggregate([
// // // //       { $group: { _id: "$status", count: { $sum: 1 } } },
// // // //     ]);

// // // //     // Get total revenue
// // // //     const totalRevenueResult = await Request.aggregate([
// // // //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// // // //     ]);
// // // //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// // // //     // Format the status counts
// // // //     const stats = {
// // // //       total: await Request.countDocuments(),
// // // //       byStatus: {
// // // //         pending: 0,
// // // //         processing: 0,
// // // //         completed: 0,
// // // //         cancelled: 0,
// // // //       },
// // // //       totalRevenue,
// // // //     };

// // // //     statusCounts.forEach((item) => {
// // // //       stats.byStatus[item._id] = item.count;
// // // //     });

// // // //     // Get monthly request trends for the last 6 months with status breakdown
// // // //     const sixMonthsAgo = new Date();
// // // //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// // // //     sixMonthsAgo.setDate(1);

// // // //     const monthlyRequests = await Request.aggregate([
// // // //       { $match: { date: { $gte: sixMonthsAgo } } },
// // // //       {
// // // //         $group: {
// // // //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// // // //           count: { $sum: 1 },
// // // //         },
// // // //       },
// // // //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// // // //     ]);

// // // //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// // // //     const monthlyData = [];

// // // //     for (let i = 0; i < 6; i++) {
// // // //       const date = new Date();
// // // //       date.setMonth(date.getMonth() - 5 + i);
// // // //       date.setDate(1);
// // // //       const month = monthNames[date.getMonth()];
// // // //       const year = date.getFullYear();

// // // //       const monthData = monthlyRequests.filter(
// // // //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// // // //       );

// // // //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// // // //       const byStatus = {
// // // //         pending: 0,
// // // //         processing: 0,
// // // //         completed: 0,
// // // //         cancelled: 0,
// // // //       };

// // // //       monthData.forEach((item) => {
// // // //         byStatus[item._id.status] = item.count;
// // // //       });

// // // //       monthlyData.push({
// // // //         month,
// // // //         year,
// // // //         count: totalCount,
// // // //         byStatus,
// // // //       });
// // // //     }

// // // //     // Get recent requests
// // // //     const recentRequests = await Request.find()
// // // //       .sort({ date: -1 })
// // // //       .limit(5);

// // // //     res.json({
// // // //       stats,
// // // //       recentRequests,
// // // //       monthlyData,
// // // //     });
// // // //   } catch (err) {
// // // //     console.error("Error fetching request stats:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   GET api/requests/:id
// // // // // @desc    Get request by ID
// // // // // @access  Private (Admin only)
// // // // router.get("/:id", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const request = await Request.findById(req.params.id);

// // // //     if (!request) {
// // // //       return res.status(404).json({ message: "Request not found" });
// // // //     }

// // // //     res.json(request);
// // // //   } catch (err) {
// // // //     console.error("Error fetching request:", err.message);
// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Invalid request ID format" });
// // // //     }
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   POST api/requests
// // // // // @desc    Create a new request and associate with a user
// // // // // @access  Public
// // // // router.post("/", async (req, res) => {
// // // //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// // // //   try {
// // // //     // Check if a user with this email already exists
// // // //     let user = await User.findOne({ email });

// // // //     if (!user) {
// // // //       // Create a new user with a temporary password
// // // //       const username = email.split("@")[0]; // Generate a username from the email
// // // //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// // // //       user = new User({
// // // //         username,
// // // //         email,
// // // //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// // // //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// // // //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// // // //         phone,
// // // //         company,
// // // //         role: "user",
// // // //       });

// // // //       await user.save();
// // // //     }

// // // //     // Validate products before creating the request
// // // //     for (const product of products) {
// // // //       const productDoc = await Product.findOne({ model: product.id });
// // // //       if (!productDoc) {
// // // //         return res.status(400).json({ message: `Product with model ${product.id} not found` });
// // // //       }
// // // //     }

// // // //     // Create the request and link it to the user
// // // //     const request = new Request({
// // // //       name,
// // // //       email,
// // // //       phone,
// // // //       company,
// // // //       message,
// // // //       products,
// // // //       totalAmount,
// // // //       userId: user._id, // Link the request to the user
// // // //     });

// // // //     await request.save();
// // // //     res.status(201).json(request);
// // // //   } catch (err) {
// // // //     console.error("Error creating request:", err.message);
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/requests/:id/status
// // // // // @desc    Update request status and manage stock
// // // // // @access  Private (Admin only)
// // // // router.put("/:id/status", adminAuth, async (req, res) => {
// // // //   const { status, note } = req.body;

// // // //   try {
// // // //     const request = await Request.findById(req.params.id);

// // // //     if (!request) {
// // // //       return res.status(404).json({ message: "Request not found" });
// // // //     }

// // // //     const previousStatus = request.status;
// // // //     request.status = status;
// // // //     if (note) request.notes = note;
// // // //     request.updatedAt = Date.now();

// // // //     // Stock Management Logic
// // // //     if (previousStatus !== status) {
// // // //       // Case 1: Status changes to "completed" (decrement stock if not already adjusted)
// // // //       if (status === "completed" && previousStatus !== "completed" && !request.stockAdjusted) {
// // // //         for (const product of request.products) {
// // // //           const productDoc = await Product.findOne({ model: product.id });
// // // //           if (!productDoc) {
// // // //             console.error(`Product not found for model: ${product.id} in request: ${request._id}`);
// // // //             return res.status(404).json({
// // // //               message: `Product with model ${product.id} not found. This product may have been deleted.`
// // // //             });
// // // //           }
// // // //           const quantityToSubtract = Number(product.quantity) || 0;
// // // //           const newStock = productDoc.stockQuantity - quantityToSubtract;
// // // //           if (newStock < 0) {
// // // //             return res.status(400).json({
// // // //               message: `Insufficient stock for product "${productDoc.name}". Available: ${productDoc.stockQuantity}, Requested: ${quantityToSubtract}`,
// // // //             });
// // // //           }
// // // //           productDoc.stockQuantity = newStock;
// // // //           await productDoc.save();
// // // //         }
// // // //         request.stockAdjusted = true; // Mark stock as adjusted
// // // //       }
// // // //       // Case 2: Status changes from "completed" to another status (increment stock if adjusted)
// // // //       else if (previousStatus === "completed" && status !== "completed" && request.stockAdjusted) {
// // // //         for (const product of request.products) {
// // // //           const productDoc = await Product.findOne({ model: product.id });
// // // //           if (!productDoc) {
// // // //             console.error(`Product not found for model: ${product.id} in request: ${request._id}`);
// // // //             return res.status(404).json({
// // // //               message: `Product with model ${product.id} not found. This product may have been deleted.`
// // // //             });
// // // //           }
// // // //           const quantityToAdd = Number(product.quantity) || 0;
// // // //           productDoc.stockQuantity += quantityToAdd;
// // // //           await productDoc.save();
// // // //         }
// // // //         request.stockAdjusted = false; // Reset stock adjustment flag
// // // //       }
// // // //       // Case 3: Status changes between pending/processing/cancelled (no stock change)
// // // //       // No action needed
// // // //     }

// // // //     await request.save();
// // // //     res.json(request);
// // // //   } catch (err) {
// // // //     console.error("Error updating request status:", err.message);
// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Invalid request ID format" });
// // // //     }
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/requests/:id/cancel
// // // // // @desc    Cancel a request
// // // // // @access  Private (Admin only)
// // // // router.put("/:id/cancel", adminAuth, async (req, res) => {
// // // //   const { reason } = req.body;

// // // //   try {
// // // //     const request = await Request.findById(req.params.id);

// // // //     if (!request) {
// // // //       return res.status(404).json({ message: "Request not found" });
// // // //     }

// // // //     if (request.status === "cancelled") {
// // // //       return res.status(400).json({ message: "Request is already cancelled" });
// // // //     }

// // // //     const previousStatus = request.status;
// // // //     request.status = "cancelled";
// // // //     request.notes = reason || "Cancelled by admin";
// // // //     request.updatedAt = Date.now();

// // // //     // Stock Management Logic for cancellation
// // // //     if (previousStatus === "completed" && request.stockAdjusted) {
// // // //       for (const product of request.products) {
// // // //         const productDoc = await Product.findOne({ model: product.id });
// // // //         if (!productDoc) {
// // // //           console.error(`Product not found for model: ${product.id} in request: ${request._id}`);
// // // //           return res.status(404).json({
// // // //             message: `Product with model ${product.id} not found. This product may have been deleted.`
// // // //           });
// // // //         }
// // // //         const quantityToAdd = Number(product.quantity) || 0;
// // // //         productDoc.stockQuantity += quantityToAdd;
// // // //         await productDoc.save();
// // // //       }
// // // //       request.stockAdjusted = false; // Reset stock adjustment flag
// // // //     }

// // // //     await request.save();
// // // //     res.json(request);
// // // //   } catch (err) {
// // // //     console.error("Error cancelling request:", err.message);
// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Invalid request ID format" });
// // // //     }
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   PUT api/requests/:id
// // // // // @desc    Update a request
// // // // // @access  Private (Admin only)
// // // // router.put("/:id", adminAuth, async (req, res) => {
// // // //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// // // //   try {
// // // //     const request = await Request.findById(req.params.id);

// // // //     if (!request) {
// // // //       return res.status(404).json({ message: "Request not found" });
// // // //     }

// // // //     // Validate products if provided
// // // //     if (products) {
// // // //       for (const product of products) {
// // // //         const productDoc = await Product.findOne({ model: product.id });
// // // //         if (!productDoc) {
// // // //           return res.status(400).json({ message: `Product with model ${product.id} not found` });
// // // //         }
// // // //       }
// // // //     }

// // // //     // Update fields
// // // //     if (name) request.name = name;
// // // //     if (email) request.email = email;
// // // //     if (phone) request.phone = phone;
// // // //     if (company) request.company = company;
// // // //     if (message) request.message = message;
// // // //     if (products) request.products = products;
// // // //     if (totalAmount) request.totalAmount = totalAmount;
// // // //     if (status) request.status = status;
// // // //     request.updatedAt = Date.now();

// // // //     await request.save();
// // // //     res.json(request);
// // // //   } catch (err) {
// // // //     console.error("Error updating request:", err.message);
// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Invalid request ID format" });
// // // //     }
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // // @route   DELETE api/requests/:id
// // // // // @desc    Delete a request
// // // // // @access  Private (Admin only)
// // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const request = await Request.findById(req.params.id);

// // // //     if (!request) {
// // // //       return res.status(404).json({ message: "Request not found" });
// // // //     }

// // // //     await request.deleteOne();
// // // //     res.json({ message: "Request removed" });
// // // //   } catch (err) {
// // // //     console.error("Error deleting request:", err.message);
// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Invalid request ID format" });
// // // //     }
// // // //     res.status(500).json({ message: "Server Error" });
// // // //   }
// // // // });

// // // // module.exports = router;


// // const express = require("express");
// // const router = express.Router();
// // const Request = require("../models/Request");
// // const Product = require("../models/Product");
// // const User = require("../models/User");
// // const { adminAuth } = require("../middleware/auth");

// // // @route   GET api/requests
// // // @desc    Get all requests with filters
// // // @access  Private (Admin only)
// // router.get("/", adminAuth, async (req, res) => {
// //   try {
// //     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

// //     const query = {};
// //     if (status && status !== "all") {
// //       query.status = status;
// //     }
// //     if (search) {
// //       query.$or = [
// //         { name: { $regex: search, $options: "i" } },
// //         { email: { $regex: search, $options: "i" } },
// //         { company: { $regex: search, $options: "i" } },
// //       ];
// //     }

// //     const sortOptions = {};
// //     if (sort === "newest") sortOptions.date = -1;
// //     if (sort === "oldest") sortOptions.date = 1;

// //     const requests = await Request.find(query)
// //       .sort(sortOptions)
// //       .skip((page - 1) * limit)
// //       .limit(parseInt(limit));

// //     const total = await Request.countDocuments(query);

// //     res.json({
// //       requests,
// //       total,
// //       totalPages: Math.ceil(total / limit),
// //       currentPage: parseInt(page),
// //     });
// //   } catch (err) {
// //     console.error("Error fetching requests:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/requests/stats
// // // @desc    Get request statistics
// // // @access  Private (Admin only)
// // router.get("/stats", adminAuth, async (req, res) => {
// //   try {
// //     // Get counts by status
// //     const statusCounts = await Request.aggregate([
// //       { $group: { _id: "$status", count: { $sum: 1 } } },
// //     ]);

// //     // Get total revenue
// //     const totalRevenueResult = await Request.aggregate([
// //       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
// //     ]);
// //     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

// //     // Format the status counts
// //     const stats = {
// //       total: await Request.countDocuments(),
// //       byStatus: {
// //         pending: 0,
// //         processing: 0,
// //         completed: 0,
// //         cancelled: 0,
// //       },
// //       totalRevenue,
// //     };

// //     statusCounts.forEach((item) => {
// //       stats.byStatus[item._id] = item.count;
// //     });

// //     // Get monthly request trends for the last 6 months with status breakdown
// //     const sixMonthsAgo = new Date();
// //     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
// //     sixMonthsAgo.setDate(1);

// //     const monthlyRequests = await Request.aggregate([
// //       { $match: { date: { $gte: sixMonthsAgo } } },
// //       {
// //         $group: {
// //           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
// //           count: { $sum: 1 },
// //         },
// //       },
// //       { $sort: { "_id.year": 1, "_id.month": 1 } },
// //     ]);

// //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// //     const monthlyData = [];

// //     for (let i = 0; i < 6; i++) {
// //       const date = new Date();
// //       date.setMonth(date.getMonth() - 5 + i);
// //       date.setDate(1);
// //       const month = monthNames[date.getMonth()];
// //       const year = date.getFullYear();

// //       const monthData = monthlyRequests.filter(
// //         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
// //       );

// //       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
// //       const byStatus = {
// //         pending: 0,
// //         processing: 0,
// //         completed: 0,
// //         cancelled: 0,
// //       };

// //       monthData.forEach((item) => {
// //         byStatus[item._id.status] = item.count;
// //       });

// //       monthlyData.push({
// //         month,
// //         year,
// //         count: totalCount,
// //         byStatus,
// //       });
// //     }

// //     // Get recent requests
// //     const recentRequests = await Request.find()
// //       .sort({ date: -1 })
// //       .limit(5);

// //     res.json({
// //       stats,
// //       recentRequests,
// //       monthlyData,
// //     });
// //   } catch (err) {
// //     console.error("Error fetching request stats:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   GET api/requests/:id
// // // @desc    Get request by ID
// // // @access  Private (Admin only)
// // router.get("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const request = await Request.findById(req.params.id);

// //     if (!request) {
// //       return res.status(404).json({ message: "Request not found" });
// //     }

// //     res.json(request);
// //   } catch (err) {
// //     console.error("Error fetching request:", err.message);
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Invalid request ID format" });
// //     }
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   POST api/requests
// // // @desc    Create a new request and associate with a user
// // // @access  Public
// // router.post("/", async (req, res) => {
// //   const { name, email, phone, company, message, products, totalAmount } = req.body;

// //   try {
// //     // Check if a user with this email already exists
// //     let user = await User.findOne({ email });

// //     if (!user) {
// //       // Create a new user with a temporary password
// //       const username = email.split("@")[0]; // Generate a username from the email
// //       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

// //       user = new User({
// //         username,
// //         email,
// //         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
// //         firstName: name.split(" ")[0] || "", // Take first word as firstName
// //         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
// //         phone,
// //         company,
// //         role: "user",
// //       });

// //       await user.save();
// //     }

// //     // Create the request and link it to the user
// //     const request = new Request({
// //       name,
// //       email,
// //       phone,
// //       company,
// //       message,
// //       products,
// //       totalAmount,
// //       userId: user._id, // Link the request to the user
// //     });

// //     await request.save();
// //     res.status(201).json(request);
// //   } catch (err) {
// //     console.error("Error creating request:", err.message);
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/requests/:id/status
// // // @desc    Update request status and manage stock
// // // @access  Private (Admin only)
// // router.put("/:id/status", adminAuth, async (req, res) => {
// //   const { status, note } = req.body;

// //   try {
// //     const request = await Request.findById(req.params.id);

// //     if (!request) {
// //       return res.status(404).json({ message: "Request not found" });
// //     }

// //     const previousStatus = request.status;

// //     // If status isn't changing, just update the note and save
// //     if (previousStatus === status) {
// //       if (note) request.notes = note;
// //       request.updatedAt = Date.now();
// //       await request.save();
// //       return res.json(request);
// //     }

// //     // Stock Management Logic
// //     if (previousStatus !== status) {
// //       // Case 1: Status changes to "completed" (decrement stock if not already adjusted)
// //       if (status === "completed" && previousStatus !== "completed" && !request.stockAdjusted) {
// //         // Step 1: Validate stock for all products before making any changes
// //         const stockIssues = [];
// //         const productsToUpdate = [];

// //         for (const product of request.products) {
// //           const productDoc = await Product.findOne({ model: product.id });
// //           if (!productDoc) {
// //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// //           }

// //           const quantityToSubtract = Number(product.quantity) || 0;
// //           const newStock = productDoc.stockQuantity - quantityToSubtract;

// //           if (newStock < 0) {
// //             stockIssues.push({
// //               name: productDoc.name,
// //               available: productDoc.stockQuantity,
// //               requested: quantityToSubtract,
// //             });
// //           } else {
// //             productsToUpdate.push({ productDoc, quantityToSubtract });
// //           }
// //         }

// //         // Step 2: If there are stock issues, return an error with details
// //         if (stockIssues.length > 0) {
// //           const errorMessage = stockIssues
// //             .map((issue) => `Insufficient stock for product "${issue.name}". Available: ${issue.available}, Requested: ${issue.requested}`)
// //             .join("; ");
// //           return res.status(400).json({ message: errorMessage });
// //         }

// //         // Step 3: If all stock checks pass, update stock for all products
// //         for (const { productDoc, quantityToSubtract } of productsToUpdate) {
// //           productDoc.stockQuantity -= quantityToSubtract;
// //           await productDoc.save();
// //         }

// //         request.stockAdjusted = true; // Mark stock as adjusted
// //       }
// //       // Case 2: Status changes from "completed" to another status (increment stock if adjusted)
// //       else if (previousStatus === "completed" && status !== "completed" && request.stockAdjusted) {
// //         for (const product of request.products) {
// //           const productDoc = await Product.findOne({ model: product.id });
// //           if (!productDoc) {
// //             return res.status(404).json({ message: `Product with model ${product.id} not found` });
// //           }
// //           const quantityToAdd = Number(product.quantity) || 0;
// //           productDoc.stockQuantity += quantityToAdd;
// //           await productDoc.save();
// //         }
// //         request.stockAdjusted = false; // Reset stock adjustment flag
// //       }
// //       // Case 3: Status changes between pending/processing/cancelled (no stock change)
// //       // No action needed
// //     }

// //     // Update status and note after stock management
// //     request.status = status;
// //     if (note) request.notes = note;
// //     request.updatedAt = Date.now();

// //     await request.save();
// //     res.json(request);
// //   } catch (err) {
// //     console.error("Error updating request status:", err.message);
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Invalid request ID format" });
// //     }
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/requests/:id/cancel
// // // @desc    Cancel a request
// // // @access  Private (Admin only)
// // router.put("/:id/cancel", adminAuth, async (req, res) => {
// //   const { reason } = req.body;

// //   try {
// //     const request = await Request.findById(req.params.id);

// //     if (!request) {
// //       return res.status(404).json({ message: "Request not found" });
// //     }

// //     if (request.status === "cancelled") {
// //       return res.status(400).json({ message: "Request is already cancelled" });
// //     }

// //     const previousStatus = request.status;
// //     request.status = "cancelled";
// //     request.notes = reason || "Cancelled by admin";
// //     request.updatedAt = Date.now();

// //     // Stock Management Logic for cancellation
// //     if (previousStatus === "completed" && request.stockAdjusted) {
// //       for (const product of request.products) {
// //         const productDoc = await Product.findOne({ model: product.id });
// //         if (!productDoc) {
// //           return res.status(404).json({ message: `Product with model ${product.id} not found` });
// //         }
// //         const quantityToAdd = Number(product.quantity) || 0;
// //         productDoc.stockQuantity += quantityToAdd;
// //         await productDoc.save();
// //       }
// //       request.stockAdjusted = false; // Reset stock adjustment flag
// //     }

// //     await request.save();
// //     res.json(request);
// //   } catch (err) {
// //     console.error("Error cancelling request:", err.message);
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Invalid request ID format" });
// //     }
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   PUT api/requests/:id
// // // @desc    Update a request
// // // @access  Private (Admin only)
// // router.put("/:id", adminAuth, async (req, res) => {
// //   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

// //   try {
// //     const request = await Request.findById(req.params.id);

// //     if (!request) {
// //       return res.status(404).json({ message: "Request not found" });
// //     }

// //     // Update fields
// //     if (name) request.name = name;
// //     if (email) request.email = email;
// //     if (phone) request.phone = phone;
// //     if (company) request.company = company;
// //     if (message) request.message = message;
// //     if (products) request.products = products;
// //     if (totalAmount) request.totalAmount = totalAmount;
// //     if (status) request.status = status;
// //     request.updatedAt = Date.now();

// //     await request.save();
// //     res.json(request);
// //   } catch (err) {
// //     console.error("Error updating request:", err.message);
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Invalid request ID format" });
// //     }
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // // @route   DELETE api/requests/:id
// // // @desc    Delete a request
// // // @access  Private (Admin only)
// // router.delete("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const request = await Request.findById(req.params.id);

// //     if (!request) {
// //       return res.status(404).json({ message: "Request not found" });
// //     }

// //     await request.deleteOne();
// //     res.json({ message: "Request removed" });
// //   } catch (err) {
// //     console.error("Error deleting request:", err.message);
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Invalid request ID format" });
// //     }
// //     res.status(500).json({ message: "Server Error" });
// //   }
// // });

// // module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Request = require("../models/Request");
// const Product = require("../models/Product");
// const User = require("../models/User");
// const { adminAuth } = require("../middleware/auth");

// // @route   GET api/requests
// // @desc    Get all requests with filters
// // @access  Private (Admin only)
// router.get("/", adminAuth, async (req, res) => {
//   try {
//     const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

//     const query = {};
//     if (status && status !== "all") {
//       query.status = status;
//     }
//     if (search) {
//       query.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { email: { $regex: search, $options: "i" } },
//         { company: { $regex: search, $options: "i" } },
//       ];
//     }

//     const sortOptions = {};
//     if (sort === "newest") sortOptions.date = -1;
//     if (sort === "oldest") sortOptions.date = 1;

//     const requests = await Request.find(query)
//       .sort(sortOptions)
//       .skip((page - 1) * limit)
//       .limit(parseInt(limit));

//     const total = await Request.countDocuments(query);

//     res.json({
//       requests,
//       total,
//       totalPages: Math.ceil(total / limit),
//       currentPage: parseInt(page),
//     });
//   } catch (err) {
//     console.error("Error fetching requests:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/requests/stats
// // @desc    Get request statistics
// // @access  Private (Admin only)
// router.get("/stats", adminAuth, async (req, res) => {
//   try {
//     // Get counts by status
//     const statusCounts = await Request.aggregate([
//       { $group: { _id: "$status", count: { $sum: 1 } } },
//     ]);

//     // Get total revenue
//     const totalRevenueResult = await Request.aggregate([
//       { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
//     ]);
//     const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

//     // Format the status counts
//     const stats = {
//       total: await Request.countDocuments(),
//       byStatus: {
//         pending: 0,
//         processing: 0,
//         completed: 0,
//         cancelled: 0,
//       },
//       totalRevenue,
//     };

//     statusCounts.forEach((item) => {
//       stats.byStatus[item._id] = item.count;
//     });

//     // Get monthly request trends for the last 6 months with status breakdown
//     const sixMonthsAgo = new Date();
//     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
//     sixMonthsAgo.setDate(1);

//     const monthlyRequests = await Request.aggregate([
//       { $match: { date: { $gte: sixMonthsAgo } } },
//       {
//         $group: {
//           _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
//           count: { $sum: 1 },
//         },
//       },
//       { $sort: { "_id.year": 1, "_id.month": 1 } },
//     ]);

//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     const monthlyData = [];

//     for (let i = 0; i < 6; i++) {
//       const date = new Date();
//       date.setMonth(date.getMonth() - 5 + i);
//       date.setDate(1);
//       const month = monthNames[date.getMonth()];
//       const year = date.getFullYear();

//       const monthData = monthlyRequests.filter(
//         (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
//       );

//       const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
//       const byStatus = {
//         pending: 0,
//         processing: 0,
//         completed: 0,
//         cancelled: 0,
//       };

//       monthData.forEach((item) => {
//         byStatus[item._id.status] = item.count;
//       });

//       monthlyData.push({
//         month,
//         year,
//         count: totalCount,
//         byStatus,
//       });
//     }

//     // Get recent requests
//     const recentRequests = await Request.find()
//       .sort({ date: -1 })
//       .limit(5);

//     res.json({
//       stats,
//       recentRequests,
//       monthlyData,
//     });
//   } catch (err) {
//     console.error("Error fetching request stats:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   GET api/requests/:id
// // @desc    Get request by ID
// // @access  Private (Admin only)
// router.get("/:id", adminAuth, async (req, res) => {
//   try {
//     const request = await Request.findById(req.params.id);

//     if (!request) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     res.json(request);
//   } catch (err) {
//     console.error("Error fetching request:", err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Invalid request ID format" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   POST api/requests
// // @desc    Create a new request and associate with a user
// // @access  Public
// router.post("/", async (req, res) => {
//   const { name, email, phone, company, message, products, totalAmount } = req.body;

//   try {
//     // Check if a user with this email already exists
//     let user = await User.findOne({ email });

//     if (!user) {
//       // Create a new user with a temporary password
//       const username = email.split("@")[0]; // Generate a username from the email
//       const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

//       user = new User({
//         username,
//         email,
//         password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
//         firstName: name.split(" ")[0] || "", // Take first word as firstName
//         lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
//         phone,
//         company,
//         role: "user",
//       });

//       await user.save();
//     }

//     // Create the request and link it to the user
//     const request = new Request({
//       name,
//       email,
//       phone,
//       company,
//       message,
//       products,
//       totalAmount,
//       userId: user._id, // Link the request to the user
//     });

//     await request.save();
//     res.status(201).json(request);
//   } catch (err) {
//     console.error("Error creating request:", err.message);
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/requests/:id/status
// // @desc    Update request status and manage stock
// // @access  Private (Admin only)
// router.put("/:id/status", adminAuth, async (req, res) => {
//   const { status, note } = req.body;

//   try {
//     const request = await Request.findById(req.params.id);

//     if (!request) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     const previousStatus = request.status;

//     // If status isn't changing, just update the note and save
//     if (previousStatus === status) {
//       if (note) request.notes = note;
//       request.updatedAt = Date.now();
//       await request.save();
//       return res.json(request);
//     }

//     // Stock Management Logic
//     if (previousStatus !== status) {
//       // Case 1: Status changes to "completed" (decrement stock if not already adjusted)
//       if (status === "completed" && previousStatus !== "completed" && !request.stockAdjusted) {
//         // Step 1: Validate stock for all products before making any changes
//         const stockIssues = [];
//         const productsToUpdate = [];

//         for (const product of request.products) {
//           const productDoc = await Product.findById(product.id);
//           if (!productDoc) {
//             return res.status(404).json({ message: `Product with ID ${product.id} not found` });
//           }

//           const quantityToSubtract = Number(product.quantity) || 0;
//           const newStock = productDoc.stockQuantity - quantityToSubtract;

//           if (newStock < 0) {
//             stockIssues.push({
//               name: productDoc.name,
//               available: productDoc.stockQuantity,
//               requested: quantityToSubtract,
//             });
//           } else {
//             productsToUpdate.push({ productDoc, quantityToSubtract });
//           }
//         }

//         // Step 2: If there are stock issues, return an error with details
//         if (stockIssues.length > 0) {
//           const errorMessage = stockIssues
//             .map((issue) => `Insufficient stock for product "${issue.name}". Available: ${issue.available}, Requested: ${issue.requested}`)
//             .join("; ");
//           return res.status(400).json({ message: errorMessage });
//         }

//         // Step 3: If all stock checks pass, update stock for all products
//         for (const { productDoc, quantityToSubtract } of productsToUpdate) {
//           productDoc.stockQuantity -= quantityToSubtract;
//           await productDoc.save();
//         }

//         request.stockAdjusted = true; // Mark stock as adjusted
//       }
//       // Case 2: Status changes from "completed" to another status (increment stock if adjusted)
//       else if (previousStatus === "completed" && status !== "completed" && request.stockAdjusted) {
//         for (const product of request.products) {
//           const productDoc = await Product.findById(product.id);
//           if (!productDoc) {
//             return res.status(404).json({ message: `Product with ID ${product.id} not found` });
//           }
//           const quantityToAdd = Number(product.quantity) || 0;
//           productDoc.stockQuantity += quantityToAdd;
//           await productDoc.save();
//         }
//         request.stockAdjusted = false; // Reset stock adjustment flag
//       }
//       // Case 3: Status changes between pending/processing/cancelled (no stock change)
//       // No action needed
//     }

//     // Update status and note after stock management
//     request.status = status;
//     if (note) request.notes = note;
//     request.updatedAt = Date.now();

//     await request.save();
//     res.json(request);
//   } catch (err) {
//     console.error("Error updating request status:", err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Invalid request ID format" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/requests/:id/cancel
// // @desc    Cancel a request
// // @access  Private (Admin only)
// router.put("/:id/cancel", adminAuth, async (req, res) => {
//   const { reason } = req.body;

//   try {
//     const request = await Request.findById(req.params.id);

//     if (!request) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     if (request.status === "cancelled") {
//       return res.status(400).json({ message: "Request is already cancelled" });
//     }

//     const previousStatus = request.status;
//     request.status = "cancelled";
//     request.notes = reason || "Cancelled by admin";
//     request.updatedAt = Date.now();

//     // Stock Management Logic for cancellation
//     if (previousStatus === "completed" && request.stockAdjusted) {
//       for (const product of request.products) {
//         const productDoc = await Product.findById(product.id);
//         if (!productDoc) {
//           return res.status(404).json({ message: `Product with ID ${product.id} not found` });
//         }
//         const quantityToAdd = Number(product.quantity) || 0;
//         productDoc.stockQuantity += quantityToAdd;
//         await productDoc.save();
//       }
//       request.stockAdjusted = false; // Reset stock adjustment flag
//     }

//     await request.save();
//     res.json(request);
//   } catch (err) {
//     console.error("Error cancelling request:", err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Invalid request ID format" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   PUT api/requests/:id
// // @desc    Update a request
// // @access  Private (Admin only)
// router.put("/:id", adminAuth, async (req, res) => {
//   const { name, email, phone, company, message, products, totalAmount, status } = req.body;

//   try {
//     const request = await Request.findById(req.params.id);

//     if (!request) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     // Update fields
//     if (name) request.name = name;
//     if (email) request.email = email;
//     if (phone) request.phone = phone;
//     if (company) request.company = company;
//     if (message) request.message = message;
//     if (products) request.products = products;
//     if (totalAmount) request.totalAmount = totalAmount;
//     if (status) request.status = status;
//     request.updatedAt = Date.now();

//     await request.save();
//     res.json(request);
//   } catch (err) {
//     console.error("Error updating request:", err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Invalid request ID format" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// // @route   DELETE api/requests/:id
// // @desc    Delete a request
// // @access  Private (Admin only)
// router.delete("/:id", adminAuth, async (req, res) => {
//   try {
//     const request = await Request.findById(req.params.id);

//     if (!request) {
//       return res.status(404).json({ message: "Request not found" });
//     }

//     await request.deleteOne();
//     res.json({ message: "Request removed" });
//   } catch (err) {
//     console.error("Error deleting request:", err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Invalid request ID format" });
//     }
//     res.status(500).json({ message: "Server Error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Request = require("../models/Request");
const Product = require("../models/Product");
const User = require("../models/User");
const { adminAuth } = require("../middleware/auth");

// @route   GET api/requests
// @desc    Get all requests with filters
// @access  Private (Admin only)
router.get("/", adminAuth, async (req, res) => {
  try {
    const { page = 1, limit = 10, status, sort = "newest", search } = req.query;

    const query = {};
    if (status && status !== "all") {
      query.status = status;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
      ];
    }

    const sortOptions = {};
    if (sort === "newest") sortOptions.date = -1;
    if (sort === "oldest") sortOptions.date = 1;

    const requests = await Request.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Request.countDocuments(query);

    res.json({
      requests,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error("Error fetching requests:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/requests/stats
// @desc    Get request statistics
// @access  Private (Admin only)
router.get("/stats", adminAuth, async (req, res) => {
  try {
    // Get counts by status
    const statusCounts = await Request.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    // Get total revenue
    const totalRevenueResult = await Request.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } },
    ]);
    const totalRevenue = totalRevenueResult[0]?.totalRevenue || 0;

    // Format the status counts
    const stats = {
      total: await Request.countDocuments(),
      byStatus: {
        pending: 0,
        processing: 0,
        completed: 0,
        cancelled: 0,
      },
      totalRevenue,
    };

    statusCounts.forEach((item) => {
      stats.byStatus[item._id] = item.count;
    });

    // Get monthly request trends for the last 6 months with status breakdown
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
    sixMonthsAgo.setDate(1);

    const monthlyRequests = await Request.aggregate([
      { $match: { date: { $gte: sixMonthsAgo } } },
      {
        $group: {
          _id: { month: { $month: "$date" }, year: { $year: "$date" }, status: "$status" },
          count: { $sum: 1 },
        },
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } },
    ]);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthlyData = [];

    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - 5 + i);
      date.setDate(1);
      const month = monthNames[date.getMonth()];
      const year = date.getFullYear();

      const monthData = monthlyRequests.filter(
        (item) => item._id.month === date.getMonth() + 1 && item._id.year === year
      );

      const totalCount = monthData.reduce((sum, item) => sum + item.count, 0);
      const byStatus = {
        pending: 0,
        processing: 0,
        completed: 0,
        cancelled: 0,
      };

      monthData.forEach((item) => {
        byStatus[item._id.status] = item.count;
      });

      monthlyData.push({
        month,
        year,
        count: totalCount,
        byStatus,
      });
    }

    // Get recent requests
    const recentRequests = await Request.find()
      .sort({ date: -1 })
      .limit(5);

    res.json({
      stats,
      recentRequests,
      monthlyData,
    });
  } catch (err) {
    console.error("Error fetching request stats:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   GET api/requests/:id
// @desc    Get request by ID
// @access  Private (Admin only)
router.get("/:id", adminAuth, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.json(request);
  } catch (err) {
    console.error("Error fetching request:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid request ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   POST api/requests
// @desc    Create a new request and associate with a user
// @access  Public
router.post("/", async (req, res) => {
  const { name, email, phone, company, message, products, totalAmount } = req.body;

  try {
    // Check if a user with this email already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user with a temporary password
      const username = email.split("@")[0]; // Generate a username from the email
      const temporaryPassword = "tempPassword123"; // In production, generate a random password and email it to the user

      user = new User({
        username,
        email,
        password: temporaryPassword, // Password will be hashed by the UserSchema pre-save hook
        firstName: name.split(" ")[0] || "", // Take first word as firstName
        lastName: name.split(" ").slice(1).join(" ") || "", // Rest as lastName
        phone,
        company,
        role: "user",
      });

      await user.save();
    }

    // Create the request and link it to the user
    const request = new Request({
      name,
      email,
      phone,
      company,
      message,
      products,
      totalAmount,
      userId: user._id, // Link the request to the user
    });

    await request.save();
    res.status(201).json(request);
  } catch (err) {
    console.error("Error creating request:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/requests/:id/status
// @desc    Update request status and manage stock
// @access  Private (Admin only)
router.put("/:id/status", adminAuth, async (req, res) => {
  const { status, note } = req.body;

  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    const previousStatus = request.status;

    // If status isn't changing, just update the note and save
    if (previousStatus === status) {
      if (note) request.notes = note;
      request.updatedAt = Date.now();
      await request.save();
      return res.json(request);
    }

    // Initialize stockAdjusted if undefined (for backward compatibility with older requests)
    if (typeof request.stockAdjusted === "undefined") {
      request.stockAdjusted = false;
    }

    // Stock Management Logic
    if (previousStatus !== status) {
      // Case 1: Status changes to "completed" (decrement stock if not already adjusted)
      if (status === "completed" && previousStatus !== "completed" && !request.stockAdjusted) {
        // Step 1: Validate stock for all products before making any changes
        const stockIssues = [];
        const productsToUpdate = [];

        for (const product of request.products) {
          const productDoc = await Product.findById(product.id);
          if (!productDoc) {
            return res.status(404).json({ message: `Product with ID ${product.id} not found` });
          }

          const quantityToSubtract = Number(product.quantity) || 0;
          const newStock = productDoc.stockQuantity - quantityToSubtract;

          if (newStock < 0) {
            stockIssues.push({
              name: productDoc.name,
              available: productDoc.stockQuantity,
              requested: quantityToSubtract,
            });
          } else {
            productsToUpdate.push({ productDoc, quantityToSubtract });
          }
        }

        // Step 2: If there are stock issues, return an error with details
        if (stockIssues.length > 0) {
          const errorMessage = stockIssues
            .map((issue) => `Insufficient stock for product "${issue.name}". Available: ${issue.available}, Requested: ${issue.requested}`)
            .join("; ");
          return res.status(400).json({ message: errorMessage });
        }

        // Step 3: If all stock checks pass, update stock for all products
        for (const { productDoc, quantityToSubtract } of productsToUpdate) {
          productDoc.stockQuantity -= quantityToSubtract;
          await productDoc.save();
        }

        request.stockAdjusted = true; // Mark stock as adjusted
      }
      // Case 2: Status changes from "completed" to another status (increment stock if previously completed)
      else if (previousStatus === "completed" && status !== "completed") {
        // Only increment stock if the status was "completed" (regardless of stockAdjusted flag)
        for (const product of request.products) {
          const productDoc = await Product.findById(product.id);
          if (!productDoc) {
            return res.status(404).json({ message: `Product with ID ${product.id} not found` });
          }
          const quantityToAdd = Number(product.quantity) || 0;
          productDoc.stockQuantity += quantityToAdd;
          await productDoc.save();
        }
        request.stockAdjusted = false; // Reset stock adjustment flag
      }
      // Case 3: Status changes between pending/processing/cancelled (no stock change)
      // No action needed
    }

    // Update status and note after stock management
    request.status = status;
    if (note) request.notes = note;
    request.updatedAt = Date.now();

    await request.save();
    res.json(request);
  } catch (err) {
    console.error("Error updating request status:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid request ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/requests/:id/cancel
// @desc    Cancel a request
// @access  Private (Admin only)
router.put("/:id/cancel", adminAuth, async (req, res) => {
  const { reason } = req.body;

  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (request.status === "cancelled") {
      return res.status(400).json({ message: "Request is already cancelled" });
    }

    const previousStatus = request.status;
    request.status = "cancelled";
    request.notes = reason || "Cancelled by admin";
    request.updatedAt = Date.now();

    // Initialize stockAdjusted if undefined (for backward compatibility with older requests)
    if (typeof request.stockAdjusted === "undefined") {
      request.stockAdjusted = false;
    }

    // Stock Management Logic for cancellation
    if (previousStatus === "completed") {
      for (const product of request.products) {
        const productDoc = await Product.findById(product.id);
        if (!productDoc) {
          return res.status(404).json({ message: `Product with ID ${product.id} not found` });
        }
        const quantityToAdd = Number(product.quantity) || 0;
        productDoc.stockQuantity += quantityToAdd;
        await productDoc.save();
      }
      request.stockAdjusted = false; // Reset stock adjustment flag
    }

    await request.save();
    res.json(request);
  } catch (err) {
    console.error("Error cancelling request:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid request ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   PUT api/requests/:id
// @desc    Update a request
// @access  Private (Admin only)
router.put("/:id", adminAuth, async (req, res) => {
  const { name, email, phone, company, message, products, totalAmount, status } = req.body;

  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // Update fields
    if (name) request.name = name;
    if (email) request.email = email;
    if (phone) request.phone = phone;
    if (company) request.company = company;
    if (message) request.message = message;
    if (products) request.products = products;
    if (totalAmount) request.totalAmount = totalAmount;
    if (status) request.status = status;
    request.updatedAt = Date.now();

    await request.save();
    res.json(request);
  } catch (err) {
    console.error("Error updating request:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid request ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

// @route   DELETE api/requests/:id
// @desc    Delete a request
// @access  Private (Admin only)
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    await request.deleteOne();
    res.json({ message: "Request removed" });
  } catch (err) {
    console.error("Error deleting request:", err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Invalid request ID format" });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;