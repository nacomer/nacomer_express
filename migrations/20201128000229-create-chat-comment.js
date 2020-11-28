module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("chatComments", {
          id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
            type: Sequelize.UUID,
          },
          participantId: {
            type: Sequelize.UUID,
          },
          eventId: {
            type: Sequelize.UUID,
          },
          comment: {
            type: Sequelize.STRING,
          },
          date: {
            type: Sequelize.DATE,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        })
      ),
  down: async (queryInterface) => {
    await queryInterface.dropTable("chatComments");
  },
};
