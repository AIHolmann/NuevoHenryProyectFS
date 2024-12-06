const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.getallMovies);
moviesRouter.get("/title", moviesController.getMovieByTitle);
moviesRouter.post("/", moviesController.createMovie);
moviesRouter.get("/:id", moviesController.getMovieById);

module.exports = moviesRouter;
