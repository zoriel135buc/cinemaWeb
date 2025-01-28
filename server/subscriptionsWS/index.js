const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { fetchMembers, fetchMovies } = require("./services/dataService");
const memberRoutes = require("./routes/members.js");
const movieRoutes = require("./routes/movies");
const connectDB = require('./configs/db');

dotenv.config()


fetchMovies()
fetchMembers()
const app = express();
app.use(cors());
app.use(express.json());
connectDB()


// Routes
app.use("/api/members", memberRoutes);
app.use("/api/movies", movieRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

