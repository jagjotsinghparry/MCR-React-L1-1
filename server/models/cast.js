'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cast.belongsTo(models.Movie, { foreignKey: 'movieId' });
    }
  }
  Cast.init(
    {
      movieId: {
        type: DataTypes.INTEGER,
        notNUll: false,
        validate: {
          notEmpty: { msg: 'movieId is required' },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'name is required' },
          notEmpty: { msg: 'name is required' },
        },
      },
      profilePict: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Profile picture is required' },
          notEmpty: { msg: 'Profile picture is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Cast',
    }
  );
  return Cast;
};
