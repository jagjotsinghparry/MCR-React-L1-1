const express = require('express');
const MoviesController = require('../controllers/moviesController');
const router = express.Router();
const { authorization } = require('../middlewares/authorization');

router.post('/', authorization, MoviesController.postMovies);
router.put('/:id', authorization, MoviesController.updateMoviesById);
router.delete('/:id', authorization, MoviesController.deleteMoviesById);

module.exports = router;
