const mongoose = require("mongoose");

const data1Schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const MockData1 = mongoose.model("Mock1", data1Schema);
module.exports = MockData1;