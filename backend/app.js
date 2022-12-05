const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors')

// Config
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cors())

// Route Imports
const user = require("./routes/userRoute");

app.use("/api/v1", user);

module.exports = app;
