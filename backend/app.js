const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const cors = require("cors");

// Config
dotenv.config({ path: '../backend/config/config.env' })

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// Route Imports
const user = require('./routes/userRoute')

app.use('/api/v1', user)



module.exports = app
