const express = require("express");
const mongoose = require("mongoose");
let config = require("config");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
require("dotenv").config();

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/client"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new MongoClient(config.get("mongoUri"));
const database = client.db("p2p-chat");
const chat = database.collection("chat");

app.get("/", (req, res) => {
    res.send("index.html");
});

app.get("/messages", async (req, res) => {
    const msgs = await chat.find({});

    res.send(msgs);
});

app.get("/messages/:user", async (req, res) => {
    const user = req.params.user;
    const msgs = await chat.find({ name: user });

    res.send(msgs);
});

app.post("/messages", async (req, res) => {
    try {
        const msg = req.body;

        await chat.insertOne(msg);
        console.log("Messages Saved");

        io.emit("message", req.body);
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
        return console.log("Internal Server Error: 500", error);
    } finally {
        console.log("Message Pushed to the stack");
    }
});

io.on("connection", () => {
    console.log("One User connected");
});

const server = http.listen(3000, () => {
    console.log("server is running on port", server.address().port);
});
