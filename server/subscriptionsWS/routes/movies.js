const express = require("express");
const Movie = require("../models/movie");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
