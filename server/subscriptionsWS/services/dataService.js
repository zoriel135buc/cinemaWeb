const axios = require("axios");
const Member = require("../models/member");
const Movie = require("../models/movie");

// Fetch and populate members
const fetchMembers = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const members = response.data.map(user => ({
      name: user.name,
      email: user.email,
      city: user.address.city,
    }));
    await Member.insertMany(members);
    console.log("Members populated successfully.");
  } catch (error) {
    console.error("Error fetching members:", error);
  }
};

// Fetch and populate movies
const fetchMovies = async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    const movies = response.data.map(show => ({
      name: show.name,
      genres: show.genres,
      image: show.image.medium,
      premiered: show.premiered,
    }));
    await Movie.insertMany(movies);
    console.log("Movies populated successfully.");
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

module.exports = { fetchMembers, fetchMovies };
