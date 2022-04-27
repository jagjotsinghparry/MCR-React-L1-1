const express = require('express');
const GenresController = require('../controllers/genreController');
const router = express.Router();

router.get('/', GenresController.getGenre);
router.post('/', GenresController.postGenre);
router.delete('/:id', GenresController.deleteGenre);

module.exports = router;
