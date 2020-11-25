const Comment = require("../models").Comment;

exports.putComment = async function (reqCommentId, reqContent) {
  // 最初に fineOne で 行を特定する
  const comment = await Comment.findOne({
    where: {
      id: reqCommentId,
    },
  });

  // 特定した行に対して、update を実行する。
  const updated = await comment.update({
    content: reqContent,
  });

  return updated;
};

exports.deleteComment = async function (reqCommentId) {
  const comment = await Comment.findOne({
    where: {
      id: reqCommentId,
    },
  });
  try {
    // const result = await comment.destroy();
    await comment.destroy();

    return;
  } catch (err) {
    console.log(err);
  }
};
