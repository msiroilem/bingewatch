'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
      Review.belongsTo(models.Show, {
        foreignKey: 'showId',
        as: 'show'
      })
    }
  }
  Review.init(
    {
      content: DataTypes.STRING,
      rating: DataTypes.REAL,
      title: DataTypes.STRING,
      showId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'shows',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
