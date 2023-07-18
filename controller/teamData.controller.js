const MockData1 = require("../models/data1.model");
const MockData2 = require("../models/data2.model");


const getTeam = async (req, res) => {
    try {
        const teamDetails = await MockData1.aggregate([
            {
                $lookup: {
                    from: "mock2",
                    localField: "full_name",
                    foreignField: "full_name",
                    as: "team_data"
                }
            },
            {
                $project: {
                    _id: 0,
                    full_name: 1,
                    email: 1,
                    number: 1,
                    city: 1,
                    url: 1,
                    team_name: { $arrayElemAt: ['$team_data.team_name', 0] }
                }
            }
        ]);

        res.status(200).json({ status: "success", data: teamDetails })
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
}


module.exports = { getTeam }