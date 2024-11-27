const moviesServices = require("../services/moviesServices");

module.exports = {
  getallMovies: async (req, res) => {
    try {
      const movies = await moviesServices.getAllMovies();
      res.status(200).json({ movies: movies });
    } catch (error) {
      res.status(500).send("Error al traer las peliculas");
    }
  },
};
