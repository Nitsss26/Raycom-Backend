// // const mongoose = require("mongoose")
// // const Product = require("../models/Product")
// // const User = require("../models/User")
// // const Request = require("../models/Request")
// // const dotenv = require("dotenv")

// // // Load environment variables
// // dotenv.config()

// // // Sample product data
// // const sampleProducts = [
// //     {
// //         name: "WG Attenuator DC-4",
// //         model: "VT040CHPL1000N",
// //         category: "attenuator",
// //         price: 299.99,
// //         frequency: "DC-4",
// //         power: "1000",
// //         vswr: "1.4",
// //         connector: "N/7/16,L27",
// //         peakPower: "10",
// //         inStock: true,
// //         description:
// //             "High-performance waveguide attenuator designed for DC-4 GHz frequency range with 1000W power handling capability. Features precision machined components and gold-plated contacts for superior performance and reliability.",
// //         applications:
// //             "Ideal for telecommunications, defense systems, and radar applications requiring precise signal attenuation. Commonly used in satellite ground stations, cellular base stations, and military communication systems.",
// //         images: ["/uploads/products/attenuator-1.jpg", "/uploads/products/attenuator-2.jpg"],
// //         specifications: [
// //             { name: "Frequency Range", value: "DC-4 GHz" },
// //             { name: "Power Handling", value: "1000W" },
// //             { name: "VSWR", value: "1.4:1 max" },
// //             { name: "Insertion Loss", value: "0.5 dB max" },
// //             { name: "Temperature Range", value: "-55°C to +85°C" },
// //         ],
// //     },
// //     {
// //         name: "WG Circulator DC-2",
// //         model: "VT020CHPL2000N",
// //         category: "circulator",
// //         price: 449.99,
// //         frequency: "DC-2",
// //         power: "2000",
// //         vswr: "1.3",
// //         connector: "N/7/16,L27",
// //         peakPower: "50",
// //         inStock: true,
// //         description:
// //             "Premium waveguide circulator with excellent isolation characteristics for DC-2 GHz applications. Engineered with high-quality ferrite materials for optimal performance across the entire frequency band.",
// //         applications:
// //             "Suitable for high-power RF systems, communication networks, and laboratory testing environments. Provides essential signal routing in radar systems, satellite communications, and broadcast transmitters.",
// //         images: ["/uploads/products/circulator-1.jpg"],
// //         specifications: [
// //             { name: "Frequency Range", value: "DC-2 GHz" },
// //             { name: "Power Handling", value: "2000W" },
// //             { name: "VSWR", value: "1.3:1 max" },
// //             { name: "Isolation", value: "20 dB min" },
// //             { name: "Insertion Loss", value: "0.4 dB max" },
// //         ],
// //     },
// //     {
// //         name: "WG Isolator DC-2",
// //         model: "VT020CHPL3000L27",
// //         category: "isolator",
// //         price: 399.99,
// //         frequency: "DC-2",
// //         power: "3000",
// //         vswr: "1.5",
// //         connector: "N/7/16,L27",
// //         peakPower: "50",
// //         inStock: false,
// //         description:
// //             "High-isolation waveguide isolator providing excellent protection for sensitive RF components. Features advanced ferrite technology for superior isolation performance and low insertion loss.",
// //         applications:
// //             "Used in radar systems, satellite communications, and high-power transmitters to prevent signal reflection. Essential for protecting expensive amplifiers and oscillators from harmful reflected power.",
// //         images: ["/uploads/products/isolator-1.jpg", "/uploads/products/isolator-2.jpg"],
// //         specifications: [
// //             { name: "Frequency Range", value: "DC-2 GHz" },
// //             { name: "Power Handling", value: "3000W" },
// //             { name: "VSWR", value: "1.5:1 max" },
// //             { name: "Isolation", value: "22 dB min" },
// //             { name: "Insertion Loss", value: "0.5 dB max" },
// //         ],
// //     },
// //     // Add more sample products here...
// // ]

// // // Sample user data
// // const sampleUsers = [
// //     {
// //         username: "user1",
// //         email: "user1@example.com",
// //         password: "password123",
// //         firstName: "John",
// //         lastName: "Doe",
// //         company: "Tech Solutions Inc.",
// //         phone: "555-123-4567",
// //         role: "user",
// //         address: {
// //             street: "123 Main St",
// //             city: "Tech City",
// //             state: "TS",
// //             zip: "12345",
// //             country: "USA",
// //         },
// //     },
// //     {
// //         username: "user2",
// //         email: "user2@example.com",
// //         password: "password123",
// //         firstName: "Jane",
// //         lastName: "Smith",
// //         company: "RF Systems Ltd.",
// //         phone: "555-987-6543",
// //         role: "user",
// //         address: {
// //             street: "456 Oak Ave",
// //             city: "RF City",
// //             state: "RF",
// //             zip: "67890",
// //             country: "USA",
// //         },
// //     },
// // ]

// // // Function to seed data
// // const seedData = async () => {
// //     try {
// //         // Connect to MongoDB
// //         await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/waveguide-ecommerce", {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         })

// //         console.log("MongoDB connected for seeding")

// //         // Clear existing data
// //         await Product.deleteMany({})
// //         console.log("Products collection cleared")

// //         // Don't clear users to preserve admin account
// //         // await User.deleteMany({});
// //         // console.log("Users collection cleared");

// //         await Request.deleteMany({})
// //         console.log("Requests collection cleared")

// //         // Insert sample products
// //         const createdProducts = await Product.insertMany(sampleProducts)
// //         console.log(`${createdProducts.length} products inserted`)

// //         // Insert sample users
// //         const createdUsers = []
// //         for (const user of sampleUsers) {
// //             const newUser = new User(user)
// //             await newUser.save()
// //             createdUsers.push(newUser)
// //         }
// //         console.log(`${createdUsers.length} users inserted`)

// //         // Create sample requests
// //         const sampleRequests = [
// //             {
// //                 name: "Name",
// //                 email: "john.doe@example.com",
// //                 phone: "555-123-4567",
// //                 company: "Tech Solutions Inc.",
// //                 address: "123 Main St",
// //                 city: "Tech City",
// //                 state: "TS",
// //                 zip: "12345",
// //                 country: "USA",
// //                 message: "Need these components for a new project",
// //                 items: [
// //                     {
// //                         productId: createdProducts[0]._id,
// //                         name: createdProducts[0].name,
// //                         model: createdProducts[0].model,
// //                         quantity: 2,
// //                         price: createdProducts[0].price,
// //                     },
// //                     {
// //                         productId: createdProducts[1]._id,
// //                         name: createdProducts[1].name,
// //                         model: createdProducts[1].model,
// //                         quantity: 1,
// //                         price: createdProducts[1].price,
// //                     },
// //                 ],
// //                 status: "pending",
// //                 userId: createdUsers[0]._id,
// //                 statusHistory: [
// //                     {
// //                         status: "pending",
// //                         date: new Date(),
// //                         note: "Request created",
// //                     },
// //                 ],
// //             },
// //             {
// //                 name: "Jane Smith",
// //                 email: "jane.smith@example.com",
// //                 phone: "555-987-6543",
// //                 company: "RF Systems Ltd.",
// //                 address: "456 Oak Ave",
// //                 city: "RF City",
// //                 state: "RF",
// //                 zip: "67890",
// //                 country: "USA",
// //                 message: "Urgent order for government project",
// //                 items: [
// //                     {
// //                         productId: createdProducts[2]._id,
// //                         name: createdProducts[2].name,
// //                         model: createdProducts[2].model,
// //                         quantity: 3,
// //                         price: createdProducts[2].price,
// //                     },
// //                 ],
// //                 status: "approved",
// //                 userId: createdUsers[1]._id,
// //                 statusHistory: [
// //                     {
// //                         status: "pending",
// //                         date: new Date(Date.now() - 86400000), // 1 day ago
// //                         note: "Request created",
// //                     },
// //                     {
// //                         status: "approved",
// //                         date: new Date(),
// //                         note: "Approved by admin",
// //                     },
// //                 ],
// //             },
// //         ]

// //         const createdRequests = await Request.insertMany(sampleRequests)
// //         console.log(`${createdRequests.length} requests inserted`)

// //         console.log("Data seeding completed successfully")

// //         // Disconnect from MongoDB
// //         await mongoose.disconnect()
// //         console.log("MongoDB disconnected after seeding")

// //         process.exit(0)
// //     } catch (error) {
// //         console.error("Error seeding data:", error)
// //         process.exit(1)
// //     }
// // }

// // // Run the seed function
// // seedData()

// const mongoose = require("mongoose")
// const Product = require("../models/Product")
// const User = require("../models/User")
// const Request = require("../models/Request")
// const dotenv = require("dotenv")
// const bcrypt = require("bcryptjs")

// // Load environment variables
// dotenv.config()

// // Sample product data
// const sampleProducts = [
//     {
//         name: "WG Attenuator DC-4",
//         model: "VT040CHPL1000N",
//         category: "attenuator",
//         price: 299.99,
//         frequency: "DC-4",
//         power: "1000",
//         vswr: "1.4",
//         connector: "N/7/16,L27",
//         peakPower: "10",
//         inStock: true,
//         description:
//             "High-performance waveguide attenuator designed for DC-4 GHz frequency range with 1000W power handling capability. Features precision machined components and gold-plated contacts for superior performance and reliability.",
//         applications:
//             "Ideal for telecommunications, defense systems, and radar applications requiring precise signal attenuation. Commonly used in satellite ground stations, cellular base stations, and military communication systems.",
//         images: ["/uploads/products/attenuator-1.jpg", "/uploads/products/attenuator-2.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "DC-4 GHz" },
//             { name: "Power Handling", value: "1000W" },
//             { name: "VSWR", value: "1.4:1 max" },
//             { name: "Insertion Loss", value: "0.5 dB max" },
//             { name: "Temperature Range", value: "-55°C to +85°C" },
//         ],
//     },
//     {
//         name: "WG Circulator DC-2",
//         model: "VT020CHPL2000N",
//         category: "circulator",
//         price: 449.99,
//         frequency: "DC-2",
//         power: "2000",
//         vswr: "1.3",
//         connector: "N/7/16,L27",
//         peakPower: "50",
//         inStock: true,
//         description:
//             "Premium waveguide circulator with excellent isolation characteristics for DC-2 GHz applications. Engineered with high-quality ferrite materials for optimal performance across the entire frequency band.",
//         applications:
//             "Suitable for high-power RF systems, communication networks, and laboratory testing environments. Provides essential signal routing in radar systems, satellite communications, and broadcast transmitters.",
//         images: ["/uploads/products/circulator-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "DC-2 GHz" },
//             { name: "Power Handling", value: "2000W" },
//             { name: "VSWR", value: "1.3:1 max" },
//             { name: "Isolation", value: "20 dB min" },
//             { name: "Insertion Loss", value: "0.4 dB max" },
//         ],
//     },
//     {
//         name: "WG Isolator DC-2",
//         model: "VT020CHPL3000L27",
//         category: "isolator",
//         price: 399.99,
//         frequency: "DC-2",
//         power: "3000",
//         vswr: "1.5",
//         connector: "N/7/16,L27",
//         peakPower: "50",
//         inStock: false,
//         description:
//             "High-isolation waveguide isolator providing excellent protection for sensitive RF components. Features advanced ferrite technology for superior isolation performance and low insertion loss.",
//         applications:
//             "Used in radar systems, satellite communications, and high-power transmitters to prevent signal reflection. Essential for protecting expensive amplifiers and oscillators from harmful reflected power.",
//         images: ["/uploads/products/isolator-1.jpg", "/uploads/products/isolator-2.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "DC-2 GHz" },
//             { name: "Power Handling", value: "3000W" },
//             { name: "VSWR", value: "1.5:1 max" },
//             { name: "Isolation", value: "22 dB min" },
//             { name: "Insertion Loss", value: "0.5 dB max" },
//         ],
//     },
//     {
//         name: "WG Filter Band-Pass",
//         model: "VT-BPF-10GHz",
//         category: "filter",
//         price: 349.99,
//         frequency: "9.5-10.5",
//         power: "500",
//         vswr: "1.3",
//         connector: "WR-90",
//         peakPower: "1000",
//         inStock: true,
//         description:
//             "Precision band-pass filter designed for X-band applications with excellent out-of-band rejection. Features low insertion loss in the passband and steep skirts for optimal performance.",
//         applications:
//             "Ideal for radar systems, satellite communications, and test equipment requiring precise frequency selection. Used in military, aerospace, and research applications.",
//         images: ["/uploads/products/filter-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "9.5-10.5 GHz" },
//             { name: "Power Handling", value: "500W" },
//             { name: "VSWR", value: "1.3:1 max" },
//             { name: "Insertion Loss", value: "0.5 dB max" },
//             { name: "Rejection", value: "60 dB min at ±1 GHz" },
//         ],
//     },
//     {
//         name: "WG Coupler Directional",
//         model: "VT-DC-20dB",
//         category: "coupler",
//         price: 279.99,
//         frequency: "8-12",
//         power: "1000",
//         vswr: "1.2",
//         connector: "WR-90",
//         peakPower: "2000",
//         inStock: true,
//         description:
//             "High-performance directional coupler with 20dB coupling factor. Features excellent directivity and low insertion loss for accurate power monitoring and signal sampling.",
//         applications:
//             "Used in radar systems, communication networks, and test equipment for power monitoring, signal injection, and system calibration. Essential component in transmitter and receiver systems.",
//         images: ["/uploads/products/coupler-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "8-12 GHz" },
//             { name: "Coupling", value: "20 dB ±0.5 dB" },
//             { name: "Directivity", value: "30 dB min" },
//             { name: "VSWR", value: "1.2:1 max" },
//             { name: "Insertion Loss", value: "0.3 dB max" },
//         ],
//     },
//     {
//         name: "WG Switch SPDT",
//         model: "VT-SW-SPDT",
//         category: "switch",
//         price: 599.99,
//         frequency: "12-18",
//         power: "200",
//         vswr: "1.3",
//         connector: "WR-62",
//         peakPower: "500",
//         inStock: true,
//         description:
//             "Single-pole double-throw (SPDT) waveguide switch with fast switching time and high isolation. Features reliable electromechanical actuation and excellent RF performance.",
//         applications:
//             "Used in radar systems, electronic warfare, and test equipment for signal routing and antenna selection. Essential for systems requiring redundancy and signal path selection.",
//         images: ["/uploads/products/switch-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "12-18 GHz" },
//             { name: "Switching Time", value: "20 ms max" },
//             { name: "Isolation", value: "60 dB min" },
//             { name: "VSWR", value: "1.3:1 max" },
//             { name: "Insertion Loss", value: "0.3 dB max" },
//         ],
//     },
//     {
//         name: "WG Load High-Power",
//         model: "VT-LOAD-1KW",
//         category: "load",
//         price: 199.99,
//         frequency: "8-12",
//         power: "1000",
//         vswr: "1.1",
//         connector: "WR-90",
//         peakPower: "2000",
//         inStock: true,
//         description:
//             "High-power waveguide load designed for X-band applications. Features excellent VSWR and power handling capability with efficient heat dissipation.",
//         applications:
//             "Used in radar systems, communication networks, and test equipment for terminating unused ports and absorbing reflected power. Essential for system protection and performance optimization.",
//         images: ["/uploads/products/load-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "8-12 GHz" },
//             { name: "Power Handling", value: "1000W CW" },
//             { name: "VSWR", value: "1.1:1 max" },
//             { name: "Temperature Range", value: "-55°C to +125°C" },
//             { name: "Cooling", value: "Forced Air" },
//         ],
//     },
//     {
//         name: "WG Transition WR-90 to N",
//         model: "VT-TRANS-WR90-N",
//         category: "transition",
//         price: 149.99,
//         frequency: "8-12",
//         power: "500",
//         vswr: "1.2",
//         connector: "WR-90 to N-Female",
//         peakPower: "1000",
//         inStock: true,
//         description:
//             "Precision waveguide to coaxial transition from WR-90 to N-Female connector. Features low VSWR and insertion loss for optimal performance.",
//         applications:
//             "Used in radar systems, communication networks, and test equipment for interfacing between waveguide and coaxial systems. Essential for system integration and testing.",
//         images: ["/uploads/products/transition-1.jpg"],
//         specifications: [
//             { name: "Frequency Range", value: "8-12 GHz" },
//             { name: "Power Handling", value: "500W CW" },
//             { name: "VSWR", value: "1.2:1 max" },
//             { name: "Insertion Loss", value: "0.2 dB max" },
//             { name: "Temperature Range", value: "-55°C to +125°C" },
//         ],
//     },
// ]

// // Sample user data
// const sampleUsers = [
//     {
//         username: "user1",
//         email: "user1@example.com",
//         password: "password123",
//         firstName: "John",
//         lastName: "Doe",
//         company: "Tech Solutions Inc.",
//         phone: "555-123-4567",
//         role: "user",
//         address: {
//             street: "123 Main St",
//             city: "Tech City",
//             state: "TS",
//             zip: "12345",
//             country: "USA",
//         },
//     },
//     {
//         username: "user2",
//         email: "user2@example.com",
//         password: "password123",
//         firstName: "Jane",
//         lastName: "Smith",
//         company: "RF Systems Ltd.",
//         phone: "555-987-6543",
//         role: "user",
//         address: {
//             street: "456 Oak Ave",
//             city: "RF City",
//             state: "RF",
//             zip: "67890",
//             country: "USA",
//         },
//     },
//     {
//         username: "admin",
//         email: "admin@Raycom.com",
//         password: "Nitesh",
//         firstName: "Admin",
//         lastName: "User",
//         company: "Raycom",
//         phone: "555-111-2222",
//         role: "admin",
//         address: {
//             street: "789 Admin St",
//             city: "Admin City",
//             state: "AC",
//             zip: "54321",
//             country: "USA",
//         },
//     },
// ]

// // Function to seed data
// const seedData = async () => {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/waveguide-ecommerce", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })

//         console.log("MongoDB connected for seeding")

//         // Clear existing data
//         await Product.deleteMany({})
//         console.log("Products collection cleared")

//         // Don't clear users to preserve admin account
//         // await User.deleteMany({});
//         // console.log("Users collection cleared");

//         await Request.deleteMany({})
//         console.log("Requests collection cleared")

//         // Insert sample products
//         const createdProducts = await Product.insertMany(sampleProducts)
//         console.log(`${createdProducts.length} products inserted`)

//         // Insert sample users
//         const createdUsers = []
//         for (const user of sampleUsers) {
//             // Check if user already exists
//             const existingUser = await User.findOne({ email: user.email })
//             if (!existingUser) {
//                 const newUser = new User(user)
//                 await newUser.save()
//                 createdUsers.push(newUser)
//             }
//         }
//         console.log(`${createdUsers.length} users inserted`)

//         // Create sample requests
//         const sampleRequests = [
//             {
//                 name: "Name",
//                 email: "john.doe@example.com",
//                 phone: "555-123-4567",
//                 company: "Tech Solutions Inc.",
//                 address: "123 Main St",
//                 city: "Tech City",
//                 state: "TS",
//                 zip: "12345",
//                 country: "USA",
//                 message: "Need these components for a new project",
//                 items: [
//                     {
//                         productId: createdProducts[0]._id,
//                         name: createdProducts[0].name,
//                         model: createdProducts[0].model,
//                         quantity: 2,
//                         price: createdProducts[0].price,
//                         image: createdProducts[0].images[0]
//                     },
//                     {
//                         productId: createdProducts[1]._id,
//                         name: createdProducts[1].name,
//                         model: createdProducts[1].model,
//                         quantity: 1,
//                         price: createdProducts[1].price,
//                         image: createdProducts[1].images[0]
//                     },
//                 ],
//                 status: "pending",
//                 userId: createdUsers[0]?._id,
//                 statusHistory: [
//                     {
//                         status: "pending",
//                         date: new Date(),
//                         note: "Request created",
//                     },
//                 ],
//             },
//             {
//                 name: "Jane Smith",
//                 email: "jane.smith@example.com",
//                 phone: "555-987-6543",
//                 company: "RF Systems Ltd.",
//                 address: "456 Oak Ave",
//                 city: "RF City",
//                 state: "RF",
//                 zip: "67890",
//                 country: "USA",
//                 message: "Urgent order for government project",
//                 items: [
//                     {
//                         productId: createdProducts[2]._id,
//                         name: createdProducts[2].name,
//                         model: createdProducts[2].model,
//                         quantity: 3,
//                         price: createdProducts[2].price,
//                         image: createdProducts[2].images[0]
//                     },
//                 ],
//                 status: "approved",
//                 userId: createdUsers[1]?._id,
//                 statusHistory: [
//                     {
//                         status: "pending",
//                         date: new Date(Date.now() - 86400000), // 1 day ago
//                         note: "Request created",
//                     },
//                     {
//                         status: "approved",
//                         date: new Date(),
//                         note: "Approved by admin",
//                     },
//                 ],
//             },
//             {
//                 name: "Robert Johnson",
//                 email: "robert.johnson@example.com",
//                 phone: "555-555-5555",
//                 company: "Johnson Electronics",
//                 address: "789 Pine St",
//                 city: "Pineville",
//                 state: "PV",
//                 zip: "54321",
//                 country: "USA",
//                 message: "Need these components for a research project",
//                 items: [
//                     {
//                         productId: createdProducts[3]._id,
//                         name: createdProducts[3].name,
//                         model: createdProducts[3].model,
//                         quantity: 1,
//                         price: createdProducts[3].price,
//                         image: createdProducts[3].images[0]
//                     },
//                     {
//                         productId: createdProducts[4]._id,
//                         name: createdProducts[4].name,
//                         model: createdProducts[4].model,
//                         quantity: 2,
//                         price: createdProducts[4].price,
//                         image: createdProducts[4].images[0]
//                     },
//                     {
//                         productId: createdProducts[5]._id,
//                         name: createdProducts[5].name,
//                         model: createdProducts[5].model,
//                         quantity: 1,
//                         price: createdProducts[5].price,
//                         image: createdProducts[5].images[0]
//                     },
//                 ],
//                 status: "processing",
//                 statusHistory: [
//                     {
//                         status: "pending",
//                         date: new Date(Date.now() - 172800000), // 2 days ago
//                         note: "Request created",
//                     },
//                     {
//                         status: "approved",
//                         date: new Date(Date.now() - 86400000), // 1 day ago
//                         note: "Approved by admin",
//                     },
//                     {
//                         status: "processing",
//                         date: new Date(),
//                         note: "Order is being processed",
//                     },
//                 ],
//             },
//         ]

//         const createdRequests = await Request.insertMany(sampleRequests)
//         console.log(`${createdRequests.length} requests inserted`)

//         console.log("Data seeding completed successfully")

//         // Disconnect from MongoDB
//         await mongoose.disconnect()
//         console.log("MongoDB disconnected after seeding")

//         process.exit(0)
//     } catch (error) {
//         console.error("Error seeding data:", error)
//         process.exit(1)
//     }
// }

// // Run the seed function
// seedData()


const mongoose = require("mongoose")
const Product = require("../models/Product")
const User = require("../models/User")
const Request = require("../models/Request")
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")

// Load environment variables
dotenv.config()

// Sample product data
const sampleProducts = [
    {
        name: "WG Attenuator DC-4",
        model: "VT040CHPL1000N",
        category: "attenuator",
        price: 299.99,
        frequency: "DC-4",
        power: "1000",
        vswr: "1.4",
        connector: "N/7/16,L27",
        peakPower: "10",
        inStock: true,
        description:
            "High-performance waveguide attenuator designed for DC-4 GHz frequency range with 1000W power handling capability. Features precision machined components and gold-plated contacts for superior performance and reliability.",
        applications:
            "Ideal for telecommunications, defense systems, and radar applications requiring precise signal attenuation. Commonly used in satellite ground stations, cellular base stations, and military communication systems.",
        images: ["/uploads/products/attenuator-1.jpg", "/uploads/products/attenuator-2.jpg"],
        featured: true,
        specifications: [
            { name: "Frequency Range", value: "DC-4 GHz" },
            { name: "Power Handling", value: "1000W" },
            { name: "VSWR", value: "1.4:1 max" },
            { name: "Insertion Loss", value: "0.5 dB max" },
            { name: "Temperature Range", value: "-55°C to +85°C" },
        ],
    },
    {
        name: "WG Circulator DC-2",
        model: "VT020CHPL2000N",
        category: "circulator",
        price: 449.99,
        frequency: "DC-2",
        power: "2000",
        vswr: "1.3",
        connector: "N/7/16,L27",
        peakPower: "50",
        inStock: true,
        description:
            "Premium waveguide circulator with excellent isolation characteristics for DC-2 GHz applications. Engineered with high-quality ferrite materials for optimal performance across the entire frequency band.",
        applications:
            "Suitable for high-power RF systems, communication networks, and laboratory testing environments. Provides essential signal routing in radar systems, satellite communications, and broadcast transmitters.",
        images: ["/uploads/products/circulator-1.jpg"],
        featured: true,
        specifications: [
            { name: "Frequency Range", value: "DC-2 GHz" },
            { name: "Power Handling", value: "2000W" },
            { name: "VSWR", value: "1.3:1 max" },
            { name: "Isolation", value: "20 dB min" },
            { name: "Insertion Loss", value: "0.4 dB max" },
        ],
    },
    {
        name: "WG Isolator DC-2",
        model: "VT020CHPL3000L27",
        category: "isolator",
        price: 399.99,
        frequency: "DC-2",
        power: "3000",
        vswr: "1.5",
        connector: "N/7/16,L27",
        peakPower: "50",
        inStock: false,
        description:
            "High-isolation waveguide isolator providing excellent protection for sensitive RF components. Features advanced ferrite technology for superior isolation performance and low insertion loss.",
        applications:
            "Used in radar systems, satellite communications, and high-power transmitters to prevent signal reflection. Essential for protecting expensive amplifiers and oscillators from harmful reflected power.",
        images: ["/uploads/products/isolator-1.jpg", "/uploads/products/isolator-2.jpg"],
        featured: false,
        specifications: [
            { name: "Frequency Range", value: "DC-2 GHz" },
            { name: "Power Handling", value: "3000W" },
            { name: "VSWR", value: "1.5:1 max" },
            { name: "Isolation", value: "22 dB min" },
            { name: "Insertion Loss", value: "0.5 dB max" },
        ],
    },
    {
        name: "WG Filter Band-Pass 5-6 GHz",
        model: "VT056BPFL500N",
        category: "filter",
        price: 349.99,
        frequency: "5-6",
        power: "500",
        vswr: "1.5",
        connector: "N-Type",
        peakPower: "15",
        inStock: true,
        description:
            "Precision band-pass waveguide filter designed for 5-6 GHz applications with sharp cutoff characteristics. Provides excellent out-of-band rejection and low in-band insertion loss.",
        applications:
            "Ideal for wireless communication systems, radar, and satellite applications requiring precise frequency selection. Used in base stations, point-to-point links, and test equipment.",
        images: ["/uploads/products/filter-1.jpg"],
        featured: true,
        specifications: [
            { name: "Frequency Range", value: "5-6 GHz" },
            { name: "Power Handling", value: "500W" },
            { name: "VSWR", value: "1.5:1 max" },
            { name: "Insertion Loss", value: "0.8 dB max" },
            { name: "Rejection", value: "40 dB min at ±10%" },
        ],
    },
    {
        name: "WG Coupler Directional 10 dB",
        model: "VT100DCPL10DB",
        category: "coupler",
        price: 279.99,
        frequency: "8-12",
        power: "1000",
        vswr: "1.3",
        connector: "SMA",
        peakPower: "25",
        inStock: true,
        description:
            "High-performance 10 dB directional coupler for X-band applications. Features excellent directivity and coupling flatness across the entire operating band.",
        applications:
            "Used for power monitoring, signal sampling, and antenna measurements in radar systems, satellite communications, and test equipment.",
        images: ["/uploads/products/coupler-1.jpg"],
        featured: false,
        specifications: [
            { name: "Frequency Range", value: "8-12 GHz" },
            { name: "Coupling", value: "10 dB ±0.5 dB" },
            { name: "Directivity", value: "25 dB min" },
            { name: "VSWR", value: "1.3:1 max" },
            { name: "Insertion Loss", value: "0.5 dB max" },
        ],
    },
    {
        name: "WG Termination High Power",
        model: "VT150TERM5000",
        category: "termination",
        price: 199.99,
        frequency: "DC-18",
        power: "5000",
        vswr: "1.2",
        connector: "7/16 DIN",
        peakPower: "100",
        inStock: true,
        description:
            "High-power waveguide termination designed for broadband applications up to 18 GHz. Features excellent VSWR performance and superior heat dissipation for high-power handling.",
        applications:
            "Used in high-power RF systems, antenna testing, and laboratory environments where reliable termination of RF signals is required.",
        images: ["/uploads/products/termination-1.jpg"],
        featured: true,
        specifications: [
            { name: "Frequency Range", value: "DC-18 GHz" },
            { name: "Power Handling", value: "5000W" },
            { name: "VSWR", value: "1.2:1 max" },
            { name: "Temperature Range", value: "-55°C to +125°C" },
            { name: "Cooling", value: "Forced Air" },
        ],
    },
    {
        name: "WG Switch SPDT",
        model: "VT200SPDT50",
        category: "switch",
        price: 599.99,
        frequency: "2-18",
        power: "50",
        vswr: "1.5",
        connector: "SMA",
        peakPower: "10",
        inStock: false,
        description:
            "Single-pole double-throw (SPDT) waveguide switch for broadband applications from 2-18 GHz. Features fast switching time and high isolation between ports.",
        applications:
            "Used in automated test equipment, radar systems, and communication networks where signal routing flexibility is required.",
        images: ["/uploads/products/switch-1.jpg"],
        featured: false,
        specifications: [
            { name: "Frequency Range", value: "2-18 GHz" },
            { name: "Switching Time", value: "20 ms max" },
            { name: "Isolation", value: "80 dB min" },
            { name: "VSWR", value: "1.5:1 max" },
            { name: "Insertion Loss", value: "0.5 dB max" },
        ],
    },
    {
        name: "WG Diplexer 900/1800 MHz",
        model: "VT900DPLX1800",
        category: "diplexer",
        price: 349.99,
        frequency: "0.9/1.8",
        power: "200",
        vswr: "1.3",
        connector: "N-Type",
        peakPower: "20",
        inStock: true,
        description:
            "Dual-band waveguide diplexer designed for 900 MHz and 1800 MHz cellular bands. Features high isolation between bands and low insertion loss.",
        applications:
            "Used in cellular base stations, distributed antenna systems, and multi-band communication equipment.",
        images: ["/uploads/products/diplexer-1.jpg"],
        featured: true,
        specifications: [
            { name: "Frequency Bands", value: "900 MHz / 1800 MHz" },
            { name: "Isolation", value: "50 dB min" },
            { name: "VSWR", value: "1.3:1 max" },
            { name: "Insertion Loss", value: "0.5 dB max" },
            { name: "Power Handling", value: "200W" },
        ],
    },
]

// Sample user data
const sampleUsers = [
    {
        username: "admin",
        email: "admin@Raycom.com",
        password: "Nitesh", // This will be hashed by the pre-save hook
        firstName: "Admin",
        lastName: "User",
        role: "admin",
        company: "Raycom",
        phone: "555-123-4567",
        address: {
            street: "123 Admin Street",
            city: "Admin City",
            state: "AS",
            zip: "12345",
            country: "USA",
        },
    },
    {
        username: "user1",
        email: "user1@example.com",
        password: "password123",
        firstName: "John",
        lastName: "Doe",
        company: "Tech Solutions Inc.",
        phone: "555-123-4567",
        role: "user",
        address: {
            street: "123 Main St",
            city: "Tech City",
            state: "TS",
            zip: "12345",
            country: "USA",
        },
    },
    {
        username: "user2",
        email: "user2@example.com",
        password: "password123",
        firstName: "Jane",
        lastName: "Smith",
        company: "RF Systems Ltd.",
        phone: "555-987-6543",
        role: "user",
        address: {
            street: "456 Oak Ave",
            city: "RF City",
            state: "RF",
            zip: "67890",
            country: "USA",
        },
    },
    {
        username: "user3",
        email: "user3@example.com",
        password: "password123",
        firstName: "Robert",
        lastName: "Johnson",
        company: "Microwave Solutions",
        phone: "555-456-7890",
        role: "user",
        address: {
            street: "789 Pine Rd",
            city: "Wave City",
            state: "WC",
            zip: "54321",
            country: "USA",
        },
    },
    {
        username: "user4",
        email: "user4@example.com",
        password: "password123",
        firstName: "Emily",
        lastName: "Williams",
        company: "Telecom Innovations",
        phone: "555-789-0123",
        role: "user",
        address: {
            street: "321 Cedar Ln",
            city: "Signal City",
            state: "SC",
            zip: "98765",
            country: "USA",
        },
    },
]

// Function to seed data
const seedData = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://mlrd:mlrddreamscloudtech@cluster0.yzhly.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("MongoDB connected for seeding")

        // Clear existing data
        await Product.deleteMany({})
        console.log("Products collection cleared")

        // Don't clear users to preserve existing accounts
        // await User.deleteMany({})
        // console.log("Users collection cleared")

        await Request.deleteMany({})
        console.log("Requests collection cleared")

        // Insert sample products
        const createdProducts = await Product.insertMany(sampleProducts)
        console.log(`${createdProducts.length} products inserted`)

        // Insert sample users
        const createdUsers = []
        for (const userData of sampleUsers) {
            // Check if user already exists
            const existingUser = await User.findOne({ email: userData.email })
            if (!existingUser) {
                const newUser = new User(userData)
                await newUser.save()
                createdUsers.push(newUser)
            }
        }
        console.log(`${createdUsers.length} users inserted`)

        // Create sample requests
        const sampleRequests = [
            {
                name: "Name",
                email: "user1@example.com",
                phone: "555-123-4567",
                company: "Tech Solutions Inc.",
                address: "123 Main St",
                city: "Tech City",
                state: "TS",
                zip: "12345",
                country: "USA",
                message: "Need these components for a new project",
                items: [
                    {
                        id: createdProducts[0]._id,
                        name: createdProducts[0].name,
                        model: createdProducts[0].model,
                        quantity: 2,
                        price: createdProducts[0].price,
                        image: createdProducts[0].images[0],
                    },
                    {
                        id: createdProducts[1]._id,
                        name: createdProducts[1].name,
                        model: createdProducts[1].model,
                        quantity: 1,
                        price: createdProducts[1].price,
                        image: createdProducts[1].images[0],
                    },
                ],
                status: "pending",
                userId: createdUsers.find((u) => u.email === "user1@example.com")?._id,
                statusHistory: [
                    {
                        status: "pending",
                        date: new Date(),
                        note: "Request created",
                    },
                ],
            },
            {
                name: "Jane Smith",
                email: "user2@example.com",
                phone: "555-987-6543",
                company: "RF Systems Ltd.",
                address: "456 Oak Ave",
                city: "RF City",
                state: "RF",
                zip: "67890",
                country: "USA",
                message: "Urgent order for government project",
                items: [
                    {
                        id: createdProducts[2]._id,
                        name: createdProducts[2].name,
                        model: createdProducts[2].model,
                        quantity: 3,
                        price: createdProducts[2].price,
                        image: createdProducts[2].images[0],
                    },
                ],
                status: "approved",
                userId: createdUsers.find((u) => u.email === "user2@example.com")?._id,
                statusHistory: [
                    {
                        status: "pending",
                        date: new Date(Date.now() - 86400000), // 1 day ago
                        note: "Request created",
                    },
                    {
                        status: "approved",
                        date: new Date(),
                        note: "Approved by admin",
                    },
                ],
            },
            {
                name: "Robert Johnson",
                email: "user3@example.com",
                phone: "555-456-7890",
                company: "Microwave Solutions",
                address: "789 Pine Rd",
                city: "Wave City",
                state: "WC",
                zip: "54321",
                country: "USA",
                message: "Need these components for a research project",
                items: [
                    {
                        id: createdProducts[3]._id,
                        name: createdProducts[3].name,
                        model: createdProducts[3].model,
                        quantity: 1,
                        price: createdProducts[3].price,
                        image: createdProducts[3].images[0],
                    },
                    {
                        id: createdProducts[4]._id,
                        name: createdProducts[4].name,
                        model: createdProducts[4].model,
                        quantity: 2,
                        price: createdProducts[4].price,
                        image: createdProducts[4].images[0],
                    },
                ],
                status: "processing",
                userId: createdUsers.find((u) => u.email === "user3@example.com")?._id,
                statusHistory: [
                    {
                        status: "pending",
                        date: new Date(Date.now() - 172800000), // 2 days ago
                        note: "Request created",
                    },
                    {
                        status: "approved",
                        date: new Date(Date.now() - 86400000), // 1 day ago
                        note: "Approved by admin",
                    },
                    {
                        status: "processing",
                        date: new Date(),
                        note: "Order is being processed",
                    },
                ],
            },
            {
                name: "Emily Williams",
                email: "user4@example.com",
                phone: "555-789-0123",
                company: "Telecom Innovations",
                address: "321 Cedar Ln",
                city: "Signal City",
                state: "SC",
                zip: "98765",
                country: "USA",
                message: "Replacement parts needed urgently",
                items: [
                    {
                        id: createdProducts[5]._id,
                        name: createdProducts[5].name,
                        model: createdProducts[5].model,
                        quantity: 1,
                        price: createdProducts[5].price,
                        image: createdProducts[5].images[0],
                    },
                ],
                status: "delivered",
                userId: createdUsers.find((u) => u.email === "user4@example.com")?._id,
                statusHistory: [
                    {
                        status: "pending",
                        date: new Date(Date.now() - 604800000), // 7 days ago
                        note: "Request created",
                    },
                    {
                        status: "approved",
                        date: new Date(Date.now() - 518400000), // 6 days ago
                        note: "Approved by admin",
                    },
                    {
                        status: "processing",
                        date: new Date(Date.now() - 432000000), // 5 days ago
                        note: "Order is being processed",
                    },
                    {
                        status: "shipped",
                        date: new Date(Date.now() - 259200000), // 3 days ago
                        note: "Order has been shipped",
                    },
                    {
                        status: "delivered",
                        date: new Date(Date.now() - 86400000), // 1 day ago
                        note: "Order has been delivered",
                    },
                ],
            },
            {
                name: "Michael Brown",
                email: "michael@example.com",
                phone: "555-234-5678",
                company: "Brown Engineering",
                address: "567 Maple Dr",
                city: "Maple City",
                state: "MC",
                zip: "34567",
                country: "USA",
                message: "Components needed for new product development",
                items: [
                    {
                        id: createdProducts[6]._id,
                        name: createdProducts[6].name,
                        model: createdProducts[6].model,
                        quantity: 2,
                        price: createdProducts[6].price,
                        image: createdProducts[6].images[0],
                    },
                    {
                        id: createdProducts[7]._id,
                        name: createdProducts[7].name,
                        model: createdProducts[7].model,
                        quantity: 1,
                        price: createdProducts[7].price,
                        image: createdProducts[7].images[0],
                    },
                ],
                status: "shipped",
                statusHistory: [
                    {
                        status: "pending",
                        date: new Date(Date.now() - 345600000), // 4 days ago
                        note: "Request created",
                    },
                    {
                        status: "approved",
                        date: new Date(Date.now() - 259200000), // 3 days ago
                        note: "Approved by admin",
                    },
                    {
                        status: "processing",
                        date: new Date(Date.now() - 172800000), // 2 days ago
                        note: "Order is being processed",
                    },
                    {
                        status: "shipped",
                        date: new Date(Date.now() - 86400000), // 1 day ago
                        note: "Order has been shipped",
                    },
                ],
            },
        ]

        const createdRequests = await Request.insertMany(sampleRequests)
        console.log(`${createdRequests.length} requests inserted`)

        console.log("Data seeding completed successfully")

        // Disconnect from MongoDB
        await mongoose.disconnect()
        console.log("MongoDB disconnected after seeding")

        process.exit(0)
    } catch (error) {
        console.error("Error seeding data:", error)
        process.exit(1)
    }
}

// Run the seed function
seedData()






//  {
//     "products": [
//         {
//             "name": "WG Attenuator DC-6 Pro",
//             "model": "VT060CHPL1500N",
//             "category": "attenuator",
//             "price": 329.99,
//             "frequency": "DC-6",
//             "power": "1500",
//             "vswr": "1.3",
//             "connector": "N/7/16,L30",
//             "peakPower": "15",
//             "inStock": true,
//             "description": "Advanced waveguide attenuator optimized for DC-6 GHz applications, featuring enhanced thermal stability and superior power handling. Precision-engineered with silver-plated copper for exceptional performance in demanding environments.",
//             "applications": "Perfect for broadband communication systems, advanced radar installations, and RF test laboratories. Widely used in weather radar systems, satellite uplink stations, and military electronic countermeasure equipment.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-6 GHz" },
//                 { "name": "Power Handling", "value": "1500W" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Insertion Loss", "value": "0.4 dB max" },
//                 { "name": "Temperature Range", "value": "-65°C to +125°C" }
//             ]
//         },
//         {
//             "name": "WG Attenuator Precision 8",
//             "model": "VT080CHPL1200N",
//             "category": "attenuator",
//             "price": 379.99,
//             "frequency": "DC-8",
//             "power": "1200",
//             "vswr": "1.25",
//             "connector": "SMA/L29",
//             "peakPower": "12",
//             "inStock": true,
//             "description": "Precision waveguide attenuator designed for critical DC-8 GHz applications requiring exceptional accuracy. Features proprietary impedance matching technology for nearly flat attenuation across the entire frequency range.",
//             "applications": "Specialized for calibration systems, high-precision test equipment, and reference signal chains. Essential component in metrology laboratories, semiconductor testing facilities, and aerospace verification systems.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-8 GHz" },
//                 { "name": "Power Handling", "value": "1200W" },
//                 { "name": "VSWR", "value": "1.25:1 max" },
//                 { "name": "Insertion Loss", "value": "0.3 dB max" },
//                 { "name": "Temperature Range", "value": "-50°C to +100°C" }
//             ]
//         },
//         {
//             "name": "WG Attenuator Miniature",
//             "model": "VT030CHPL800SMA",
//             "category": "attenuator",
//             "price": 249.99,
//             "frequency": "DC-3",
//             "power": "800",
//             "vswr": "1.35",
//             "connector": "SMA/L20",
//             "peakPower": "8",
//             "inStock": false,
//             "description": "Compact waveguide attenuator in a space-saving form factor without sacrificing performance. Specially designed for tight integration spaces while maintaining excellent RF characteristics across the DC-3 GHz range.",
//             "applications": "Ideal for drone communication systems, portable military equipment, and space-constrained commercial applications. Frequently used in compact 5G infrastructure, tactical radios, and miniaturized test equipment.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-3 GHz" },
//                 { "name": "Power Handling", "value": "800W" },
//                 { "name": "VSWR", "value": "1.35:1 max" },
//                 { "name": "Insertion Loss", "value": "0.45 dB max" },
//                 { "name": "Temperature Range", "value": "-40°C to +85°C" }
//             ]
//         },
//         {
//             "name": "WG Attenuator Cryogenic",
//             "model": "VT045CHPL900N",
//             "category": "attenuator",
//             "price": 499.99,
//             "frequency": "DC-4.5",
//             "power": "900",
//             "vswr": "1.3",
//             "connector": "N/7/16,L27",
//             "peakPower": "9",
//             "inStock": true,
//             "description": "Specialized cryogenic waveguide attenuator engineered for extreme low-temperature environments. Features special metallurgy and thermal compensation mechanisms to maintain consistent performance at temperatures approaching absolute zero.",
//             "applications": "Designed for quantum computing systems, cryogenic research facilities, and low-noise receiver front ends. Essential component in radio astronomy observatories, superconducting electronics research, and ultra-sensitive detection systems.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-4.5 GHz" },
//                 { "name": "Power Handling", "value": "900W" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Insertion Loss", "value": "0.4 dB max" },
//                 { "name": "Temperature Range", "value": "-271°C to +85°C" }
//             ]
//         },
//         {
//             "name": "WG Attenuator Variable",
//             "model": "VT050CHPL1100VAR",
//             "category": "attenuator",
//             "price": 429.99,
//             "frequency": "DC-5",
//             "power": "1100",
//             "vswr": "1.4",
//             "connector": "7/16 DIN",
//             "peakPower": "11",
//             "inStock": true,
//             "description": "Precision variable waveguide attenuator with adjustable attenuation from 0-30dB. Features micrometer adjustment mechanism for repeatable settings and excellent stability once set.",
//             "applications": "Perfect for laboratory test setups, signal level adjustment in complex RF chains, and systems requiring dynamic range control. Used extensively in wireless development labs, production testing facilities, and RF education centers.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-5 GHz" },
//                 { "name": "Power Handling", "value": "1100W" },
//                 { "name": "VSWR", "value": "1.4:1 max" },
//                 { "name": "Attenuation Range", "value": "0-30 dB" },
//                 { "name": "Temperature Range", "value": "-25°C to +85°C" }
//             ]
//         },
//         {
//             "name": "WG Attenuator High-Isolation",
//             "model": "VT020CHPL750HI",
//             "category": "attenuator",
//             "price": 349.99,
//             "frequency": "DC-2",
//             "power": "750",
//             "vswr": "1.2",
//             "connector": "SC",
//             "peakPower": "7.5",
//             "inStock": true,
//             "description": "Specialized high-isolation waveguide attenuator with proprietary shielding technology for applications requiring extreme signal isolation. Features triple-layer shielding and advanced ferrite linings for superior isolation characteristics.",
//             "applications": "Critical for sensitive receiver protection, secure communications systems, and environments with multiple high-power transmitters. Used in electronic warfare systems, TEMPEST-certified facilities, and high-security government installations.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-2 GHz" },
//                 { "name": "Power Handling", "value": "750W" },
//                 { "name": "VSWR", "value": "1.2:1 max" },
//                 { "name": "Isolation", "value": "80 dB min" },
//                 { "name": "Temperature Range", "value": "-30°C to +70°C" }
//             ]
//         },
//         {
//             "name": "WG Circulator High-Power",
//             "model": "VT023CHPL3000N",
//             "category": "circulator",
//             "price": 529.99,
//             "frequency": "DC-2.3",
//             "power": "3000",
//             "vswr": "1.25",
//             "connector": "7/16 DIN",
//             "peakPower": "60",
//             "inStock": true,
//             "description": "Heavy-duty waveguide circulator engineered for extreme power handling applications. Features water cooling channels and specialized ferrite material composition optimized for high-power broadcast and industrial systems.",
//             "applications": "Designed for television broadcast transmitters, industrial RF heating systems, and high-energy physics research equipment. Essential component in MRI systems, particle accelerators, and industrial microwave processing systems.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-2.3 GHz" },
//                 { "name": "Power Handling", "value": "3000W" },
//                 { "name": "VSWR", "value": "1.25:1 max" },
//                 { "name": "Isolation", "value": "22 dB min" },
//                 { "name": "Insertion Loss", "value": "0.35 dB max" }
//             ]
//         },
//         {
//             "name": "WG Circulator Miniature",
//             "model": "VT018CHPL1500SMA",
//             "category": "circulator",
//             "price": 399.99,
//             "frequency": "DC-1.8",
//             "power": "1500",
//             "vswr": "1.35",
//             "connector": "SMA",
//             "peakPower": "30",
//             "inStock": true,
//             "description": "Compact waveguide circulator in a space-efficient form factor for installations with tight space constraints. Features advanced ferrite composition for excellent performance despite the reduced size.",
//             "applications": "Perfect for portable communication equipment, drone systems, and densely packed electronics assemblies. Commonly used in mobile cellular infrastructure, compact radar systems, and handheld test equipment.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-1.8 GHz" },
//                 { "name": "Power Handling", "value": "1500W" },
//                 { "name": "VSWR", "value": "1.35:1 max" },
//                 { "name": "Isolation", "value": "18 dB min" },
//                 { "name": "Insertion Loss", "value": "0.45 dB max" }
//             ]
//         },
//         {
//             "name": "WG Circulator Wideband",
//             "model": "VT040CHPL2500N",
//             "category": "circulator",
//             "price": 549.99,
//             "frequency": "DC-4",
//             "power": "2500",
//             "vswr": "1.4",
//             "connector": "N/7/16,L30",
//             "peakPower": "50",
//             "inStock": false,
//             "description": "Ultra-wideband waveguide circulator with exceptional performance across the entire DC-4 GHz frequency range. Features proprietary ferrite formulation and precision manufacturing for consistent isolation across the band.",
//             "applications": "Ideal for broadband communication systems, spectrum monitoring equipment, and multi-band radar installations. Essential for electronic warfare systems, signal intelligence platforms, and advanced communications research.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-4 GHz" },
//                 { "name": "Power Handling", "value": "2500W" },
//                 { "name": "VSWR", "value": "1.4:1 max" },
//                 { "name": "Isolation", "value": "19 dB min" },
//                 { "name": "Insertion Loss", "value": "0.5 dB max" }
//             ]
//         },
//         {
//             "name": "WG Circulator Cryogenic",
//             "model": "VT015CHPL1800CRYO",
//             "category": "circulator",
//             "price": 699.99,
//             "frequency": "DC-1.5",
//             "power": "1800",
//             "vswr": "1.2",
//             "connector": "SC",
//             "peakPower": "35",
//             "inStock": true,
//             "description": "Specialized cryogenic waveguide circulator designed for operation at extremely low temperatures. Features custom metallurgy and specialized ferrite formulation that maintains magnetic properties at cryogenic temperatures.",
//             "applications": "Designed for quantum computing systems, low-noise astronomical receivers, and superconducting electronics. Critical component in radio astronomy observatories, physics research facilities, and quantum information processing systems.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-1.5 GHz" },
//                 { "name": "Power Handling", "value": "1800W" },
//                 { "name": "VSWR", "value": "1.2:1 max" },
//                 { "name": "Isolation", "value": "25 dB min" },
//                 { "name": "Operating Temperature", "value": "-271°C to +50°C" }
//             ]
//         },
//         {
//             "name": "WG Circulator Drop-in",
//             "model": "VT025CHPL2200PCB",
//             "category": "circulator",
//             "price": 379.99,
//             "frequency": "DC-2.5",
//             "power": "2200",
//             "vswr": "1.3",
//             "connector": "PCB Mount",
//             "peakPower": "45",
//             "inStock": true,
//             "description": "Surface-mount waveguide circulator designed for direct PCB integration. Features gold-plated contacts and compact footprint for seamless incorporation into printed circuit board assemblies.",
//             "applications": "Perfect for integrated RF modules, high-density communication equipment, and mass-produced wireless devices. Commonly used in base station amplifiers, point-to-point radios, and integrated transceiver assemblies.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-2.5 GHz" },
//                 { "name": "Power Handling", "value": "2200W" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Isolation", "value": "21 dB min" },
//                 { "name": "Footprint", "value": "25mm x 25mm" }
//             ]
//         },
//         {
//             "name": "WG Circulator Temperature-Stable",
//             "model": "VT030CHPL2800TS",
//             "category": "circulator",
//             "price": 599.99,
//             "frequency": "DC-3",
//             "power": "2800",
//             "vswr": "1.25",
//             "connector": "N/7/16,L27",
//             "peakPower": "55",
//             "inStock": true,
//             "description": "Temperature-compensated waveguide circulator with exceptional stability across extreme temperature ranges. Features self-adjusting magnetic bias system that maintains consistent performance regardless of ambient conditions.",
//             "applications": "Designed for outdoor installations, aircraft systems, and environments with wide temperature variations. Critical for satellite earth stations, weather radar installations, and arctic/desert deployment scenarios.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-3 GHz" },
//                 { "name": "Power Handling", "value": "2800W" },
//                 { "name": "VSWR", "value": "1.25:1 max" },
//                 { "name": "Temperature Range", "value": "-65°C to +150°C" },
//                 { "name": "Temp. Coefficient", "value": "±0.01 dB/°C max" }
//             ]
//         },
//         {
//             "name": "WG Isolator High-Power",
//             "model": "VT025CHPL4000L30",
//             "category": "isolator",
//             "price": 489.99,
//             "frequency": "DC-2.5",
//             "power": "4000",
//             "vswr": "1.4",
//             "connector": "7/16 DIN",
//             "peakPower": "80",
//             "inStock": true,
//             "description": "Heavy-duty waveguide isolator designed for extreme power handling in broadcast and industrial applications. Features integrated heat dissipation fins and optional water cooling attachment points for continuous high-power operation.",
//             "applications": "Essential for protecting high-power transmitters in television and radio broadcasting, industrial heating systems, and scientific research facilities. Critical component in particle accelerators, fusion research equipment, and high-energy radar systems.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-2.5 GHz" },
//                 { "name": "Power Handling", "value": "4000W" },
//                 { "name": "VSWR", "value": "1.4:1 max" },
//                 { "name": "Isolation", "value": "26 dB min" },
//                 { "name": "Cooling Method", "value": "Forced Air/Water Optional" }
//             ]
//         },
//         {
//             "name": "WG Isolator Miniature",
//             "model": "VT018CHPL2000SMA",
//             "category": "isolator",
//             "price": 349.99,
//             "frequency": "DC-1.8",
//             "power": "2000",
//             "vswr": "1.3",
//             "connector": "SMA",
//             "peakPower": "40",
//             "inStock": true,
//             "description": "Compact waveguide isolator in an ultra-small form factor without compromising performance. Features advanced ferrite composition and precision manufacturing for excellent isolation in space-constrained applications.",
//             "applications": "Ideal for portable equipment, UAV communication systems, and densely packed electronics assemblies. Used in tactical military radios, compact base stations, and miniaturized satellite communication terminals.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-1.8 GHz" },
//                 { "name": "Power Handling", "value": "2000W" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Isolation", "value": "20 dB min" },
//                 { "name": "Dimensions", "value": "35mm x 20mm x 15mm" }
//             ]
//         },
//         {
//             "name": "WG Isolator Ultra-Wideband",
//             "model": "VT045CHPL2500L27",
//             "category": "isolator",
//             "price": 549.99,
//             "frequency": "DC-4.5",
//             "power": "2500",
//             "vswr": "1.6",
//             "connector": "N/7/16,L27",
//             "peakPower": "60",
//             "inStock": false,
//             "description": "Ultra-wideband waveguide isolator with exceptional performance across the entire DC-4.5 GHz range. Features multi-stage ferrite design for consistent isolation characteristics throughout the operating band.",
//             "applications": "Perfect for broadband communication systems, electronic warfare equipment, and multi-band radar systems. Used in signal intelligence platforms, spectrum monitoring stations, and advanced communications research facilities.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-4.5 GHz" },
//                 { "name": "Power Handling", "value": "2500W" },
//                 { "name": "VSWR", "value": "1.6:1 max" },
//                 { "name": "Isolation", "value": "20 dB min" },
//                 { "name": "Flatness", "value": "±1.5 dB across band" }
//             ]
//         },
//         {
//             "name": "WG Isolator Low-Loss",
//             "model": "VT030CHPL3500LL",
//             "category": "isolator",
//             "price": 459.99,
//             "frequency": "DC-3",
//             "power": "3500",
//             "vswr": "1.3",
//             "connector": "N/7/16,L30",
//             "peakPower": "70",
//             "inStock": true,
//             "description": "Low-insertion-loss waveguide isolator designed for applications where every dB counts. Features specialized ferrite composition and precision internal geometries to minimize forward path losses while maintaining excellent isolation.",
//             "applications": "Critical for receiver front-ends, low-noise amplifier protection, and sensitive communications systems. Used in satellite ground stations, radio astronomy receivers, and long-range radar systems where system noise figure is crucial.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-3 GHz" },
//                 { "name": "Power Handling", "value": "3500W" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Isolation", "value": "23 dB min" },
//                 { "name": "Insertion Loss", "value": "0.25 dB max" }
//             ]
//         },
//         {
//             "name": "WG Isolator Drop-in",
//             "model": "VT015CHPL2800PCB",
//             "category": "isolator",
//             "price": 329.99,
//             "frequency": "DC-1.5",
//             "power": "2800",
//             "vswr": "1.4",
//             "connector": "PCB Mount",
//             "peakPower": "55",
//             "inStock": true,
//             "description": "Surface-mount waveguide isolator designed for direct PCB integration in high-volume applications. Features gold-plated contacts and standardized footprint compatible with automated assembly processes.",
//             "applications": "Ideal for mass-produced wireless equipment, integrated RF modules, and compact communication devices. Used in cellular infrastructure, wireless access points, and IoT gateway devices requiring component-level signal isolation.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-1.5 GHz" },
//                 { "name": "Power Handling", "value": "2800W" },
//                 { "name": "VSWR", "value": "1.4:1 max" },
//                 { "name": "Isolation", "value": "19 dB min" },
//                 { "name": "Footprint", "value": "20mm x 20mm" }
//             ]
//         },
//         {
//             "name": "WG Isolator High-Isolation",
//             "model": "VT020CHPL2200HI",
//             "category": "isolator",
//             "price": 499.99,
//             "frequency": "DC-2",
//             "power": "2200",
//             "vswr": "1.5",
//             "connector": "7/16 DIN",
//             "peakPower": "45",
//             "inStock": true,
//             "description": "Specialized high-isolation waveguide isolator providing exceptional reverse isolation characteristics. Features multi-stage isolation design with optimized magnetic circuit for maximum protection of sensitive components.",
//             "applications": "Critical for protecting expensive RF sources like klystrons, TWTAs, and precision oscillators. Essential component in high-power radar systems, medical linear accelerators, and advanced research equipment requiring maximum source protection.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Frequency Range", "value": "DC-2 GHz" },
//                 { "name": "Power Handling", "value": "2200W" },
//                 { "name": "VSWR", "value": "1.5:1 max" },
//                 { "name": "Isolation", "value": "35 dB min" },
//                 { "name": "Temperature Range", "value": "-40°C to +100°C" }
//             ]
//         },
//         {
//             "name": "WG Filter Low-Pass",
//             "model": "VT-LPF-6GHz",
//             "category": "filter",
//             "price": 299.99,
//             "frequency": "DC-6",
//             "power": "400",
//             "vswr": "1.2",
//             "connector": "N-Type",
//             "peakPower": "800",
//             "inStock": true,
//             "description": "High-performance low-pass waveguide filter with sharp cutoff characteristics and excellent stopband rejection. Features precision-machined cavities and silver plating for low insertion loss in the passband.",
//             "applications": "Ideal for harmonic suppression in transmitters, interference mitigation in receivers, and signal conditioning in test equipment. Widely used in cellular infrastructure, broadcast systems, and radar installations to ensure spectral compliance.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Passband", "value": "DC-6 GHz" },
//                 { "name": "Rejection", "value": "60 dB min at 7.5 GHz" },
//                 { "name": "Insertion Loss", "value": "0.3 dB max" },
//                 { "name": "Power Handling", "value": "400W CW" },
//                 { "name": "Temperature Range", "value": "-55°C to +125°C" }
//             ]
//         },
//         {
//             "name": "WG Filter High-Pass",
//             "model": "VT-HPF-3GHz",
//             "category": "filter",
//             "price": 279.99,
//             "frequency": "3-18",
//             "power": "350",
//             "vswr": "1.3",
//             "connector": "SMA",
//             "peakPower": "700",
//             "inStock": true,
//             "description": "Precision high-pass waveguide filter with excellent rejection below cutoff and low insertion loss in the passband. Features gold-plated resonators for stable performance and high reliability.",
//             "applications": "Perfect for blocking low-frequency interference, LO rejection in mixer outputs, and general spectral cleanup in RF systems. Used in electronic warfare receivers, spectrum analyzers, and communication systems operating in congested environments.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Passband", "value": "3-18 GHz" },
//                 { "name": "Rejection", "value": "50 dB min at 2 GHz" },
//                 { "name": "Insertion Loss", "value": "0.5 dB max" },
//                 { "name": "VSWR", "value": "1.3:1 max" },
//                 { "name": "Temperature Range", "value": "-40°C to +85°C" }
//             ]
//         },
//         {
//             "name": "WG Filter Cavity Band-Pass",
//             "model": "VT-BPF-C-12GHz",
//             "category": "filter",
//             "price": 399.99,
//             "frequency": "11.7-12.7",
//             "power": "600",
//             "vswr": "1.25",
//             "connector": "WR-75",
//             "peakPower": "1200",
//             "inStock": false,
//             "description": "High-Q cavity waveguide bandpass filter providing superior selectivity and out-of-band rejection. Features temperature-compensated design for stable center frequency and bandwidth across operating conditions.",
//             "applications": "Critical for satellite communications in Ku-band, precision test equipment, and specialized radar systems. Used in VSAT terminals, satellite TV reception systems, and point-to-point microwave links requiring exceptional spectral purity.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Passband", "value": "11.7-12.7 GHz" },
//                 { "name": "Rejection", "value": "70 dB at ±1 GHz" },
//                 { "name": "Insertion Loss", "value": "0.6 dB max" },
//                 { "name": "Power Handling", "value": "600W CW" },
//                 { "name": "Temperature Stability", "value": "±0.0001%/°C" }
//             ]
//         },
//         {
//             "name": "WG Filter Tunable",
//             "model": "VT-TBF-8GHz",
//             "category": "filter",
//             "price": 599.99,
//             "frequency": "7.5-8.5",
//             "power": "300",
//             "vswr": "1.4",
//             "connector": "WR-112",
//             "peakPower": "600",
//             "inStock": true,
//             "description": "Tunable waveguide bandpass filter with adjustable center frequency and bandwidth. Features precision micrometer tuning mechanism with locking capability for stable operation once set.",
//             "applications": "Perfect for research laboratories, electronic warfare systems, and field-adjustable communications equipment. Used in signal intelligence platforms, electronic countermeasures, and specialized testing applications requiring frequency agility.",
//             "images": ["https://5.imimg.com/data5/LD/NO/MY-569139/microwave-components-500x500.jpg"],
//             "specifications": [
//                 { "name": "Tuning Range", "value": "7.5-8