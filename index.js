const app = require("./src/server");
const http = require("http");

const port = process.env.PORT || 8756;

const server = http.createServer(app);

server.listen(port, () =>
    console.log(`Server running on port ${port} at http://localhost:${port}`)
);
