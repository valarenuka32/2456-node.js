const express = require("express");
const http = require("http");
const fs = require("fs");
const bodyparser = require("body-parser");
const config = require("./config/config");
const { connectDB } = require("./db/dbconnetion");

const app = express();
// database connection
connectDB()

app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port}`);
});