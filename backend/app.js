const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Config
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const user = require("./routes/userRoute");

app.use("/api/v1", user);

module.exports = app;
