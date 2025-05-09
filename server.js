// // // // const express = require("express")
// // // // const mongoose = require("mongoose")
// // // // const cors = require("cors")
// // // // const path = require("path")
// // // // const dotenv = require("dotenv")
// // // // const productRoutes = require("./routes/productRoutes")
// // // // const requestRoutes = require("./routes/requestRoutes")
// // // // const userRoutes = require("./routes/userRoutes")

// // // // // Load environment variables
// // // // dotenv.config()

// // // // const app = express()
// // // // const PORT = process.env.PORT || 5000

// // // // // Middleware
// // // // app.use(cors())
// // // // app.use(express.json())

// // // // // Connect to MongoDB
// // // // mongoose
// // // //   .connect(process.env.MONGODB_URI || "mongodb+srv://mlrd:mlrddreamscloudtech@cluster0.yzhly.mongodb.net/", {
// // // //     useNewUrlParser: true,
// // // //     useUnifiedTopology: true,
// // // //   })
// // // //   .then(() => console.log("MongoDB connected"))
// // // //   .catch((err) => console.error("MongoDB connection error:", err))

// // // // // API Routes
// // // // app.use("/api/products", productRoutes)
// // // // app.use("/api/requests", requestRoutes)
// // // // app.use("/api/users", userRoutes)

// // // // // Serve static assets if in production
// // // // if (process.env.NODE_ENV === "production") {
// // // //   // Set static folder
// // // //   app.use(express.static(path.join(__dirname, "../client/build")))

// // // //   app.get("*", (req, res) => {
// // // //     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// // // //   })
// // // // }

// // // // app.listen(PORT, () => {
// // // //   console.log(`Server running on port ${PORT}`)
// // // // })


// // // const express = require("express")
// // // const mongoose = require("mongoose")
// // // const cors = require("cors")
// // // const path = require("path")
// // // const dotenv = require("dotenv")
// // // const productRoutes = require("./routes/productRoutes")
// // // const requestRoutes = require("./routes/requestRoutes")
// // // const userRoutes = require("./routes/userRoutes")
// // // const { createAdminUser } = require("./utils/seedAdmin")

// // // // Load environment variables
// // // dotenv.config()

// // // const app = express()
// // // const PORT = process.env.PORT || 5000

// // // // Middleware
// // // app.use(cors())
// // // app.use(express.json())

// // // // Serve uploaded files
// // // app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// // // // Connect to MongoDB
// // // mongoose
// // //   .connect(process.env.MONGODB_URI || "mongodb+srv://mlrd:mlrddreamscloudtech@cluster0.yzhly.mongodb.net/", {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // //   })
// // //   .then(() => {
// // //     console.log("MongoDB connected")
// // //     // Create admin user if it doesn't exist
// // //     createAdminUser()
// // //   })
// // //   .catch((err) => console.error("MongoDB connection error:", err))

// // // // API Routes
// // // app.use("/api/products", productRoutes)
// // // app.use("/api/requests", requestRoutes)
// // // app.use("/api/users", userRoutes)

// // // // Serve static assets if in production
// // // if (process.env.NODE_ENV === "production") {
// // //   // Set static folder
// // //   app.use(express.static(path.join(__dirname, "../client/build")))

// // //   app.get("*", (req, res) => {
// // //     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// // //   })
// // // }

// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`)
// // // })


// // const express = require("express")
// // const mongoose = require("mongoose")
// // const cors = require("cors")
// // const path = require("path")
// // const dotenv = require("dotenv")
// // const productRoutes = require("./routes/productRoutes")
// // const requestRoutes = require("./routes/requestRoutes")
// // const userRoutes = require("./routes/userRoutes")
// // const { createAdminUser } = require("./utils/seedAdmin")

// // // Load environment variables
// // dotenv.config()

// // const app = express()
// // const PORT = process.env.PORT || 5000

// // // Middleware
// // app.use(cors())
// // app.use(express.json())

// // // Serve uploaded files
// // app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// // // Connect to MongoDB
// // mongoose
// //   .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/waveguide-ecommerce", {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => {
// //     console.log("MongoDB connected")
// //     // Create admin user if it doesn't exist
// //     createAdminUser()
// //   })
// //   .catch((err) => console.error("MongoDB connection error:", err))

// // // API Routes
// // app.use("/api/products", productRoutes)
// // app.use("/api/requests", requestRoutes)
// // app.use("/api/users", userRoutes)

// // // Error handling middleware
// // app.use((err, req, res, next) => {
// //   console.error(err.stack)
// //   res.status(500).json({ message: "Something went wrong!", error: err.message })
// // })

// // // Serve static assets if in production
// // if (process.env.NODE_ENV === "production") {
// //   // Set static folder
// //   app.use(express.static(path.join(__dirname, "../client/build")))

// //   app.get("*", (req, res) => {
// //     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
// //   })
// // }

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`)
// // })


// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const path = require("path")
// const dotenv = require("dotenv")
// const productRoutes = require("./routes/productRoutes")
// const requestRoutes = require("./routes/requestRoutes")
// const userRoutes = require("./routes/userRoutes")
// const { createAdminUser } = require("./utils/seedAdmin")

// // Load environment variables
// dotenv.config()

// const app = express()
// const PORT = process.env.PORT || 5000

// // Middleware
// app.use(cors({
//   origin: "http://localhost:3000",
// }))

// app.use(express.json())

// // Serve uploaded files
// app.use("/uploads", express.static(path.join(__dirname, "uploads")))

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI || "mongodb+srv://mlrd:mlrddreamscloudtech@cluster0.yzhly.mongodb.net/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB connected")
//     // Create admin user if it doesn't exist
//     createAdminUser()
//   })
//   .catch((err) => console.error("MongoDB connection error:", err))

// // API Routes
// app.use("/api/products", productRoutes)
// app.use("/api/requests", requestRoutes)
// app.use("/api/users", userRoutes)

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack)
//   res.status(500).json({
//     message: "Something went wrong!",
//     error: process.env.NODE_ENV === "development" ? err.message : "Server Error",
//   })
// })

// // Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static(path.join(__dirname, "../client/build")))

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
//   })
// }

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const requestRoutes = require("./routes/requestRoutes");
const userRoutes = require("./routes/userRoutes");
const ContactInfo = require("./models/ContactInfo"); // Import the ContactInfo model
const { createAdminUser } = require("./utils/seedAdmin");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "abc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("MongoDB connected");
    // Create admin user if it doesn't exist
    await createAdminUser();
    // Seed contact info if it doesn't exist
    const contactInfoCount = await ContactInfo.countDocuments();
    if (contactInfoCount === 0) {
      const defaultContactInfo = new ContactInfo({});
      await defaultContactInfo.save();
      console.log("Default contact info seeded");
    }
  })
  .catch((err) => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/users", userRoutes);

// Contact Info Routes
// GET: Fetch contact info
app.get("/api/contact-info", async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findOne();
    if (!contactInfo) {
      return res.status(404).json({ message: "Contact info not found" });
    }
    res.json(contactInfo);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST: Save or update contact info
app.post("/api/contact-info", async (req, res) => {
  try {
    const { phoneNumbers, emailAddresses, availableTimings, aboutCompany } = req.body;
    let contactInfo = await ContactInfo.findOne();

    if (contactInfo) {
      // Update existing document
      contactInfo.phoneNumbers = phoneNumbers;
      contactInfo.emailAddresses = emailAddresses;
      contactInfo.availableTimings = availableTimings;
      contactInfo.aboutCompany = aboutCompany;
      contactInfo.updatedAt = Date.now();
    } else {
      // Create new document if none exists
      contactInfo = new ContactInfo({
        phoneNumbers,
        emailAddresses,
        availableTimings,
        aboutCompany,
      });
    }

    await contactInfo.save();
    res.status(200).json({ message: "Contact info saved successfully", contactInfo });
  } catch (error) {
    console.error("Error saving contact info:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === "development" ? err.message : "Server Error",
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});