const express = require('express');
const GenresController = require('../controllers/genreController');
const MoviesController = require('../controllers/moviesController');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/login', UserController.postLogin);
router.post('/register', UserController.postRegister);

router.get('/movies', MoviesController.getMovies);
router.get('/movies/:id', MoviesController.getMoviesById);
router.get('/genres/user', GenresController.getGenre);

module.exports = router;
