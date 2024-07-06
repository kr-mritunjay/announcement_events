// events.js

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  date: String,
  title: String,
  time: String,
});

module.exports = mongoose.model("Event", eventSchema);
