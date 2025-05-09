// // // // // const mongoose = require("mongoose")

// // // // // const RequestSchema = new mongoose.Schema({
// // // // //   name: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   email: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   phone: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   company: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   address: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   city: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   state: {
// // // // //     type: String,
// // // // //     trim: true,
// // // // //   },
// // // // //   zip: {
// // // // //     type: String,
// // // // //     trim: true,
// // // // //   },
// // // // //   country: {
// // // // //     type: String,
// // // // //     required: true,
// // // // //     trim: true,
// // // // //   },
// // // // //   message: {
// // // // //     type: String,
// // // // //     trim: true,
// // // // //   },
// // // // //   items: [
// // // // //     {
// // // // //       id: {
// // // // //         type: String,
// // // // //         required: true,
// // // // //       },
// // // // //       name: {
// // // // //         type: String,
// // // // //         required: true,
// // // // //       },
// // // // //       model: {
// // // // //         type: String,
// // // // //         required: true,
// // // // //       },
// // // // //       quantity: {
// // // // //         type: Number,
// // // // //         required: true,
// // // // //         min: 1,
// // // // //       },
// // // // //     },
// // // // //   ],
// // // // //   status: {
// // // // //     type: String,
// // // // //     enum: ["pending", "approved", "rejected", "completed"],
// // // // //     default: "pending",
// // // // //   },
// // // // //   date: {
// // // // //     type: Date,
// // // // //     default: Date.now,
// // // // //   },
// // // // // })

// // // // // module.exports = mongoose.model("Request", RequestSchema)

// // // // const mongoose = require("mongoose")

// // // // const RequestSchema = new mongoose.Schema({
// // // //   name: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   email: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   phone: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   company: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   address: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   city: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   state: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   zip: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   country: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   message: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   items: [
// // // //     {
// // // //       productId: {
// // // //         type: mongoose.Schema.Types.ObjectId,
// // // //         ref: "Product",
// // // //         required: true,
// // // //       },
// // // //       name: {
// // // //         type: String,
// // // //         required: true,
// // // //       },
// // // //       model: {
// // // //         type: String,
// // // //         required: true,
// // // //       },
// // // //       quantity: {
// // // //         type: Number,
// // // //         required: true,
// // // //         min: 1,
// // // //       },
// // // //       price: {
// // // //         type: Number,
// // // //         default: null,
// // // //       },
// // // //     },
// // // //   ],
// // // //   status: {
// // // //     type: String,
// // // //     enum: ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"],
// // // //     default: "pending",
// // // //   },
// // // //   statusHistory: [
// // // //     {
// // // //       status: {
// // // //         type: String,
// // // //         enum: ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"],
// // // //       },
// // // //       date: {
// // // //         type: Date,
// // // //         default: Date.now,
// // // //       },
// // // //       note: String,
// // // //     },
// // // //   ],
// // // //   requestNumber: {
// // // //     type: String,
// // // //     unique: true,
// // // //   },
// // // //   userId: {
// // // //     type: mongoose.Schema.Types.ObjectId,
// // // //     ref: "User",
// // // //   },
// // // //   date: {
// // // //     type: Date,
// // // //     default: Date.now,
// // // //   },
// // // //   updatedAt: {
// // // //     type: Date,
// // // //     default: Date.now,
// // // //   },
// // // // })

// // // // // Generate a unique request number before saving
// // // // RequestSchema.pre("save", async function (next) {
// // // //   this.updatedAt = Date.now()

// // // //   // Only generate request number for new documents
// // // //   if (!this.requestNumber) {
// // // //     try {
// // // //       // Get the count of all requests and add 1
// // // //       const count = await mongoose.model("Request").countDocuments()
// // // //       // Format: REQ-YYYYMMDD-XXXX (year, month, day, sequential number)
// // // //       const date = new Date()
// // // //       const dateStr =
// // // //         date.getFullYear().toString() +
// // // //         (date.getMonth() + 1).toString().padStart(2, "0") +
// // // //         date.getDate().toString().padStart(2, "0")
// // // //       this.requestNumber = `REQ-${dateStr}-${(count + 1).toString().padStart(4, "0")}`

// // // //       // Add initial status to history
// // // //       if (this.isNew) {
// // // //         this.statusHistory = [
// // // //           {
// // // //             status: this.status,
// // // //             date: new Date(),
// // // //             note: "Request created",
// // // //           },
// // // //         ]
// // // //       }

// // // //       next()
// // // //     } catch (error) {
// // // //       next(error)
// // // //     }
// // // //   } else {
// // // //     next()
// // // //   }
// // // // })

// // // // module.exports = mongoose.model("Request", RequestSchema)

// // // // const mongoose = require("mongoose")

// // // // const RequestSchema = new mongoose.Schema({
// // // //   name: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   email: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   phone: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   company: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   address: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   city: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   state: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   zip: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   country: {
// // // //     type: String,
// // // //     required: true,
// // // //     trim: true,
// // // //   },
// // // //   message: {
// // // //     type: String,
// // // //     trim: true,
// // // //   },
// // // //   items: [
// // // //     {
// // // //       id: {
// // // //         type: String,
// // // //         required: true,
// // // //       },
// // // //       name: {
// // // //         type: String,
// // // //         required: true,
// // // //       },
// // // //       model: {
// // // //         type: String,
// // // //         required: true,
// // // //       },
// // // //       quantity: {
// // // //         type: Number,
// // // //         required: true,
// // // //         min: 1,
// // // //       },
// // // //       price: {
// // // //         type: Number,
// // // //         default: null,
// // // //       },
// // // //       image: {
// // // //         type: String,
// // // //         default: null,
// // // //       },
// // // //     },
// // // //   ],
// // // //   status: {
// // // //     type: String,
// // // //     enum: ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"],
// // // //     default: "pending",
// // // //   },
// // // //   statusHistory: [
// // // //     {
// // // //       status: {
// // // //         type: String,
// // // //         enum: ["pending", "approved", "processing", "shipped", "delivered", "rejected", "cancelled"],
// // // //       },
// // // //       date: {
// // // //         type: Date,
// // // //         default: Date.now,
// // // //       },
// // // //       note: String,
// // // //     },
// // // //   ],
// // // //   requestNumber: {
// // // //     type: String,
// // // //     unique: true,
// // // //   },
// // // //   userId: {
// // // //     type: mongoose.Schema.Types.ObjectId,
// // // //     ref: "User",
// // // //   },
// // // //   date: {
// // // //     type: Date,
// // // //     default: Date.now,
// // // //   },
// // // //   updatedAt: {
// // // //     type: Date,
// // // //     default: Date.now,
// // // //   },
// // // //   totalAmount: {
// // // //     type: Number,
// // // //     default: 0,
// // // //   },
// // // // })

// // // // // Generate a unique request number before saving
// // // // RequestSchema.pre("save", async function (next) {
// // // //   this.updatedAt = Date.now()

// // // //   // Calculate total amount
// // // //   if (this.items && this.items.length > 0) {
// // // //     this.totalAmount = this.items?.reduce((total, item) => {
// // // //       return total + (item.price || 0) * item.quantity
// // // //     }, 0)
// // // //   }

// // // //   // Only generate request number for new documents
// // // //   if (!this.requestNumber) {
// // // //     try {
// // // //       // Get the count of all requests and add 1
// // // //       const count = await mongoose.model("Request").countDocuments()
// // // //       // Format: REQ-YYYYMMDD-XXXX (year, month, day, sequential number)
// // // //       const date = new Date()
// // // //       const dateStr =
// // // //         date.getFullYear().toString() +
// // // //         (date.getMonth() + 1).toString().padStart(2, "0") +
// // // //         date.getDate().toString().padStart(2, "0")
// // // //       this.requestNumber = `REQ-${dateStr}-${(count + 1).toString().padStart(4, "0")}`

// // // //       // Add initial status to history
// // // //       if (this.isNew) {
// // // //         this.statusHistory = [
// // // //           {
// // // //             status: this.status,
// // // //             date: new Date(),
// // // //             note: "Request created",
// // // //           },
// // // //         ]
// // // //       }

// // // //       next()
// // // //     } catch (error) {
// // // //       next(error)
// // // //     }
// // // //   } else {
// // // //     next()
// // // //   }
// // // // })

// // // // module.exports = mongoose.model("Request", RequestSchema)




// // // const mongoose = require("mongoose")

// // // const RequestSchema = new mongoose.Schema({
// // //   name: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   email: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   phone: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   company: {
// // //     type: String,
// // //     required: true,
// // //     trim: true,
// // //   },
// // //   message: {
// // //     type: String,
// // //     trim: true,
// // //   },
// // //   products: [
// // //     {
// // //       id: {
// // //         type: String,
// // //         required: true,
// // //       },
// // //       name: {
// // //         type: String,
// // //         required: true,
// // //       },
// // //       quantity: {
// // //         type: Number,
// // //         required: true,
// // //         min: 1,
// // //       },
// // //       price: {
// // //         type: Number,
// // //         required: true,
// // //       },
// // //       category: {
// // //         type: String,
// // //         required: true,
// // //       },
// // //     },
// // //   ],
// // //   totalAmount: {
// // //     type: Number,
// // //     required: true,
// // //   },
// // //   status: {
// // //     type: String,
// // //     enum: ["pending", "processing", "completed", "cancelled"],
// // //     default: "pending",
// // //   },
// // //   date: {
// // //     type: Date,
// // //     default: Date.now,
// // //   },
// // //   updatedAt: {
// // //     type: Date,
// // //     default: Date.now,
// // //   },
// // // })

// // // // Update totalAmount and updatedAt before saving
// // // RequestSchema.pre("save", async function (next) {
// // //   this.updatedAt = Date.now()

// // //   // Calculate total amount
// // //   if (this.products && this.products.length > 0) {
// // //     this.totalAmount = this.products.reduce((total, product) => {
// // //       return total + (product.price || 0) * product.quantity
// // //     }, 0)
// // //   }

// // //   next()
// // // })

// // // module.exports = mongoose.model("Request", RequestSchema)

// // const mongoose = require("mongoose");

// // const requestSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   phone: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   company: {
// //     type: String,
// //     required: true,
// //     trim: true,
// //   },
// //   message: {
// //     type: String,
// //     trim: true,
// //   },
// //   products: [
// //     {
// //       id: {
// //         type: String,
// //         required: true,
// //       },
// //       name: {
// //         type: String,
// //         required: true,
// //       },
// //       quantity: {
// //         type: Number,
// //         required: true,
// //       },
// //       price: {
// //         type: Number,
// //         required: true,
// //       },
// //       category: {
// //         type: String,
// //         required: true,
// //       },
// //       image: {
// //         type: String,
// //         required: false, // Image URL for the product
// //       },
// //     },

// //   ],
// //   totalAmount: {
// //     type: Number,
// //     required: true,
// //   },
// //   status: {
// //     type: String,
// //     enum: ["pending", "processing", "completed", "cancelled"],
// //     default: "pending",
// //   },
// //   date: {
// //     type: Date,
// //     default: Date.now,
// //   },
// //   updatedAt: {
// //     type: Date,
// //     default: Date.now,
// //   },
// // });

// // // Middleware to update the `updatedAt` field on save
// // requestSchema.pre("save", function (next) {
// //   this.updatedAt = Date.now();
// //   next();
// // });

// // module.exports = mongoose.model("Request", requestSchema);


const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  products: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: false, // Image URL for the product
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "completed", "cancelled"],
    default: "pending",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // Optional, but will be set when a user is associated
  },
});

// Middleware to update the `updatedAt` field on save
requestSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Request", requestSchema);


// const mongoose = require("mongoose");

// const RequestSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   phone: {
//     type: String,
//     trim: true,
//   },
//   company: {
//     type: String,
//     trim: true,
//   },
//   message: {
//     type: String,
//     trim: true,
//   },
//   products: [
//     {
//       id: {
//         type: String,
//         required: true,
//       },
//       quantity: {
//         type: Number,
//         required: true,
//       },
//     },
//   ],
//   totalAmount: {
//     type: Number,
//     default: 0,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "processing", "completed", "cancelled"],
//     default: "pending",
//   },
//   notes: {
//     type: String,
//     trim: true,
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
//   stockAdjusted: {
//     type: Boolean,
//     default: false, // Tracks if stock has been adjusted for "completed" status
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// // Update the updatedAt field before saving
// RequestSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// module.exports = mongoose.model("Request", RequestSchema);