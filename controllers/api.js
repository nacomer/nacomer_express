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

exports.getHobby = async function (req, res, next) {
    try {
        const hobbies = await apiService.getHobby(req.params.id);
        return res.status(200).json(hobbies);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.getAllComments = async function (req, res, next) {
    try {
        const comments = await apiService.getAllComments(req.params.id);
        return res.status(200).json(comments);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.postComment = async function (req, res, next) {
    try {
        const comment = await apiService.postComment(req.params.id, req.body.content);
        return res.status(201).json({ id: comment.id, content: comment.content});
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.putComment = async function (req, res, next) {
    try {
        const comment = await apiService.putComment(req.params.id, req.body.content);
        return res.status(200).json({ content: comment.content});
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.deleteComment = async function (req, res, next) {
    try {
        // const result = await apiService.deleteComment(req.params.id);
        await apiService.deleteComment(req.params.id);
        // if (result > 0) {
            return res.status(204).end();
        // } else {
        //     return res.status(202);
        // }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};
