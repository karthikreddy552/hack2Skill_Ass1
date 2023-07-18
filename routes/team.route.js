const express = require('express');
const { getTeam } = require('../controller/teamData.controller');


const teamRouter = express.Router();

teamRouter.get("/get", getTeam);



module.exports = teamRouter;