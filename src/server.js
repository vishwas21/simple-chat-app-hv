const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({
        application: "Peer to Peer Chat Applicaiton",
        page: "Home",
        creator: "Vishwas B and Harshitha T K",
    });
});

module.exports = app;
