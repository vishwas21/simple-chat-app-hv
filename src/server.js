const express = require("express");
const http = require("http");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    // res.status(200).json({
    //     application: "Peer to Peer Chat Applicaiton",
    //     page: "Home",
    //     creator: "Vishwas B and Harshitha T K",
    // });

    res.sendFile(__dirname + "/../client/index.html");
});

module.exports = http.createServer(app);
