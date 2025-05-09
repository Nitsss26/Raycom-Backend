// // // // // // const express = require("express")
// // // // // // const router = express.Router()
// // // // // // const Product = require("../models/Product")
// // // // // // const auth = require("../middleware/auth")

// // // // // // // @route   GET api/products
// // // // // // // @desc    Get all products
// // // // // // // @access  Public
// // // // // // router.get("/", async (req, res) => {
// // // // // //   try {
// // // // // //     const products = await Product.find()
// // // // // //     res.json(products)
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)
// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // // @route   GET api/products/category/:category
// // // // // // // @desc    Get products by category
// // // // // // // @access  Public
// // // // // // router.get("/category/:category", async (req, res) => {
// // // // // //   try {
// // // // // //     const products = await Product.find({ category: req.params.category })
// // // // // //     res.json(products)
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)
// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // // @route   GET api/products/:id
// // // // // // // @desc    Get product by ID
// // // // // // // @access  Public
// // // // // // router.get("/:id", async (req, res) => {
// // // // // //   try {
// // // // // //     const product = await Product.findById(req.params.id)

// // // // // //     if (!product) {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     res.json(product)
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // // @route   POST api/products
// // // // // // // @desc    Create a product
// // // // // // // @access  Private (Admin only)
// // // // // // router.post("/", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     // Check if user is admin
// // // // // //     if (req.user.role !== "admin") {
// // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // //     }

// // // // // //     const newProduct = new Product(req.body)
// // // // // //     const product = await newProduct.save()

// // // // // //     res.json(product)
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)
// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // // @route   PUT api/products/:id
// // // // // // // @desc    Update a product
// // // // // // // @access  Private (Admin only)
// // // // // // router.put("/:id", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     // Check if user is admin
// // // // // //     if (req.user.role !== "admin") {
// // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // //     }

// // // // // //     const product = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })

// // // // // //     if (!product) {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     res.json(product)
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // // @route   DELETE api/products/:id
// // // // // // // @desc    Delete a product
// // // // // // // @access  Private (Admin only)
// // // // // // router.delete("/:id", auth, async (req, res) => {
// // // // // //   try {
// // // // // //     // Check if user is admin
// // // // // //     if (req.user.role !== "admin") {
// // // // // //       return res.status(403).json({ msg: "Not authorized" })
// // // // // //     }

// // // // // //     const product = await Product.findById(req.params.id)

// // // // // //     if (!product) {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     await product.remove()

// // // // // //     res.json({ msg: "Product removed" })
// // // // // //   } catch (err) {
// // // // // //     console.error(err.message)

// // // // // //     if (err.kind === "ObjectId") {
// // // // // //       return res.status(404).json({ msg: "Product not found" })
// // // // // //     }

// // // // // //     res.status(500).send("Server Error")
// // // // // //   }
// // // // // // })

// // // // // // module.exports = router

// // // // // const express = require("express")
// // // // // const router = express.Router()
// // // // // const Product = require("../models/Product")
// // // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // // const multer = require("multer")
// // // // // const path = require("path")
// // // // // const fs = require("fs")

// // // // // // Set up multer for file uploads
// // // // // const storage = multer.diskStorage({
// // // // //   destination: (req, file, cb) => {
// // // // //     const uploadDir = path.join(__dirname, "../uploads/products")
// // // // //     // Create directory if it doesn't exist
// // // // //     if (!fs.existsSync(uploadDir)) {
// // // // //       fs.mkdirSync(uploadDir, { recursive: true })
// // // // //     }
// // // // //     cb(null, uploadDir)
// // // // //   },
// // // // //   filename: (req, file, cb) => {
// // // // //     // Create unique filename with original extension
// // // // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
// // // // //     const ext = path.extname(file.originalname)
// // // // //     cb(null, file.fieldname + "-" + uniqueSuffix + ext)
// // // // //   },
// // // // // })

// // // // // // File filter to only accept images
// // // // // const fileFilter = (req, file, cb) => {
// // // // //   if (file.mimetype.startsWith("image/")) {
// // // // //     cb(null, true)
// // // // //   } else {
// // // // //     cb(new Error("Only image files are allowed"), false)
// // // // //   }
// // // // // }

// // // // // const upload = multer({
// // // // //   storage: storage,
// // // // //   fileFilter: fileFilter,
// // // // //   limits: {
// // // // //     fileSize: 5 * 1024 * 1024, // 5MB limit
// // // // //   },
// // // // // })

// // // // // // @route   GET api/products
// // // // // // @desc    Get all products
// // // // // // @access  Public
// // // // // router.get("/", async (req, res) => {
// // // // //   try {
// // // // //     const { category, search, sort, limit = 20, page = 1 } = req.query
// // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // // //     // Build query
// // // // //     const query = {}

// // // // //     // Filter by category if provided
// // // // //     if (category) {
// // // // //       query.category = category
// // // // //     }

// // // // //     // Search by name or model if provided
// // // // //     if (search) {
// // // // //       query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
// // // // //     }

// // // // //     // Build sort options
// // // // //     let sortOptions = {}
// // // // //     if (sort) {
// // // // //       switch (sort) {
// // // // //         case "price-asc":
// // // // //           sortOptions = { price: 1 }
// // // // //           break
// // // // //         case "price-desc":
// // // // //           sortOptions = { price: -1 }
// // // // //           break
// // // // //         case "newest":
// // // // //           sortOptions = { createdAt: -1 }
// // // // //           break
// // // // //         case "name-asc":
// // // // //           sortOptions = { name: 1 }
// // // // //           break
// // // // //         default:
// // // // //           sortOptions = { createdAt: -1 } // Default to newest
// // // // //       }
// // // // //     } else {
// // // // //       sortOptions = { createdAt: -1 } // Default to newest
// // // // //     }

// // // // //     // Get total count for pagination
// // // // //     const total = await Product.countDocuments(query)

// // // // //     // Get products with pagination
// // // // //     const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

// // // // //     // Return products with pagination info
// // // // //     res.json({
// // // // //       products,
// // // // //       pagination: {
// // // // //         total,
// // // // //         page: Number.parseInt(page),
// // // // //         limit: Number.parseInt(limit),
// // // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // // //       },
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching products:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/products/categories
// // // // // // @desc    Get all product categories
// // // // // // @access  Public
// // // // // router.get("/categories", async (req, res) => {
// // // // //   try {
// // // // //     const categories = await Product.distinct("category")
// // // // //     res.json(categories)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching categories:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/products/featured
// // // // // // @desc    Get featured products
// // // // // // @access  Public
// // // // // router.get("/featured", async (req, res) => {
// // // // //   try {
// // // // //     // Get a mix of products from different categories
// // // // //     const products = await Product.aggregate([
// // // // //       { $sample: { size: 8 } }, // Get 8 random products
// // // // //       { $sort: { createdAt: -1 } }, // Sort by newest
// // // // //     ])

// // // // //     res.json(products)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching featured products:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/products/category/:category
// // // // // // @desc    Get products by category
// // // // // // @access  Public
// // // // // router.get("/category/:category", async (req, res) => {
// // // // //   try {
// // // // //     const { sort, limit = 20, page = 1 } = req.query
// // // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // // //     // Build sort options
// // // // //     let sortOptions = {}
// // // // //     if (sort) {
// // // // //       switch (sort) {
// // // // //         case "price-asc":
// // // // //           sortOptions = { price: 1 }
// // // // //           break
// // // // //         case "price-desc":
// // // // //           sortOptions = { price: -1 }
// // // // //           break
// // // // //         case "newest":
// // // // //           sortOptions = { createdAt: -1 }
// // // // //           break
// // // // //         case "name-asc":
// // // // //           sortOptions = { name: 1 }
// // // // //           break
// // // // //         default:
// // // // //           sortOptions = { createdAt: -1 } // Default to newest
// // // // //       }
// // // // //     } else {
// // // // //       sortOptions = { createdAt: -1 } // Default to newest
// // // // //     }

// // // // //     // Get total count for pagination
// // // // //     const total = await Product.countDocuments({ category: req.params.category })

// // // // //     // Get products with pagination
// // // // //     const products = await Product.find({ category: req.params.category })
// // // // //       .sort(sortOptions)
// // // // //       .skip(skip)
// // // // //       .limit(Number.parseInt(limit))

// // // // //     // Return products with pagination info
// // // // //     res.json({
// // // // //       products,
// // // // //       pagination: {
// // // // //         total,
// // // // //         page: Number.parseInt(page),
// // // // //         limit: Number.parseInt(limit),
// // // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // // //       },
// // // // //     })
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching products by category:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/products/related/:id
// // // // // // @desc    Get related products
// // // // // // @access  Public
// // // // // router.get("/related/:id", async (req, res) => {
// // // // //   try {
// // // // //     const product = await Product.findById(req.params.id)

// // // // //     if (!product) {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     // Get products in the same category, excluding the current product
// // // // //     const relatedProducts = await Product.find({
// // // // //       category: product.category,
// // // // //       _id: { $ne: product._id },
// // // // //     }).limit(4)

// // // // //     res.json(relatedProducts)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching related products:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   GET api/products/:id
// // // // // // @desc    Get product by ID
// // // // // // @access  Public
// // // // // router.get("/:id", async (req, res) => {
// // // // //   try {
// // // // //     const product = await Product.findById(req.params.id)

// // // // //     if (!product) {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     res.json(product)
// // // // //   } catch (err) {
// // // // //     console.error("Error fetching product:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   POST api/products
// // // // // // @desc    Create a product
// // // // // // @access  Private (Admin only)
// // // // // router.post("/", adminAuth, upload.array("images", 5), async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       name,
// // // // //       model,
// // // // //       category,
// // // // //       price,
// // // // //       frequency,
// // // // //       power,
// // // // //       vswr,
// // // // //       connector,
// // // // //       peakPower,
// // // // //       inStock,
// // // // //       description,
// // // // //       applications,
// // // // //       datasheet,
// // // // //       specifications,
// // // // //     } = req.body

// // // // //     // Create new product
// // // // //     const newProduct = new Product({
// // // // //       name,
// // // // //       model,
// // // // //       category,
// // // // //       price: price ? Number.parseFloat(price) : null,
// // // // //       frequency,
// // // // //       power,
// // // // //       vswr,
// // // // //       connector,
// // // // //       peakPower,
// // // // //       inStock: inStock === "true",
// // // // //       description,
// // // // //       applications,
// // // // //       datasheet,
// // // // //       specifications: specifications ? JSON.parse(specifications) : [],
// // // // //     })

// // // // //     // Add image paths if files were uploaded
// // // // //     if (req.files && req.files.length > 0) {
// // // // //       newProduct.images = req.files.map((file) => `/uploads/products/${file.filename}`)
// // // // //     }

// // // // //     // Save product
// // // // //     const product = await newProduct.save()

// // // // //     res.status(201).json(product)
// // // // //   } catch (err) {
// // // // //     console.error("Error creating product:", err.message)
// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   PUT api/products/:id
// // // // // // @desc    Update a product
// // // // // // @access  Private (Admin only)
// // // // // router.put("/:id", adminAuth, upload.array("images", 5), async (req, res) => {
// // // // //   try {
// // // // //     const {
// // // // //       name,
// // // // //       model,
// // // // //       category,
// // // // //       price,
// // // // //       frequency,
// // // // //       power,
// // // // //       vswr,
// // // // //       connector,
// // // // //       peakPower,
// // // // //       inStock,
// // // // //       description,
// // // // //       applications,
// // // // //       datasheet,
// // // // //       specifications,
// // // // //       removeImages,
// // // // //     } = req.body

// // // // //     // Find product
// // // // //     const product = await Product.findById(req.params.id)

// // // // //     if (!product) {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     // Update fields
// // // // //     if (name) product.name = name
// // // // //     if (model) product.model = model
// // // // //     if (category) product.category = category
// // // // //     if (price !== undefined) product.price = price ? Number.parseFloat(price) : null
// // // // //     if (frequency) product.frequency = frequency
// // // // //     if (power) product.power = power
// // // // //     if (vswr) product.vswr = vswr
// // // // //     if (connector) product.connector = connector
// // // // //     if (peakPower) product.peakPower = peakPower
// // // // //     if (inStock !== undefined) product.inStock = inStock === "true"
// // // // //     if (description) product.description = description
// // // // //     if (applications) product.applications = applications
// // // // //     if (datasheet) product.datasheet = datasheet
// // // // //     if (specifications) product.specifications = JSON.parse(specifications)

// // // // //     // Handle image removal if specified
// // // // //     if (removeImages) {
// // // // //       const imagesToRemove = JSON.parse(removeImages)
// // // // //       product.images = product.images.filter((img) => !imagesToRemove.includes(img))
// // // // //     }

// // // // //     // Add new images if files were uploaded
// // // // //     if (req.files && req.files.length > 0) {
// // // // //       const newImages = req.files.map((file) => `/uploads/products/${file.filename}`)
// // // // //       product.images = [...product.images, ...newImages]
// // // // //     }

// // // // //     // Save updated product
// // // // //     const updatedProduct = await product.save()

// // // // //     res.json(updatedProduct)
// // // // //   } catch (err) {
// // // // //     console.error("Error updating product:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // // @route   DELETE api/products/:id
// // // // // // @desc    Delete a product
// // // // // // @access  Private (Admin only)
// // // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // // //   try {
// // // // //     const product = await Product.findById(req.params.id)

// // // // //     if (!product) {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     // Delete product images from filesystem
// // // // //     if (product.images && product.images.length > 0) {
// // // // //       product.images.forEach((imagePath) => {
// // // // //         const fullPath = path.join(__dirname, "..", imagePath)
// // // // //         if (fs.existsSync(fullPath)) {
// // // // //           fs.unlinkSync(fullPath)
// // // // //         }
// // // // //       })
// // // // //     }

// // // // //     // Delete product from database
// // // // //     await product.remove()

// // // // //     res.json({ message: "Product removed" })
// // // // //   } catch (err) {
// // // // //     console.error("Error deleting product:", err.message)

// // // // //     if (err.kind === "ObjectId") {
// // // // //       return res.status(404).json({ message: "Product not found" })
// // // // //     }

// // // // //     res.status(500).json({ message: "Server Error" })
// // // // //   }
// // // // // })

// // // // // module.exports = router


// // // // const express = require("express")
// // // // const router = express.Router()
// // // // const Product = require("../models/Product")
// // // // const { auth, adminAuth } = require("../middleware/auth")
// // // // const multer = require("multer")
// // // // const path = require("path")
// // // // const fs = require("fs")

// // // // // Set up multer for file uploads
// // // // const storage = multer.diskStorage({
// // // //   destination: (req, file, cb) => {
// // // //     const uploadDir = path.join(__dirname, "../uploads/products")
// // // //     // Create directory if it doesn't exist
// // // //     if (!fs.existsSync(uploadDir)) {
// // // //       fs.mkdirSync(uploadDir, { recursive: true })
// // // //     }
// // // //     cb(null, uploadDir)
// // // //   },
// // // //   filename: (req, file, cb) => {
// // // //     // Create unique filename with original extension
// // // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
// // // //     const ext = path.extname(file.originalname)
// // // //     cb(null, file.fieldname + "-" + uniqueSuffix + ext)
// // // //   },
// // // // })

// // // // // File filter to only accept images
// // // // const fileFilter = (req, file, cb) => {
// // // //   if (file.mimetype.startsWith("image/")) {
// // // //     cb(null, true)
// // // //   } else {
// // // //     cb(new Error("Only image files are allowed"), false)
// // // //   }
// // // // }

// // // // const upload = multer({
// // // //   storage: storage,
// // // //   fileFilter: fileFilter,
// // // //   limits: {
// // // //     fileSize: 5 * 1024 * 1024, // 5MB limit
// // // //   },
// // // // })

// // // // // @route   GET api/products
// // // // // @desc    Get all products
// // // // // @access  Public
// // // // router.get("/", async (req, res) => {
// // // //   try {
// // // //     const { category, search, sort, limit = 20, page = 1 } = req.query
// // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // //     // Build query
// // // //     const query = {}

// // // //     // Filter by category if provided
// // // //     if (category) {
// // // //       query.category = category
// // // //     }

// // // //     // Search by name or model if provided
// // // //     if (search) {
// // // //       query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
// // // //     }

// // // //     // Build sort options
// // // //     let sortOptions = {}
// // // //     if (sort) {
// // // //       switch (sort) {
// // // //         case "price-asc":
// // // //           sortOptions = { price: 1 }
// // // //           break
// // // //         case "price-desc":
// // // //           sortOptions = { price: -1 }
// // // //           break
// // // //         case "newest":
// // // //           sortOptions = { createdAt: -1 }
// // // //           break
// // // //         case "name-asc":
// // // //           sortOptions = { name: 1 }
// // // //           break
// // // //         default:
// // // //           sortOptions = { createdAt: -1 } // Default to newest
// // // //       }
// // // //     } else {
// // // //       sortOptions = { createdAt: -1 } // Default to newest
// // // //     }

// // // //     // Get total count for pagination
// // // //     const total = await Product.countDocuments(query)

// // // //     // Get products with pagination
// // // //     const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

// // // //     // Return products with pagination info
// // // //     res.json({
// // // //       products,
// // // //       pagination: {
// // // //         total,
// // // //         page: Number.parseInt(page),
// // // //         limit: Number.parseInt(limit),
// // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // //       },
// // // //     })
// // // //   } catch (err) {
// // // //     console.error("Error fetching products:", err.message)
// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   GET api/products/categories
// // // // // @desc    Get all product categories
// // // // // @access  Public
// // // // router.get("/categories", async (req, res) => {
// // // //   try {
// // // //     const categories = await Product.distinct("category")
// // // //     res.json(categories)
// // // //   } catch (err) {
// // // //     console.error("Error fetching categories:", err.message)
// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   GET api/products/featured
// // // // // @desc    Get featured products
// // // // // @access  Public
// // // // router.get("/featured", async (req, res) => {
// // // //   try {
// // // //     // First try to get products marked as featured
// // // //     let products = await Product.find({ featured: true }).limit(8)

// // // //     // If not enough featured products, get random ones to fill up to 8
// // // //     if (products.length < 8) {
// // // //       const additionalProducts = await Product.aggregate([
// // // //         { $match: { featured: { $ne: true } } },
// // // //         { $sample: { size: 8 - products.length } },
// // // //       ])
// // // //       products = [...products, ...additionalProducts]
// // // //     }

// // // //     res.json(products)
// // // //   } catch (err) {
// // // //     console.error("Error fetching featured products:", err.message)
// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   GET api/products/category/:category
// // // // // @desc    Get products by category
// // // // // @access  Public
// // // // router.get("/category/:category", async (req, res) => {
// // // //   try {
// // // //     const { sort, limit = 20, page = 1 } = req.query
// // // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // // //     // Build sort options
// // // //     let sortOptions = {}
// // // //     if (sort) {
// // // //       switch (sort) {
// // // //         case "price-asc":
// // // //           sortOptions = { price: 1 }
// // // //           break
// // // //         case "price-desc":
// // // //           sortOptions = { price: -1 }
// // // //           break
// // // //         case "newest":
// // // //           sortOptions = { createdAt: -1 }
// // // //           break
// // // //         case "name-asc":
// // // //           sortOptions = { name: 1 }
// // // //           break
// // // //         default:
// // // //           sortOptions = { createdAt: -1 } // Default to newest
// // // //       }
// // // //     } else {
// // // //       sortOptions = { createdAt: -1 } // Default to newest
// // // //     }

// // // //     // Get total count for pagination
// // // //     const total = await Product.countDocuments({ category: req.params.category })

// // // //     // Get products with pagination
// // // //     const products = await Product.find({ category: req.params.category })
// // // //       .sort(sortOptions)
// // // //       .skip(skip)
// // // //       .limit(Number.parseInt(limit))

// // // //     // Return products with pagination info
// // // //     res.json({
// // // //       products,
// // // //       pagination: {
// // // //         total,
// // // //         page: Number.parseInt(page),
// // // //         limit: Number.parseInt(limit),
// // // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // // //       },
// // // //     })
// // // //   } catch (err) {
// // // //     console.error("Error fetching products by category:", err.message)
// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   GET api/products/related/:id
// // // // // @desc    Get related products
// // // // // @access  Public
// // // // router.get("/related/:id", async (req, res) => {
// // // //   try {
// // // //     const product = await Product.findById(req.params.id)

// // // //     if (!product) {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     // Get products in the same category, excluding the current product
// // // //     const relatedProducts = await Product.find({
// // // //       category: product.category,
// // // //       _id: { $ne: product._id },
// // // //     }).limit(4)

// // // //     res.json(relatedProducts)
// // // //   } catch (err) {
// // // //     console.error("Error fetching related products:", err.message)

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   GET api/products/:id
// // // // // @desc    Get product by ID
// // // // // @access  Public
// // // // router.get("/:id", async (req, res) => {
// // // //   try {
// // // //     const product = await Product.findById(req.params.id)

// // // //     if (!product) {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     res.json(product)
// // // //   } catch (err) {
// // // //     console.error("Error fetching product:", err.message)

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   POST api/products
// // // // // @desc    Create a product
// // // // // @access  Private (Admin only)
// // // // router.post("/", adminAuth, upload.array("images", 5), async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       name,
// // // //       model,
// // // //       category,
// // // //       price,
// // // //       frequency,
// // // //       power,
// // // //       vswr,
// // // //       connector,
// // // //       peakPower,
// // // //       inStock,
// // // //       description,
// // // //       applications,
// // // //       datasheet,
// // // //       specifications,
// // // //       featured,
// // // //     } = req.body

// // // //     // Create new product
// // // //     const newProduct = new Product({
// // // //       name,
// // // //       model,
// // // //       category,
// // // //       price: price ? Number.parseFloat(price) : null,
// // // //       frequency,
// // // //       power,
// // // //       vswr,
// // // //       connector,
// // // //       peakPower,
// // // //       inStock: inStock === "true",
// // // //       description,
// // // //       applications,
// // // //       datasheet,
// // // //       specifications: specifications ? JSON.parse(specifications) : [],
// // // //       featured: featured === "true",
// // // //     })

// // // //     // Add image paths if files were uploaded
// // // //     if (req.files && req.files.length > 0) {
// // // //       newProduct.images = req.files.map((file) => `/uploads/products/${file.filename}`)
// // // //     }

// // // //     // Save product
// // // //     const product = await newProduct.save()

// // // //     res.status(201).json(product)
// // // //   } catch (err) {
// // // //     console.error("Error creating product:", err.message)
// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   PUT api/products/:id
// // // // // @desc    Update a product
// // // // // @access  Private (Admin only)
// // // // router.put("/:id", adminAuth, upload.array("images", 5), async (req, res) => {
// // // //   try {
// // // //     const {
// // // //       name,
// // // //       model,
// // // //       category,
// // // //       price,
// // // //       frequency,
// // // //       power,
// // // //       vswr,
// // // //       connector,
// // // //       peakPower,
// // // //       inStock,
// // // //       description,
// // // //       applications,
// // // //       datasheet,
// // // //       specifications,
// // // //       removeImages,
// // // //       featured,
// // // //     } = req.body

// // // //     // Find product
// // // //     const product = await Product.findById(req.params.id)

// // // //     if (!product) {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     // Update fields
// // // //     if (name) product.name = name
// // // //     if (model) product.model = model
// // // //     if (category) product.category = category
// // // //     if (price !== undefined) product.price = price ? Number.parseFloat(price) : null
// // // //     if (frequency) product.frequency = frequency
// // // //     if (power) product.power = power
// // // //     if (vswr) product.vswr = vswr
// // // //     if (connector) product.connector = connector
// // // //     if (peakPower) product.peakPower = peakPower
// // // //     if (inStock !== undefined) product.inStock = inStock === "true"
// // // //     if (description) product.description = description
// // // //     if (applications) product.applications = applications
// // // //     if (datasheet) product.datasheet = datasheet
// // // //     if (specifications) product.specifications = JSON.parse(specifications)
// // // //     if (featured !== undefined) product.featured = featured === "true"

// // // //     // Handle image removal if specified
// // // //     if (removeImages) {
// // // //       const imagesToRemove = JSON.parse(removeImages)
// // // //       product.images = product.images.filter((img) => !imagesToRemove.includes(img))
// // // //     }

// // // //     // Add new images if files were uploaded
// // // //     if (req.files && req.files.length > 0) {
// // // //       const newImages = req.files.map((file) => `/uploads/products/${file.filename}`)
// // // //       product.images = [...product.images, ...newImages]
// // // //     }

// // // //     // Save updated product
// // // //     const updatedProduct = await product.save()

// // // //     res.json(updatedProduct)
// // // //   } catch (err) {
// // // //     console.error("Error updating product:", err.message)

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // // @route   DELETE api/products/:id
// // // // // @desc    Delete a product
// // // // // @access  Private (Admin only)
// // // // router.delete("/:id", adminAuth, async (req, res) => {
// // // //   try {
// // // //     const product = await Product.findById(req.params.id)

// // // //     if (!product) {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     // Delete product images from filesystem
// // // //     if (product.images && product.images.length > 0) {
// // // //       product.images.forEach((imagePath) => {
// // // //         const fullPath = path.join(__dirname, "..", imagePath)
// // // //         if (fs.existsSync(fullPath)) {
// // // //           fs.unlinkSync(fullPath)
// // // //         }
// // // //       })
// // // //     }

// // // //     // Delete product from database
// // // //     await product.deleteOne()

// // // //     res.json({ message: "Product removed" })
// // // //   } catch (err) {
// // // //     console.error("Error deleting product:", err.message)

// // // //     if (err.kind === "ObjectId") {
// // // //       return res.status(404).json({ message: "Product not found" })
// // // //     }

// // // //     res.status(500).json({ message: "Server Error" })
// // // //   }
// // // // })

// // // // module.exports = router


// // // const express = require("express")
// // // const router = express.Router()
// // // const Product = require("../models/Product")
// // // const { auth, adminAuth } = require("../middleware/auth")
// // // const multer = require("multer")
// // // const path = require("path")
// // // const fs = require("fs")

// // // // Set up multer for file uploads (kept for potential future use)
// // // const storage = multer.diskStorage({
// // //   destination: (req, file, cb) => {
// // //     const uploadDir = path.join(__dirname, "../Uploads/products")
// // //     if (!fs.existsSync(uploadDir)) {
// // //       fs.mkdirSync(uploadDir, { recursive: true })
// // //     }
// // //     cb(null, uploadDir)
// // //   },
// // //   filename: (req, file, cb) => {
// // //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
// // //     const ext = path.extname(file.originalname)
// // //     cb(null, file.fieldname + "-" + uniqueSuffix + ext)
// // //   },
// // // })

// // // const fileFilter = (req, file, cb) => {
// // //   if (file.mimetype.startsWith("image/")) {
// // //     cb(null, true)
// // //   } else {
// // //     cb(new Error("Only image files are allowed"), false)
// // //   }
// // // }

// // // const upload = multer({
// // //   storage: storage,
// // //   fileFilter: fileFilter,
// // //   limits: {
// // //     fileSize: 5 * 1024 * 1024, // 5MB limit
// // //   },
// // // })

// // // // @route   GET api/products
// // // // @desc    Get all products
// // // // @access  Public
// // // router.get("/", async (req, res) => {
// // //   try {
// // //     const { category, search, sort, limit = 20, page = 1 } = req.query
// // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // //     const query = {}
// // //     if (category) {
// // //       query.category = category
// // //     }
// // //     if (search) {
// // //       query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
// // //     }

// // //     let sortOptions = {}
// // //     if (sort) {
// // //       switch (sort) {
// // //         case "price-asc":
// // //           sortOptions = { price: 1 }
// // //           break
// // //         case "price-desc":
// // //           sortOptions = { price: -1 }
// // //           break
// // //         case "newest":
// // //           sortOptions = { createdAt: -1 }
// // //           break
// // //         case "name-asc":
// // //           sortOptions = { name: 1 }
// // //           break
// // //         default:
// // //           sortOptions = { createdAt: -1 }
// // //       }
// // //     } else {
// // //       sortOptions = { createdAt: -1 }
// // //     }

// // //     const total = await Product.countDocuments(query)
// // //     const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

// // //     res.json({
// // //       products,
// // //       pagination: {
// // //         total,
// // //         page: Number.parseInt(page),
// // //         limit: Number.parseInt(limit),
// // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // //       },
// // //     })
// // //   } catch (err) {
// // //     console.error("Error fetching products:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/products/categories
// // // // @desc    Get all product categories
// // // // @access  Public
// // // router.get("/categories", async (req, res) => {
// // //   try {
// // //     const categories = await Product.distinct("category")
// // //     res.json(categories)
// // //   } catch (err) {
// // //     console.error("Error fetching categories:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/products/featured
// // // // @desc    Get featured products
// // // // @access  Public
// // // router.get("/featured", async (req, res) => {
// // //   try {
// // //     let products = await Product.find({ featured: true }).limit(8)
// // //     if (products.length < 8) {
// // //       const additionalProducts = await Product.aggregate([
// // //         { $match: { featured: { $ne: true } } },
// // //         { $sample: { size: 8 - products.length } },
// // //       ])
// // //       products = [...products, ...additionalProducts]
// // //     }
// // //     res.json(products)
// // //   } catch (err) {
// // //     console.error("Error fetching featured products:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/products/category/:category
// // // // @desc    Get products by category
// // // // @access  Public
// // // router.get("/category/:category", async (req, res) => {
// // //   try {
// // //     const { sort, limit = 20, page = 1 } = req.query
// // //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// // //     let sortOptions = {}
// // //     if (sort) {
// // //       switch (sort) {
// // //         case "price-asc":
// // //           sortOptions = { price: 1 }
// // //           break
// // //         case "price-desc":
// // //           sortOptions = { price: -1 }
// // //           break
// // //         case "newest":
// // //           sortOptions = { createdAt: -1 }
// // //           break
// // //         case "name-asc":
// // //           sortOptions = { name: 1 }
// // //           break
// // //         default:
// // //           sortOptions = { createdAt: -1 }
// // //       }
// // //     } else {
// // //       sortOptions = { createdAt: -1 }
// // //     }

// // //     const total = await Product.countDocuments({ category: req.params.category })
// // //     const products = await Product.find({ category: req.params.category })
// // //       .sort(sortOptions)
// // //       .skip(skip)
// // //       .limit(Number.parseInt(limit))

// // //     res.json({
// // //       products,
// // //       pagination: {
// // //         total,
// // //         page: Number.parseInt(page),
// // //         limit: Number.parseInt(limit),
// // //         pages: Math.ceil(total / Number.parseInt(limit)),
// // //       },
// // //     })
// // //   } catch (err) {
// // //     console.error("Error fetching products by category:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/products/related/:id
// // // // @desc    Get related products
// // // // @access  Public
// // // router.get("/related/:id", async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id)
// // //     if (!product) {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     const relatedProducts = await Product.find({
// // //       category: product.category,
// // //       _id: { $ne: product._id },
// // //     }).limit(4)
// // //     res.json(relatedProducts)
// // //   } catch (err) {
// // //     console.error("Error fetching related products:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   GET api/products/:id
// // // // @desc    Get product by ID
// // // // @access  Public
// // // router.get("/:id", async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id)
// // //     if (!product) {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     res.json(product)
// // //   } catch (err) {
// // //     console.error("Error fetching product:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   POST api/products
// // // // @desc    Create a product
// // // // @access  Private (Admin only)
// // // router.post("/", adminAuth, async (req, res) => {
// // //   try {
// // //     const {
// // //       name,
// // //       model,
// // //       category,
// // //       price,
// // //       frequency,
// // //       power,
// // //       vswr,
// // //       connector,
// // //       peakPower,
// // //       inStock,
// // //       description,
// // //       applications,
// // //       images,
// // //       datasheet,
// // //       specifications,
// // //       featured,
// // //     } = req.body

// // //     // Validate required fields
// // //     if (!name || !model || !category) {
// // //       return res.status(400).json({ message: "Name, model, and category are required" })
// // //     }

// // //     // Create new product
// // //     const newProduct = new Product({
// // //       name,
// // //       model,
// // //       category,
// // //       price: price ? Number.parseFloat(price) : null,
// // //       frequency,
// // //       power,
// // //       vswr,
// // //       connector,
// // //       peakPower,
// // //       inStock: inStock === true || inStock === "true",
// // //       description,
// // //       applications,
// // //       images: images || [],
// // //       datasheet,
// // //       specifications: specifications || [],
// // //       featured: featured === true || featured === "true",
// // //     })

// // //     // Save product
// // //     const product = await newProduct.save()
// // //     res.status(201).json(product)
// // //   } catch (err) {
// // //     console.error("Error creating product:", err.message)
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   PUT api/products/:id
// // // // @desc    Update a product
// // // // @access  Private (Admin only)
// // // router.put("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const {
// // //       name,
// // //       model,
// // //       category,
// // //       price,
// // //       frequency,
// // //       power,
// // //       vswr,
// // //       connector,
// // //       peakPower,
// // //       inStock,
// // //       description,
// // //       applications,
// // //       images,
// // //       datasheet,
// // //       specifications,
// // //       featured,
// // //     } = req.body

// // //     // Find product
// // //     const product = await Product.findById(req.params.id)
// // //     if (!product) {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }

// // //     // Update fields
// // //     product.name = name || product.name
// // //     product.model = model || product.model
// // //     product.category = category || product.category
// // //     product.price = price !== undefined ? (price ? Number.parseFloat(price) : null) : product.price
// // //     product.frequency = frequency || product.frequency
// // //     product.power = power || product.power
// // //     product.vswr = vswr || product.vswr
// // //     product.connector = connector || product.connector
// // //     product.peakPower = peakPower || product.peakPower
// // //     product.inStock = inStock !== undefined ? (inStock === true || inStock === "true") : product.inStock
// // //     product.description = description || product.description
// // //     product.applications = applications || product.applications
// // //     product.images = images || product.images
// // //     product.datasheet = datasheet || product.datasheet
// // //     product.specifications = specifications || product.specifications
// // //     product.featured = featured !== undefined ? (featured === true || featured === "true") : product.featured

// // //     // Save updated product
// // //     const updatedProduct = await product.save()
// // //     res.json(updatedProduct)
// // //   } catch (err) {
// // //     console.error("Error updating product:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // // @route   DELETE api/products/:id
// // // // @desc    Delete a product
// // // // @access  Private (Admin only)
// // // router.delete("/:id", adminAuth, async (req, res) => {
// // //   try {
// // //     const product = await Product.findById(req.params.id)
// // //     if (!product) {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }

// // //     // Delete product images from filesystem
// // //     if (product.images && product.images.length > 0) {
// // //       product.images.forEach((imagePath) => {
// // //         const fullPath = path.join(__dirname, "..", imagePath)
// // //         if (fs.existsSync(fullPath)) {
// // //           fs.unlinkSync(fullPath)
// // //         }
// // //       })
// // //     }

// // //     // Delete product from database
// // //     await product.deleteOne()
// // //     res.json({ message: "Product removed" })
// // //   } catch (err) {
// // //     console.error("Error deleting product:", err.message)
// // //     if (err.kind === "ObjectId") {
// // //       return res.status(404).json({ message: "Product not found" })
// // //     }
// // //     res.status(500).json({ message: "Server Error" })
// // //   }
// // // })

// // // module.exports = router


// // const express = require("express")
// // const router = express.Router()
// // const Product = require("../models/Product")
// // const { auth, adminAuth } = require("../middleware/auth")

// // // @route   GET api/products
// // // @desc    Get all products
// // // @access  Public
// // router.get("/", async (req, res) => {
// //   try {
// //     const { category, search, sort, limit = 20, page = 1 } = req.query
// //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// //     const query = {}
// //     if (category) {
// //       query.category = category
// //     }
// //     if (search) {
// //       query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
// //     }

// //     let sortOptions = {}
// //     if (sort) {
// //       switch (sort) {
// //         case "price-asc":
// //           sortOptions = { price: 1 }
// //           break
// //         case "price-desc":
// //           sortOptions = { price: -1 }
// //           break
// //         case "newest":
// //           sortOptions = { createdAt: -1 }
// //           break
// //         case "name-asc":
// //           sortOptions = { name: 1 }
// //           break
// //         default:
// //           sortOptions = { createdAt: -1 }
// //       }
// //     } else {
// //       sortOptions = { createdAt: -1 }
// //     }

// //     const total = await Product.countDocuments(query)
// //     const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

// //     res.json({
// //       products,
// //       pagination: {
// //         total,
// //         page: Number.parseInt(page),
// //         limit: Number.parseInt(limit),
// //         pages: Math.ceil(total / Number.parseInt(limit)),
// //       },
// //     })
// //   } catch (err) {
// //     console.error("Error fetching products:", err.message)
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   GET api/products/categories
// // // @desc    Get all product categories
// // // @access  Public
// // router.get("/categories", async (req, res) => {
// //   try {
// //     const categories = await Product.distinct("category")
// //     res.json(categories)
// //   } catch (err) {
// //     console.error("Error fetching categories:", err.message)
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   GET api/products/featured
// // // @desc    Get featured products
// // // @access  Public
// // router.get("/featured", async (req, res) => {
// //   try {
// //     let products = await Product.find({ featured: true }).limit(8)
// //     if (products.length < 8) {
// //       const additionalProducts = await Product.aggregate([
// //         { $match: { featured: { $ne: true } } },
// //         { $sample: { size: 8 - products.length } },
// //       ])
// //       products = [...products, ...additionalProducts]
// //     }
// //     res.json(products)
// //   } catch (err) {
// //     console.error("Error fetching featured products:", err.message)
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   GET api/products/category/:category
// // // @desc    Get products by category
// // // @access  Public
// // router.get("/category/:category", async (req, res) => {
// //   try {
// //     const { sort, limit = 20, page = 1 } = req.query
// //     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

// //     let sortOptions = {}
// //     if (sort) {
// //       switch (sort) {
// //         case "price-asc":
// //           sortOptions = { price: 1 }
// //           break
// //         case "price-desc":
// //           sortOptions = { price: -1 }
// //           break
// //         case "newest":
// //           sortOptions = { createdAt: -1 }
// //           break
// //         case "name-asc":
// //           sortOptions = { name: 1 }
// //           break
// //         default:
// //           sortOptions = { createdAt: -1 }
// //       }
// //     } else {
// //       sortOptions = { createdAt: -1 }
// //     }

// //     const total = await Product.countDocuments({ category: req.params.category })
// //     const products = await Product.find({ category: req.params.category })
// //       .sort(sortOptions)
// //       .skip(skip)
// //       .limit(Number.parseInt(limit))

// //     res.json({
// //       products,
// //       pagination: {
// //         total,
// //         page: Number.parseInt(page),
// //         limit: Number.parseInt(limit),
// //         pages: Math.ceil(total / Number.parseInt(limit)),
// //       },
// //     })
// //   } catch (err) {
// //     console.error("Error fetching products by category:", err.message)
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   GET api/products/related/:id
// // // @desc    Get related products
// // // @access  Public
// // router.get("/related/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id)
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     const relatedProducts = await Product.find({
// //       category: product.category,
// //       _id: { $ne: product._id },
// //     }).limit(4)
// //     res.json(relatedProducts)
// //   } catch (err) {
// //     console.error("Error fetching related products:", err.message)
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   GET api/products/:id
// // // @desc    Get product by ID
// // // @access  Public
// // router.get("/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id)
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     res.json(product)
// //   } catch (err) {
// //     console.error("Error fetching product:", err.message)
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   POST api/products
// // // @desc    Create a product
// // // @access  Private (Admin only)
// // router.post("/", adminAuth, async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       model,
// //       category,
// //       price,
// //       frequency,
// //       power,
// //       vswr,
// //       connector,
// //       peakPower,
// //       inStock,
// //       description,
// //       applications,
// //       images,
// //       datasheet,
// //       specifications,
// //       featured,
// //     } = req.body

// //     // Validate required fields
// //     if (!name || !model || !category) {
// //       return res.status(400).json({ message: "Name, model, and category are required" })
// //     }

// //     // Create new product
// //     const newProduct = new Product({
// //       name,
// //       model,
// //       category,
// //       price: price ? Number.parseFloat(price) : null,
// //       frequency,
// //       power,
// //       vswr,
// //       connector,
// //       peakPower,
// //       inStock: inStock === true || inStock === "true",
// //       description,
// //       applications,
// //       images: images || [],
// //       datasheet,
// //       specifications: specifications || [],
// //       featured: featured === true || featured === "true",
// //     })

// //     // Save product
// //     const product = await newProduct.save()
// //     res.status(201).json(product)
// //   } catch (err) {
// //     console.error("Error creating product:", err.message)
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   PUT api/products/:id
// // // @desc    Update a product
// // // @access  Private (Admin only)
// // router.put("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const {
// //       name,
// //       model,
// //       category,
// //       price,
// //       frequency,
// //       power,
// //       vswr,
// //       connector,
// //       peakPower,
// //       inStock,
// //       description,
// //       applications,
// //       images,
// //       datasheet,
// //       specifications,
// //       featured,
// //     } = req.body

// //     // Find product
// //     const product = await Product.findById(req.params.id)
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" })
// //     }

// //     // Update fields
// //     product.name = name || product.name
// //     product.model = model || product.model
// //     product.category = category || product.category
// //     product.price = price !== undefined ? (price ? Number.parseFloat(price) : null) : product.price
// //     product.frequency = frequency || product.frequency
// //     product.power = power || product.power
// //     product.vswr = vswr || product.vswr
// //     product.connector = connector || product.connector
// //     product.peakPower = peakPower || product.peakPower
// //     product.inStock = inStock !== undefined ? (inStock === true || inStock === "true") : product.inStock
// //     product.description = description || product.description
// //     product.applications = applications || product.applications
// //     product.images = images || product.images
// //     product.datasheet = datasheet || product.datasheet
// //     product.specifications = specifications || product.specifications
// //     product.featured = featured !== undefined ? (featured === true || featured === "true") : product.featured

// //     // Save updated product
// //     const updatedProduct = await product.save()
// //     res.json(updatedProduct)
// //   } catch (err) {
// //     console.error("Error updating product:", err.message)
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // // @route   DELETE api/products/:id
// // // @desc    Delete a product
// // // @access  Private (Admin only)
// // router.delete("/:id", adminAuth, async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id)
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" })
// //     }

// //     // Delete product from database
// //     await product.deleteOne()
// //     res.json({ message: "Product removed" })
// //   } catch (err) {
// //     console.error("Error deleting product:", err.message)
// //     if (err.kind === "ObjectId") {
// //       return res.status(404).json({ message: "Product not found" })
// //     }
// //     res.status(500).json({ message: "Server Error" })
// //   }
// // })

// // module.exports = router


// const express = require("express")
// const router = express.Router()
// const Product = require("../models/Product")
// const { auth, adminAuth } = require("../middleware/auth")

// // @route   GET api/products
// // @desc    Get all products
// // @access  Public
// router.get("/", async (req, res) => {
//   try {
//     const { category, search, sort, limit = 20, page = 1 } = req.query
//     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

//     const query = {}
//     if (category) {
//       query.category = category
//     }
//     if (search) {
//       query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
//     }

//     let sortOptions = {}
//     if (sort) {
//       switch (sort) {
//         case "price-asc":
//           sortOptions = { price: 1 }
//           break
//         case "price-desc":
//           sortOptions = { price: -1 }
//           break
//         case "newest":
//           sortOptions = { createdAt: -1 }
//           break
//         case "name-asc":
//           sortOptions = { name: 1 }
//           break
//         default:
//           sortOptions = { createdAt: -1 }
//       }
//     } else {
//       sortOptions = { createdAt: -1 }
//     }

//     const total = await Product.countDocuments(query)
//     const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

//     res.json({
//       products,
//       pagination: {
//         total,
//         page: Number.parseInt(page),
//         limit: Number.parseInt(limit),
//         pages: Math.ceil(total / Number.parseInt(limit)),
//       },
//     })
//   } catch (err) {
//     console.error("Error fetching products:", err.message)
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   GET api/products/categories
// // @desc    Get all product categories
// // @access  Public
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await Product.distinct("category")
//     res.json(categories)
//   } catch (err) {
//     console.error("Error fetching categories:", err.message)
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   GET api/products/featured
// // @desc    Get featured products
// // @access  Public
// router.get("/featured", async (req, res) => {
//   try {
//     let products = await Product.find({ featured: true }).limit(8)
//     if (products.length < 8) {
//       const additionalProducts = await Product.aggregate([
//         { $match: { featured: { $ne: true } } },
//         { $sample: { size: 8 - products.length } },
//       ])
//       products = [...products, ...additionalProducts]
//     }
//     res.json(products)
//   } catch (err) {
//     console.error("Error fetching featured products:", err.message)
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   GET api/products/category/:category
// // @desc    Get products by category
// // @access  Public
// router.get("/category/:category", async (req, res) => {
//   try {
//     const { sort, limit = 20, page = 1 } = req.query
//     const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

//     let sortOptions = {}
//     if (sort) {
//       switch (sort) {
//         case "price-asc":
//           sortOptions = { price: 1 }
//           break
//         case "price-desc":
//           sortOptions = { price: -1 }
//           break
//         case "newest":
//           sortOptions = { createdAt: -1 }
//           break
//         case "name-asc":
//           sortOptions = { name: 1 }
//           break
//         default:
//           sortOptions = { createdAt: -1 }
//       }
//     } else {
//       sortOptions = { createdAt: -1 }
//     }

//     const total = await Product.countDocuments({ category: req.params.category })
//     const products = await Product.find({ category: req.params.category })
//       .sort(sortOptions)
//       .skip(skip)
//       .limit(Number.parseInt(limit))

//     res.json({
//       products,
//       pagination: {
//         total,
//         page: Number.parseInt(page),
//         limit: Number.parseInt(limit),
//         pages: Math.ceil(total / Number.parseInt(limit)),
//       },
//     })
//   } catch (err) {
//     console.error("Error fetching products by category:", err.message)
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   GET api/products/related/:id
// // @desc    Get related products (all products in the same category)
// // @access  Public
// router.get("/related/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id)
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     const relatedProducts = await Product.find({
//       category: product.category,
//       _id: { $ne: product._id },
//     }) // Removed .limit(4) to fetch all products in the same category
//     res.json(relatedProducts)
//   } catch (err) {
//     console.error("Error fetching related products:", err.message)
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   GET api/products/:id
// // @desc    Get product by ID
// // @access  Public
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id)
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.json(product)
//   } catch (err) {
//     console.error("Error fetching product:", err.message)
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   POST api/products
// // @desc    Create a product
// // @access  Private (Admin only)
// router.post("/", adminAuth, async (req, res) => {
//   try {
//     const {
//       name,
//       model,
//       category,
//       price,
//       frequency,
//       power,
//       vswr,
//       connector,
//       peakPower,
//       inStock,
//       description,
//       applications,
//       images,
//       datasheet,
//       specifications,
//       featured,
//     } = req.body

//     // Validate required fields
//     if (!name || !model || !category) {
//       return res.status(400).json({ message: "Name, model, and category are required" })
//     }

//     // Create new product
//     const newProduct = new Product({
//       name,
//       model,
//       category,
//       price: price ? Number.parseFloat(price) : null,
//       frequency,
//       power,
//       vswr,
//       connector,
//       peakPower,
//       inStock: inStock === true || inStock === "true",
//       description,
//       applications,
//       images: images || [],
//       datasheet,
//       specifications: specifications || [],
//       featured: featured === true || featured === "true",
//     })

//     // Save product
//     const product = await newProduct.save()
//     res.status(201).json(product)
//   } catch (err) {
//     console.error("Error creating product:", err.message)
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   PUT api/products/:id
// // @desc    Update a product
// // @access  Private (Admin only)
// router.put("/:id", adminAuth, async (req, res) => {
//   try {
//     const {
//       name,
//       model,
//       category,
//       price,
//       frequency,
//       power,
//       vswr,
//       connector,
//       peakPower,
//       inStock,
//       description,
//       applications,
//       images,
//       datasheet,
//       specifications,
//       featured,
//     } = req.body

//     // Find product
//     const product = await Product.findById(req.params.id)
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" })
//     }

//     // Update fields
//     product.name = name || product.name
//     product.model = model || product.model
//     product.category = category || product.category
//     product.price = price !== undefined ? (price ? Number.parseFloat(price) : null) : product.price
//     product.frequency = frequency || product.frequency
//     product.power = power || product.power
//     product.vswr = vswr || product.vswr
//     product.connector = connector || product.connector
//     product.peakPower = peakPower || product.peakPower
//     product.inStock = inStock !== undefined ? (inStock === true || inStock === "true") : product.inStock
//     product.description = description || product.description
//     product.applications = applications || product.applications
//     product.images = images || product.images
//     product.datasheet = datasheet || product.datasheet
//     product.specifications = specifications || product.specifications
//     product.featured = featured !== undefined ? (featured === true || featured === "true") : product.featured

//     // Save updated product
//     const updatedProduct = await product.save()
//     res.json(updatedProduct)
//   } catch (err) {
//     console.error("Error updating product:", err.message)
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// // @route   DELETE api/products/:id
// // @desc    Delete a product
// // @access  Private (Admin only)
// router.delete("/:id", adminAuth, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id)
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" })
//     }

//     // Delete product from database
//     await product.deleteOne()
//     res.json({ message: "Product removed" })
//   } catch (err) {
//     console.error("Error deleting product:", err.message)
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ message: "Product not found" })
//     }
//     res.status(500).json({ message: "Server Error" })
//   }
// })

// module.exports = router


const express = require("express")
const router = express.Router()
const Product = require("../models/Product")
const { auth, adminAuth } = require("../middleware/auth")

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, search, sort, limit = 20, page = 1 } = req.query
    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    const query = {}
    if (category) {
      query.category = category
    }
    if (search) {
      query.$or = [{ name: { $regex: search, $options: "i" } }, { model: { $regex: search, $options: "i" } }]
    }

    let sortOptions = {}
    if (sort) {
      switch (sort) {
        case "price-asc":
          sortOptions = { price: 1 }
          break
        case "price-desc":
          sortOptions = { price: -1 }
          break
        case "newest":
          sortOptions = { createdAt: -1 }
          break
        case "name-asc":
          sortOptions = { name: 1 }
          break
        default:
          sortOptions = { createdAt: -1 }
      }
    } else {
      sortOptions = { createdAt: -1 }
    }

    const total = await Product.countDocuments(query)
    const products = await Product.find(query).sort(sortOptions).skip(skip).limit(Number.parseInt(limit))

    res.json({
      products,
      pagination: {
        total,
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        pages: Math.ceil(total / Number.parseInt(limit)),
      },
    })
  } catch (err) {
    console.error("Error fetching products:", err.message)
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   GET api/products/categories
// @desc    Get all product categories
// @access  Public
router.get("/categories", async (req, res) => {
  try {
    const categories = await Product.distinct("category")
    res.json(categories)
  } catch (err) {
    console.error("Error fetching categories:", err.message)
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   GET api/products/featured
// @desc    Get featured products
// @access  Public
router.get("/featured", async (req, res) => {
  try {
    let products = await Product.find({ featured: true }).limit(8)
    if (products.length < 8) {
      const additionalProducts = await Product.aggregate([
        { $match: { featured: { $ne: true } } },
        { $sample: { size: 8 - products.length } },
      ])
      products = [...products, ...additionalProducts]
    }
    res.json(products)
  } catch (err) {
    console.error("Error fetching featured products:", err.message)
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   GET api/products/category/:category
// @desc    Get products by category
// @access  Public
router.get("/category/:category", async (req, res) => {
  try {
    const { sort, limit = 20, page = 1 } = req.query
    const skip = (Number.parseInt(page) - 1) * Number.parseInt(limit)

    let sortOptions = {}
    if (sort) {
      switch (sort) {
        case "price-asc":
          sortOptions = { price: 1 }
          break
        case "price-desc":
          sortOptions = { price: -1 }
          break
        case "newest":
          sortOptions = { createdAt: -1 }
          break
        case "name-asc":
          sortOptions = { name: 1 }
          break
        default:
          sortOptions = { createdAt: -1 }
      }
    } else {
      sortOptions = { createdAt: -1 }
    }

    const total = await Product.countDocuments({ category: req.params.category })
    const products = await Product.find({ category: req.params.category })
      .sort(sortOptions)
      .skip(skip)
      .limit(Number.parseInt(limit))

    res.json({
      products,
      pagination: {
        total,
        page: Number.parseInt(page),
        limit: Number.parseInt(limit),
        pages: Math.ceil(total / Number.parseInt(limit)),
      },
    })
  } catch (err) {
    console.error("Error fetching products by category:", err.message)
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   GET api/products/related/:id
// @desc    Get related products (all products in the same category)
// @access  Public
router.get("/related/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    const relatedProducts = await Product.find({
      category: product.category,
      _id: { $ne: product._id },
    }) // Removed .limit(4) to fetch all products in the same category
    res.json(relatedProducts)
  } catch (err) {
    console.error("Error fetching related products:", err.message)
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.json(product)
  } catch (err) {
    console.error("Error fetching product:", err.message)
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   POST api/products
// @desc    Create a product
// @access  Private (Admin only)
router.post("/", adminAuth, async (req, res) => {
  try {
    const {
      name,
      model,
      category,
      price,
      frequency,
      power,
      vswr,
      connector,
      peakPower,
      inStock,
      stockQuantity,
      description,
      applications,
      images,
      datasheet,
      specifications,
      featured,
    } = req.body

    // Validate required fields
    if (!name || !model || !category) {
      return res.status(400).json({ message: "Name, model, and category are required" })
    }

    // Create new product
    const newProduct = new Product({
      name,
      model,
      category,
      price: price ? Number.parseFloat(price) : null,
      frequency,
      power,
      vswr,
      connector,
      peakPower,
      inStock: inStock === true || inStock === "true",
      stockQuantity: stockQuantity ? Number.parseInt(stockQuantity) : 0,
      description,
      applications,
      images: images || [],
      datasheet,
      specifications: specifications || [],
      featured: featured === true || featured === "true",
    })

    // Save product
    const product = await newProduct.save()
    res.status(201).json(product)
  } catch (err) {
    console.error("Error creating product:", err.message)
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   PUT api/products/:id
// @desc    Update a product
// @access  Private (Admin only)
router.put("/:id", adminAuth, async (req, res) => {
  try {
    const {
      name,
      model,
      category,
      price,
      frequency,
      power,
      vswr,
      connector,
      peakPower,
      inStock,
      stockQuantity,
      description,
      applications,
      images,
      datasheet,
      specifications,
      featured,
    } = req.body

    // Find product
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // Update fields
    product.name = name || product.name
    product.model = model || product.model
    product.category = category || product.category
    product.price = price !== undefined ? (price ? Number.parseFloat(price) : null) : product.price
    product.frequency = frequency || product.frequency
    product.power = power || product.power
    product.vswr = vswr || product.vswr
    product.connector = connector || product.connector
    product.peakPower = peakPower || product.peakPower
    product.inStock = inStock !== undefined ? (inStock === true || inStock === "true") : product.inStock
    product.stockQuantity = stockQuantity !== undefined ? Number.parseInt(stockQuantity) : product.stockQuantity
    product.description = description || product.description
    product.applications = applications || product.applications
    product.images = images || product.images
    product.datasheet = datasheet || product.datasheet
    product.specifications = specifications || product.specifications
    product.featured = featured !== undefined ? (featured === true || featured === "true") : product.featured

    // Save updated product
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } catch (err) {
    console.error("Error updating product:", err.message)
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(500).json({ message: "Server Error" })
  }
})

// @route   DELETE api/products/:id
// @desc    Delete a product
// @access  Private (Admin only)
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    // Delete product from database
    await product.deleteOne()
    res.json({ message: "Product removed" })
  } catch (err) {
    console.error("Error deleting product:", err.message)
    if (err.kind === "ObjectId") {
      return res.status(404).json({ message: "Product not found" })
    }
    res.status(500).json({ message: "Server Error" })
  }
})

module.exports = router