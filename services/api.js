const Hobby = require('../models').Hobby;
const Comment = require('../models').Comment;
const Video = require('../models').Video;
const SubPicture = require('../models').SubPicture;
const Goods = require('../models').Goods;

exports.getAllHobbies = async function () {
    const result = await Hobby.findAll({
        raw:true,
        attributes: ['id', 'name', 'mainPicture', 'period']
    });
    return result;
};

exports.getHobby = async function (reqHobbyId) {
        const specificHobby = await Hobby.findAll({
            raw:true,
            where: {
                id:reqHobbyId
            },
            include: [
                {
                    model: Comment, as: 'Comments',
                    required: true,
                    attributes: ['content']
                }, {
                    model: Goods, as: 'Goods',
                    required: true,
                    attributes: ['goodsName','goodsPicture']
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
            hobbyId:reqHobbyId
        },
        raw:true,
        attributes: ['id', 'content']
    });
    return result;
};


// module.exports = async (req, res, next) => {
    
//     const getAllHobbies = async (req, res) => {

//     }
// };