const express = require('express');
const usersDataRouter = express.Router();

usersDataRouter.get("/", (req, res) => {
    res.send("User GET request");
});

usersDataRouter.post("/", (req, res) => {
    res.send("User POST request");
});

module.exports = usersDataRouter;
