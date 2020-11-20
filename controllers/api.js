const apiService = require('../services/api');

exports.getAllHobbies = async function (req, res, next) {
    // const page = req.params.page ? req.params.page : 1;
    // const limit = req.params.limit ? req.params.limit : 10;
    try {
        const hobbies = await apiService.getAllHobbies();
        return res.status(200).json(hobbies);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
// module.exports = async (req, res, next) => {
    
//     const getAllHobbies = async (req, res) => {

//     }
// };