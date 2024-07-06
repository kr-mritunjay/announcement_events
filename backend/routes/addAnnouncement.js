// addAnnouncements.js

const express = require("express");
const router = express.Router();
const Announcement = require("../models/announcement");

router.post("/announcements", async (req, res) => {
  const newAnnouncement = new Announcement(req.body);
  await newAnnouncement.save();
  res.json(newAnnouncement);
});

router.get("/announcements", async (req, res) => {
  const announcements = await Announcement.find();
  res.json(announcements);
});

router.delete("/announcements/:id", async (req, res) => {
  const { id } = req.params;
  await Announcement.findByIdAndDelete(id);
  res.json({ message: "Announcement deleted" });
});

module.exports = router;
