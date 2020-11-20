const Hobby = require('../models').Hobby;
const Period = require('../models').Period;
const Comment = require('../models').Comment;

exports.getAllHobbies = async function () {
    const result = await Hobby.findAll({
        attributes: ['id', 'name', 'mainPicture', 'periodId']
    });

    // const result = await Hobby.findAll({
    //     attributes: {
    //         exclude: ['createdAt', 'updatedAt']
    //     }
    // });

    return result;
};
// module.exports = async (req, res, next) => {
    
//     const getAllHobbies = async (req, res) => {

//     }
// };