'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    static associate(models) {
      Show.hasMany(models.Review, {
        foreignKey: 'show_id',
        as: 'review'
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
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
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
