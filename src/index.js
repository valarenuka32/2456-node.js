const express = require("express");
const fs = require("fs");
const http = require("http");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbconections");
const config = require("./config/config");
const routes = require("./routes");
// database connection
connectDB()

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// namespace
app.use("/v1", routes);
// server
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.prot} `);
});