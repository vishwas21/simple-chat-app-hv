const app = require("./src/server");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("a user connected");
});

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg);
    });
});

server.listen(port, () =>
    console.log(`Server running on port ${port} at http://localhost:${port}`)
);
