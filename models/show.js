'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Show.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      seasonNumber: DataTypes.INTEGER,
      runtime: DataTypes.INTEGER,
      tvdbId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Show',
      tableName: 'shows'
    }
  )
  return Show
}
