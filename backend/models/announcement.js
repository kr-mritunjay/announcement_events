// announcement.js

const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
});

module.exports = mongoose.model("Announcement", announcementSchema);
