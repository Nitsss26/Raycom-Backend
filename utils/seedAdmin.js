// const User = require("../models/User")
// const bcrypt = require("bcryptjs")

// // Function to create admin user if it doesn't exist
// const createAdminUser = async () => {
//     try {
//         // Check if admin user already exists
//         const adminExists = await User.findOne({ username: "admin" })

//         if (!adminExists) {
//             console.log("Creating admin user...")

//             // Create admin user
//             const admin = new User({
//                 username: "admin",
//                 email: "admin@Raycom.com",
//                 password: "Nitesh", // This will be hashed by the pre-save hook
//                 firstName: "Admin",
//                 lastName: "User",
//                 role: "admin",
//             })

//             await admin.save()
//             console.log("Admin user created successfully")
//         }
//     } catch (error) {
//         console.error("Error creating admin user:", error)
//     }
// }

// // Function to seed sample data
// const seedSampleData = async () => {
//     // This function would seed sample products and other data
//     // Implementation would go here
// }

// module.exports = { createAdminUser, seedSampleData }

const User = require("../models/User")
const bcrypt = require("bcryptjs")

// Function to create admin user if it doesn't exist
const createAdminUser = async () => {
    try {
        // Check if admin user already exists
        const adminExists = await User.findOne({ username: "admin" })

        if (!adminExists) {
            console.log("Creating admin user...")

            // Create admin user
            const admin = new User({
                username: "admin",
                email: "admin@Raycom.com",
                password: "Nitesh", // This will be hashed by the pre-save hook
                firstName: "Admin",
                lastName: "User",
                role: "admin",
            })

            await admin.save()
            console.log("Admin user created successfully")
        }
    } catch (error) {
        console.error("Error creating admin user:", error)
    }
}

module.exports = { createAdminUser }

