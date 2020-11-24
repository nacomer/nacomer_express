const hobbyService = require("../services/hobby");

exports.getAllHobbies = async function (req, res) {
  try {
    const hobbies = await hobbyService.getAllHobbies();
    return res.status(200).json(hobbies);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getHobby = async function (req, res) {
  try {
    const hobbies = await hobbyService.getHobby(req.params.id);
    return res.status(200).json(hobbies);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getAllComments = async function (req, res) {
  try {
    const comments = await hobbyService.getAllComments(req.params.id);
    return res.status(200).json(comments);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.postComment = async function (req, res) {
  try {
    const comment = await hobbyService.postComment(
      req.params.id,
      req.body.content,
      req.decoded.userId
    );
    return res.status(201).json({ id: comment.id, content: comment.content });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
