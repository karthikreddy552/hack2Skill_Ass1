const mongoose = require("mongoose");

const data2Schema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    team_name: {
        type: String,
        required: true
    }
})

const MockData2 = mongoose.model("Mock2", data2Schema);
module.exports = MockData2;