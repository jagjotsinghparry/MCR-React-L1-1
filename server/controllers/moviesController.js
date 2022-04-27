const { Movie, User, Genre, Cast, sequelize } = require('../models');

class MoviesController {
  static async postMovies(req, res, next) {
    const t = await sequelize.transaction();

    try {
      const {
        title,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        genreId,
        castName,
        profilePict,
      } = req.body;

      const authorId = req.user.id;

      const slug = title.split(' ').join('-');

      const newMovie = {
        title,
        slug,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        genreId,
        authorId,
      };

      const createMovie = await Movie.create(newMovie, { transaction: t });

      const newCast = {
        movieId: createMovie.id,
        name: castName,
        profilePict,
      };

      let createCast = await Cast.create(newCast, { transaction: t });
      await t.commit();

      res.status(201).json({ message: 'Movie has been Added' });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async getMovies(req, res, next) {
    try {
      const movies = await Movie.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Genre,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
          {
            model: User,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
          {
            model: Cast,
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
        ],
      });
      res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  }

  static async getMoviesById(req, res, next) {
    try {
      const movieId = req.params.id;
      const movies = await Movie.findByPk(movieId, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [
          {
            model: Genre,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
      });
      if (movies) {
        res.status(200).json(movies);
      } else {
        throw { name: 'not_found' };
      }
    } catch (error) {
      next(error);
    }
  }

  static async updateMoviesById(req, res, next) {
    try {
      const movieId = req.params.id;

      const { title, synopsis, trailerUrl, imgUrl, rating, genreId } = req.body;

      const authorId = req.user.id;

      const slug = title.split(' ').join('-');

      const updateMovie = {
        title,
        slug,
        synopsis,
        trailerUrl,
        imgUrl,
        rating,
        genreId,
        authorId,
      };

      const movies = await Movie.findByPk(movieId);
      if (movies) {
        const result = await Movie.update(updateMovie, {
          where: { id: movieId },
          returning: true,
        });

        res.status(200).json(result);
      } else {
        throw { name: 'not_found' };
      }
    } catch (error) {
      next(error);
    }
  }

  static async deleteMoviesById(req, res, next) {
    try {
      const movieId = req.params.id;
      const movies = await Movie.findByPk(movieId);

      if (movies) {
        const result = await Movie.destroy({ where: { id: movieId } });
        res.status(200).json({ message: `${movies.title} Success to delete` });
      } else {
        throw { name: 'not_found' };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MoviesController;
