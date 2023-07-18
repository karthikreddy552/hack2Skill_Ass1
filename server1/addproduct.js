require("dotenv").config();
const connectDB = require("./config/db.config");
// const MockData1 = require("./models/data1.model");
const MockData2 = require("./models/data2.model");


// const ProductJson = require("./mock_data_1.json");
const ProductJson = require("./mock_data_2.json");


// to write a bulk data

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await MockData2.deleteMany();
        await MockData2.create(ProductJson);
        console.log("success");
    }
    catch (err) {
        console.log(err)
    }
}

start()