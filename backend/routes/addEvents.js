const express = require("express");
const router = express.Router();
const Event = require("../models/events");

router.post("/events", async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

router.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.delete("/events/:id", async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.json({ message: "Event deleted" });
});

module.exports = router;
