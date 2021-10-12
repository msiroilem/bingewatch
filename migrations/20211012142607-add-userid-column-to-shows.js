'use strict'

const { query } = require('express')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('shows', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('shows', 'userId')
  }
}
