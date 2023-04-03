const app = require("./src/server");

const port = process.env.PORT || 8756;

app.listen(port, () =>
    console.log(`Server running on port ${port} at http://localhost:${port}`)
);
