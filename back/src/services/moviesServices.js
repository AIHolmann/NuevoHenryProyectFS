const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async () => {
    const movies = await Movie.find();
    return movies;
  },

  getMovieById: async (id) => {
    const movie = await Movie.findById(id);
    return movie;
  },

  getMovieByTitle: async (title) => {
    //console.log(title);
    const movie = await Movie.findOne({ title });
    return movie;
  },

  createMovie: async ({ movie }) => {
    const newmovie = await Movie.create(movie);
    return newmovie;
  },
};
