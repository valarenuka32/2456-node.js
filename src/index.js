var http = require("http");
const express = require("express");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes");
const config = require("./config/config");


// Database connection
connectDB()


app.use("/v1",routes);

// express using create server

// const express = require('express');
// const fs = require('fs');
const app = express();

// app.get('/', function (req, res) {
//   fs.readFile('text.html', function (err, data) {
//     res.writeHead(200, { 'content-type': 'test.html' });
//     res.write(data);
//     res.end();
//   });
// });
// app.listen(7002);

// http using create server


var fs = require("fs");

http.createServer(function (req, res) {
  fs.readFile('text.html', function (err, data) {
    res.writeHead(200, { 'content-type': 'test.html' });
    res.write(data);
    return res.end();
  });
}).listen(4050);