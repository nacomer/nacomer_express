"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class eventProperty extends Model {
    static associate(models) {
      eventProperty.belongsTo(models.property, {
        foreignKey: "propertyId",
      });
    }
  }
  eventProperty.init(
    {
      eventId: DataTypes.UUID,
      propertyId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "eventProperty",
    }
  );
  return eventProperty;
};
