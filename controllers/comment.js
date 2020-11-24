const commentService = require("../services/comment");

exports.putComment = async function (req, res) {
  try {
    const comment = await commentService.putComment(
      req.params.id,
      req.body.content
    );
    return res.status(200).json({ content: comment.content });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteComment = async function (req, res) {
  try {
    // const result = await apiService.deleteComment(req.params.id);
    await commentService.deleteComment(req.params.id);
    // if (result > 0) {
    return res.status(204).end();
    // } else {
    //     return res.status(202);
    // }
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
