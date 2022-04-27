'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.User, { foreignKey: 'authorId' });
      Movie.belongsTo(models.Genre, { foreignKey: 'genreId' });
      Movie.hasMany(models.Cast, { foreignKey: 'movieId' });
    }
  }
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Title is required' },
          notEmpty: { msg: 'Title is required' },
        },
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Slug is required' },
          notEmpty: { msg: 'Slug is required' },
        },
      },
      synopsis: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Synopsis is required' },
          notEmpty: { msg: 'Synopsis is required' },
        },
      },
      trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Trailer url is required' },
          notEmpty: { msg: 'Trailer url is required' },
          isUrl: { msg: 'Please enter a valid trailer url format' },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Image url is required' },
          notEmpty: { msg: 'Image url is required' },
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        notNUll: false,
        validate: {
          notEmpty: { msg: 'Rating is required' },
          min: { args: 1, msg: 'Rating minimum is 1' },
          max: { args: 5, msg: 'Rating maximum is 5' },
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        notNUll: false,
        validate: {
          notEmpty: { msg: 'genreId is required' },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        notNUll: false,
        validate: {
          notEmpty: { msg: 'authorId is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
