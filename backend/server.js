require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const PORT = process.env.PORT || 5300;
const server = express();

const session = require("express-session");
var collection;
var saudi;
//mongoose connection
mongoose.connect("mongodb://localhost:27017/covid-19", function (err, db) {
  if (err) {
    return console.dir(err);
  }

  collection = db.collection("summary");
  saudi = db.collection("Saudi");
  // collection.find().toArray(function(err, result) {
  //     // here ...
  //     console.log("result")
  //     console.log(result)
  // });
});

const cors = require("cors");
server.use(cors());

//allows json to be sent to via request express
server.use(express.json());

server.get("/", (req, res) => {
  console.log("got called");
  collection.find().toArray(function (err, result) {
    if (err) {
      return console.log(err);
    }
    // here ...
    console.log("result");
    console.log(result);
    res.send(result);
  });
});

server.get("/saudi", (req, res) => {
  console.log("got called");
  saudi.find().toArray(function (err, result) {
    if (err) {
      return console.log(err);
    }
    // here ...
    console.log("result");
    console.log(result);
    res.send(result);
  });
});
//cannot find route
server.use("*", (request, response) => {
  response.status(404).json({ message: "Data not found!" });
});

server.listen(PORT, () => console.log(`connected to ${PORT}`));
