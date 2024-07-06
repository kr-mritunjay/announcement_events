import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import Announcement from "../components/Announcement";
import Event from "../components/Event";
import axios from "axios";

const AnnouncementsEvents = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [events, setEvents] = useState([]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    date: "",
    title: "",
    description: "",
  });

  const [newEvent, setNewEvent] = useState({
    date: "",
    title: "",
    time: "",
  });

  // Fetch announcements and events from the backend
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const response = await axios.get("http://localhost:5000/announcements");
      setAnnouncements(response.data);
    };

    const fetchEvents = async () => {
      const response = await axios.get("http://localhost:5000/events");
      setEvents(response.data);
    };

    fetchAnnouncements();
    fetchEvents();
  }, []);

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/announcements",
      newAnnouncement
    );
    setAnnouncements([response.data, ...announcements]);
    setNewAnnouncement({ date: "", title: "", description: "" });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/events", newEvent);
    setEvents([response.data, ...events]);
    setNewEvent({ date: "", title: "", time: "" });
  };

  const removeAnnouncement = async (id) => {
    await axios.delete(`http://localhost:5000/announcements/${id}`);
    setAnnouncements(
      announcements.filter((announcement) => announcement._id !== id)
    );
  };

  const removeEvent = async (id) => {
    await axios.delete(`http://localhost:5000/events/${id}`);
    setEvents(events.filter((event) => event._id !== id));
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
              Add Announcement
            </Typography>
            <form onSubmit={handleAnnouncementSubmit}>
              <TextField
                label="Date"
                value={newAnnouncement.date}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    date: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Title"
                value={newAnnouncement.title}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    title: e.target.value,
                  })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description"
                value={newAnnouncement.description}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    description: e.target.value,
                  })
                }
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Add Announcement
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>
              Add Event
            </Typography>
            <form onSubmit={handleEventSubmit}>
              <TextField
                label="Date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Time"
                value={newEvent.time}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, time: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <Button type="submit" variant="contained" color="primary">
                Add Event
              </Button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, background: "#f0f0f0" }}>
            <Typography variant="h4" gutterBottom>
              Announcements
            </Typography>
            <Box
              sx={{
                maxHeight: 400,
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              }}
            >
              {announcements.map((announcement) => (
                <Box key={announcement._id} sx={{ marginBottom: 2 }}>
                  <Announcement {...announcement} />
                  <IconButton
                    onClick={() => removeAnnouncement(announcement._id)}
                    color="secondary"
                  >
                    Remove
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, background: "#f0f0f0" }}>
            <Typography variant="h4" gutterBottom>
              Events
            </Typography>
            <Box
              sx={{
                maxHeight: 400,
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                "-ms-overflow-style": "none",
                "scrollbar-width": "none",
              }}
            >
              {events.map((event) => (
                <Box key={event._id} sx={{ marginBottom: 2 }}>
                  <Event {...event} />
                  <IconButton
                    onClick={() => removeEvent(event._id)}
                    color="secondary"
                  >
                    Remove
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnnouncementsEvents;
