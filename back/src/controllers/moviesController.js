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

  getMovieById: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await moviesServices.getMovieById(id);
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).send("Error al traer la pelicula");
    }
  },
  getMovieByTitle: async (req, res) => {
    try {
      const { title } = req.body;
      console.log(req.body);
      const movie = await moviesServices.getMovieByTitle(title);
      res.status(200).json({ movie: movie });
    } catch (error) {
      res.status(500).send("Error al traer la pelicula");
    }
  },
  createMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;

      const allproperties = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      };
      const newMovie = await moviesServices.createMovie(allproperties);
      res.status(201).json({ message: "Película creada con éxito", newMovie });
    } catch (error) {
      res.status(500).send("Error al crear la pelicula");
    }
  },
};
