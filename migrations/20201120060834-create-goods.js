"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Goods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      goodsName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      hobbyId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Hobbies",
          key: "id",
        },
      },
      goodsPicture: {
        allowNull: false,
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
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("Goods");
  },
};
