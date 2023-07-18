const dotenv = require("dotenv")
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const teamRouter = require("./routes/team.route");

const PORT = process.env.PORT || 8080


const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}))


app.get("/", (req, res) => {
    res.send("Hello, world! Welcome to backend API");
})

app.use("/api/team", teamRouter)


app.listen(PORT, async () => {
    await connectDB();
    console.log(`server running on http://localhost:${process.env.PORT}`);
})