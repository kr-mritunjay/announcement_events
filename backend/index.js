const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://mritunjaykr160:tDsw4OUSStdsQh7n@cluster0.izki66a.mongodb.net/teat-user?",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Schema and Model for Announcements
const announcementSchema = new mongoose.Schema({
  date: String,
  title: String,
  description: String,
});

const Announcement = mongoose.model("Announcement", announcementSchema);

// Schema and Model for Events
const eventSchema = new mongoose.Schema({
  date: String,
  title: String,
  time: String,
});

const Event = mongoose.model("Event", eventSchema);

// Routes
app.post("/announcements", async (req, res) => {
  const newAnnouncement = new Announcement(req.body);
  await newAnnouncement.save();
  res.json(newAnnouncement);
});

app.get("/announcements", async (req, res) => {
  const announcements = await Announcement.find();
  res.json(announcements);
});

app.delete("/announcements/:id", async (req, res) => {
  const { id } = req.params;
  await Announcement.findByIdAndDelete(id);
  res.json({ message: "Announcement deleted" });
});

app.post("/events", async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.json(newEvent);
});

app.get("/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.delete("/events/:id", async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.json({ message: "Event deleted" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
