"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class participant extends Model {
    static associate(models) {
      participant.hasMany(models.chatComment, {
        sourceKey: "userId",
        foreignKey: "participantId",
      });
      participant.hasOne(models.user, {
        foreignKey: "id",
        sourceKey: "userId",
      });
    }
  }
  participant.init(
    {
      userId: DataTypes.UUID,
      eventId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "participant",
    }
  );
  return participant;
};
