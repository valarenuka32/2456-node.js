const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconection");
const config = require("./config/config");
const routes = require("./routes");

// database connection
connectDB()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(`./public`));

app.use("/v1", routes);

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port}`);
});

