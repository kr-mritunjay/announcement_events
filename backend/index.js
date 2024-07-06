const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const announcementRoute = require("./routes/addAnnouncement");
const event = require("./routes/addEvents");

const app = express();
const port = 5000;

// require("dotenv").config();
// Middleware
app.use(cors());
app.use(express.json());
app.use("/announcement", announcementRoute);
app.use("/event", event);

// Connect to MongoDB
const uri =
  "mongodb+srv://mritunjaykr160:tDsw4OUSStdsQh7n@cluster0.izki66a.mongodb.net/teat-user?";
console.log(uri);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });
