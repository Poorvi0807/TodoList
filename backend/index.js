const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const { MONGO_URL } = require("./config/db");
require('dotenv').config();

const app = express();
console.log("DataBase Check");
// console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL
    , { useNewUrlParser: true, useUnifiedTopology: true }
    )
  .then(() => {
    console.log("Connected to MongoDB Successfully!!!");
  })
  .catch((err) => {
    console.log(`Failed to Connect MongoDB because of this error: ${err}`);
  });

app.use(express.json());

app.use("/users/auth", authRoutes);
app.use("/users/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started is running on the port ${PORT}`);
});
