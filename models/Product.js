// // // const mongoose = require("mongoose")

// // // const ProductSchema = new mongoose.Schema({
// // //   name: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   model: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   category: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   price: {
// // //     type: Number,
// // //     default: null,
// // //   },
// // //   frequency: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   power: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   vswr: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   connector: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   peakPower: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   inStock: {
// // //     type: Boolean,
// // //     default: true,
// // //   },
// // //   description: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   applications: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   images: [String],
// // //   datasheet: {
// // //     type: String,
// // //     default: null,
// // //   },
// // //   createdAt: {
// // //     type: Date,
// // //     default: Date.now,
// // //   },
// // // })

// // // module.exports = mongoose.model("Product", ProductSchema)

// // const mongoose = require("mongoose")

// // const ProductSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   model: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   category: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   price: {
// //     type: Number,
// //     default: null,
// //   },
// //   frequency: {
// //     type: String,
// //     trim: true,
// //   },
// //   power: {
// //     type: String,
// //     trim: true,
// //   },
// //   vswr: {
// //     type: String,
// //     trim: true,
// //   },
// //   connector: {
// //     type: String,
// //     trim: true,
// //   },
// //   peakPower: {
// //     type: String,
// //     trim: true,
// //   },
// //   inStock: {
// //     type: Boolean,
// //     default: true,
// //   },
// //   description: {
// //     type: String,
// //     trim: true,
// //   },
// //   applications: {
// //     type: String,
// //     trim: true,
// //   },
// //   images: [String],
// //   datasheet: {
// //     type: String,
// //     default: null,
// //   },
// //   specifications: [
// //     {
// //       name: String,
// //       value: String,
// //     },
// //   ],
// //   createdAt: {
// //     type: Date,
// //     default: Date.now,
// //   },
// //   updatedAt: {
// //     type: Date,
// //     default: Date.now,
// //   },
// // })

// // // Update the updatedAt field before saving
// // ProductSchema.pre("save", function (next) {
// //   this.updatedAt = Date.now()
// //   next()
// // })

// // module.exports = mongoose.model("Product", ProductSchema)

// const mongoose = require("mongoose")

// const ProductSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   model: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   price: {
//     type: Number,
//     default: null,
//   },
//   frequency: {
//     type: String,
//     trim: true,
//   },
//   power: {
//     type: String,
//     trim: true,
//   },
//   vswr: {
//     type: String,
//     trim: true,
//   },
//   connector: {
//     type: String,
//     trim: true,
//   },
//   peakPower: {
//     type: String,
//     trim: true,
//   },
//   inStock: {
//     type: Boolean,
//     default: true,
//   },
//   description: {
//     type: String,
//     trim: true,
//   },
//   applications: {
//     type: String,
//     trim: true,
//   },
//   images: [String],
//   datasheet: {
//     type: String,
//     default: null,
//   },
//   specifications: [
//     {
//       name: String,
//       value: String,
//     },
//   ],
//   featured: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// })

// // Update the updatedAt field before saving
// ProductSchema.pre("save", function (next) {
//   this.updatedAt = Date.now()
//   next()
// })

// module.exports = mongoose.model("Product", ProductSchema)

const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    default: null,
  },
  frequency: {
    type: String,
    trim: true,
  },
  power: {
    type: String,
    trim: true,
  },
  vswr: {
    type: String,
    trim: true,
  },
  connector: {
    type: String,
    trim: true,
  },
  peakPower: {
    type: String,
    trim: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0, // Ensure stock quantity cannot be negative
  },
  description: {
    type: String,
    trim: true,
  },
  applications: {
    type: String,
    trim: true,
  },
  images: [String],
  datasheet: {
    type: String,
    default: null,
  },
  specifications: [
    {
      name: String,
      value: String,
    },
  ],
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Update the updatedAt field before saving
ProductSchema.pre("save", function (next) {
  this.updatedAt = Date.now()
  next()
})

module.exports = mongoose.model("Product", ProductSchema)