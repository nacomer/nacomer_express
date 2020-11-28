module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => queryInterface.createTable('events', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.UUID,
      },
      subject: {
        type: Sequelize.STRING
      },
      ownerId: {
        type: Sequelize.UUID
      },
      deadline: {
        type: Sequelize.DATE
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      maxpart: {
        type: Sequelize.INTEGER
      },
      minpart: {
        type: Sequelize.INTEGER
      },
      place: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      hobbyId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }))
  ,
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  }
};