const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
    phoneNumbers: {
        type: [String],
        required: true,
        default: ["+91 799 928 3903", "+91 700 909 0762"],
    },
    emailAddresses: {
        type: [String],
        required: true,
        default: ["info@Raycom.com", "support@Raycom.com"],
    },
    availableTimings: {
        type: [String],
        required: true,
        default: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday - Sunday: Closed"],
    },
    aboutCompany: {
        type: String,
        required: true,
        default:
            "Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications, defense, and aerospace industries.",
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("ContactInfo", contactInfoSchema);