'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Hobby, {
        foreignKey: 'hobbyId',
        onDelete: 'CASCADE',
      });
      // Comment.belongsTo(models.NacomerUser, {
      //   foreignKey: 'nacomerUserId',
      //   onDelete: 'CASCADE',
      // })
    };
  };
  Comment.init({
    hobbyId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    // nacomerUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};