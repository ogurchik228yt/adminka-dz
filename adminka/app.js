const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const app = express();
const PORT = 3000;

const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const bodyParser = require("body-parser");
const cors = require("./middleware/cors");

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRoute,
    gamesRouter
);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});