const Hobby = require('../models').Hobby;
const Comment = require('../models').Comment;
const Video = require('../models').Video;
const SubPicture = require('../models').SubPicture;
const Goods = require('../models').Goods;

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
                required: true,
                attributes: ['content']
            }, {
                model: Goods, as: 'Goods',
                required: true,
                attributes: ['goodsName', 'goodsPicture']
            }, {
                model: SubPicture, as: 'SubPictures',
                required: true,
                attributes: ['subPicture']
            }, {
                model: Video, as: 'Videos',
                required: true,
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
        // raw: true,
        attributes: ['id', 'content']
    });
    return result;
};

//TODO commentのNULLを制限する
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
        where : {
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
        where : {
            id: reqCommentId
        }
    });
    try {
        // const result = await comment.destroy();
        await comment.destroy();

        return;

    } catch(err) {
        console.log(err);
    }
};
