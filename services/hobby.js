const Hobby = require("../models").Hobby;
const Comment = require("../models").Comment;
const Video = require("../models").Video;
const SubPicture = require("../models").SubPicture;
const Goods = require("../models").Goods;
const NacomerUser = require("../models").NacomerUser;
const Category = require("../models").Category;

exports.getAllHobbies = async function () {
  const result = await Hobby.findAll({
    // raw: true,
    attributes: ["id", "name", "mainPicture", "period", "cost"],
    include: [
      {
        model: Category,
        as: "Categories",
        required: false,
        attributes: ["name"],
      },
    ],
  });
  return result;
};

exports.getHobby = async function (reqHobbyId) {
  const specificHobby = await Hobby.findAll({
    // raw: true,
    where: {
      id: reqHobbyId,
    },
    include: [
      {
        model: Comment,
        as: "Comments",
        required: false,
        attributes: ["content"],
      },
      {
        model: Goods,
        as: "Goods",
        required: false,
        attributes: ["goodsName", "goodsPicture"],
      },
      {
        model: SubPicture,
        as: "SubPictures",
        required: false,
        attributes: ["subPicture", "description"],
      },
      {
        model: Video,
        as: "Videos",
        required: false,
        attributes: ["videoURL", "description"],
      },
    ],
  });
  return specificHobby;
};

exports.getAllComments = async function (reqHobbyId) {
  const result = await Comment.findAll({
    where: {
      hobbyId: reqHobbyId,
    },
    include: [
      {
        model: NacomerUser,
        as: "NacomerUser",
        required: false,
        attributes: ["id", "name", "picture"],
      },
    ],
    order: [
      ["createdAt", "DESC"],
      ["id", "ASC"],
    ],
    attributes: ["id", "content", "createdAt", "updatedAt"],
  });
  return result;
};

exports.postComment = async function (
  reqHobbyId,
  reqContent,
  reqNacomerUserId
) {
  const comment = await Comment.create({
    hobbyId: reqHobbyId,
    content: reqContent,
    nacomerUserId: reqNacomerUserId,
  });
  return comment;
};
