const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  genres: [String],
  image: String,
  premiered: Date,
});

module.exports = mongoose.model("Movie", movieSchema);