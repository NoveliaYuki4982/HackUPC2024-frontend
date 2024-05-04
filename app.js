const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/gyroscope", function (req, res) {
    res.sendFile(__dirname + "/gyroscope.html");
});

app.get("/start", function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send(JSON.stringify("Pepe"));
});