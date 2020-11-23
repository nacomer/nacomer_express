const Hobby = require('../models').Hobby;
const Comment = require('../models').Comment;
const Video = require('../models').Video;
const SubPicture = require('../models').SubPicture;
const Goods = require('../models').Goods;
const NacomerUser = require('../models').NacomerUser;

exports.getAllHobbies = async function () {
    const result = await Hobby.findAll({
        // raw: true,
        attributes: ['id', 'name', 'mainPicture', 'period']
    });
    return result;
};

exports.getHobby = async function (reqHobbyId) {
    const specificHobby = await Hobby.findAll({
        // raw: true,
        where: {
            id: reqHobbyId
        },
        include: [
            {
                model: Comment, as: 'Comments',
                required: false,
                attributes: ['content']
            }, {
                model: Goods, as: 'Goods',
                required: false,
                attributes: ['goodsName', 'goodsPicture']
            }, {
                model: SubPicture, as: 'SubPictures',
                required: false,
                attributes: ['subPicture']
            }, {
                model: Video, as: 'Videos',
                required: false,
                attributes: ['videoURL']
            }]
    }
    );
    return specificHobby;
};

exports.getAllComments = async function (reqHobbyId) {
    const result = await Comment.findAll({
        where: {
            hobbyId: reqHobbyId
        },
        include: [
            {
                model: NacomerUser, as: 'NacomerUser',
                required: false,
                attributes: ['id','name']
            }
        ],
        order: [['createdAt', 'DESC']],
        attributes: ['id', 'content', 'createdAt', 'updatedAt']
    });
    return result;
};

exports.postComment = async function (reqHobbyId, reqContent) {
    const comment = await Comment.create({
        hobbyId: reqHobbyId,
        content: reqContent
    });
    return comment;
};

exports.putComment = async function (reqCommentId, reqContent) {
    // 最初に fineOne で 行を特定する
    const comment = await Comment.findOne({
        where: {
            id: reqCommentId
        }
    });

    // 特定した行に対して、update を実行する。
    const updated = await comment.update({
        content: reqContent
    });

    return updated;
};

exports.deleteComment = async function (reqCommentId) {
    const comment = await Comment.findOne({
        where: {
            id: reqCommentId
        }
    });
    try {
        // const result = await comment.destroy();
        await comment.destroy();

        return;

    } catch (err) {
        console.log(err);
    }
};

exports.getUser = async function (reqName,reqPassword) {
    const result = await NacomerUser.findOne({
        raw: true,
        where: {
            name: reqName,
            password: reqPassword
        },
        attributes: ['id', 'name']
    });
    return result;
};

exports.postUser = async function (req) {
    const user = await NacomerUser.create({
        name: req.name,
        password: req.password
    });
    return user;
};