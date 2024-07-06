import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

const Event = ({ date, title, time }) => (
  <Card
    style={{
      marginBottom: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      border: "1px solid #ddd",
    }}
  >
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Box
            textAlign="center"
            bgcolor="#6200ea"
            color="#fff"
            p={1}
            borderRadius="8px 0 0 8px"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6">{date}</Typography>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {time}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Event;
