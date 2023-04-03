const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    // res.status(200).json({
    //     application: "Peer to Peer Chat Applicaiton",
    //     page: "Home",
    //     creator: "Vishwas B and Harshitha T K",
    // });

    res.sendFile(path.resolve(__dirname + "/../client/index.html"));
});

module.exports = app;
