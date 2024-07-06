// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementsEvents from "./pages/AnnouncementEvents";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/announcements-events" element={<AnnouncementsEvents />} />
      </Routes>
    </div>
  );
};

const HomePage = () => <div>Home Page</div>;

export default App;
