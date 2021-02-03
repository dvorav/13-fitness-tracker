//Requires
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

//Port 300- Connection
const PORT = process.env.PORT || 3000;

//Express setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//HTML ROUTES 

//Main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
})
//Exercise Page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
})
//Stats page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
})

//Port Connection
app.listen(PORT, () => {
    console.log('App is up and functioning!')
})