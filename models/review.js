'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {}
  }
  Review.init(
    {
      content: DataTypes.STRING,
      rating: DataTypes.REAL,
      title: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
