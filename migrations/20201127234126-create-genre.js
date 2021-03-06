module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(() =>
        queryInterface.createTable("genres", {
          id: {
            allowNull: false,
            primaryKey: true,
            defaultValue: Sequelize.literal("uuid_generate_v4()"),
            type: Sequelize.UUID,
          },
          name: {
            type: Sequelize.STRING,
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
    await queryInterface.dropTable("genres");
  },
};
