'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      Show.belongsToMany(models.User, {
        through: 'UserShow'
      }),
        Show.hasMany(models.Review, {
          foreignKey: 'showId'
        })
    }
  }
  Show.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      seasonNumber: DataTypes.INTEGER,
      runtime: DataTypes.INTEGER,
      tvdbId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Show',
      tableName: 'shows'
    }
  )
  return Show
}
