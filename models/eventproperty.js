"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class eventProperty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
