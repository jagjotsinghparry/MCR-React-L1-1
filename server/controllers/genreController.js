const { Genre } = require('../models');

class GenresController {
  static async getGenre(req, res, next) {
    try {
      const genres = await Genre.findAll();
      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }

  static async postGenre(req, res, next) {
    try {
      const name = req.body.name;

      const newGenre = {
        name,
      };

      const genres = await Genre.create(newGenre);

      res.status(200).json(genres);
    } catch (error) {
      next(error);
    }
  }

  static async deleteGenre(req, res, next) {
    try {
      const genreId = req.params.id;
      const genre = await Genre.findByPk(genreId);

      if (!genre) {
        throw { name: 'genre_not_found' };
      }

      const result = await Genre.destroy({ where: { id: genreId } });

      res.status(200).json({ message: `${genre.name} Success to delete ` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GenresController;
