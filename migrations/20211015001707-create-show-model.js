'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shows', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: { type: Sequelize.STRING },
      genre: { type: Sequelize.STRING },
      seasonNumber: { type: Sequelize.INTEGER },
      runtime: { type: Sequelize.INTEGER },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shows')
  }
}
