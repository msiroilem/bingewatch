'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      content: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.REAL
      },
      title: {
        type: Sequelize.STRING
      },
      showId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'shows',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
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
    await queryInterface.dropTable('reviews')
  }
}
