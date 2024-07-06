import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Announcement = ({ date, title, description }) => (
  <Card
    style={{
      marginBottom: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      border: "1px solid #ddd",
    }}
  >
    <CardContent>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "8px",
          marginBottom: "8px",
        }}
      >
        {date}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography variant="body2" style={{ marginTop: "8px" }}>
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default Announcement;
