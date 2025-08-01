const Comment = require('../models/commentModel');

const addComment = (req, res) => {
  const postId = req.params.id;
  const { user_id, comment_text } = req.body;
  Comment.addComment(postId, user_id, comment_text, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to add comment' });
    res.status(201).json({ message: 'Comment added' });
  });
};

const getCommentsByPostId = (req, res) => {
  const postId = req.params.id;
  Comment.getCommentsByPostId(postId, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch comments' });
    res.json(results);
  });
};

module.exports = { addComment, getCommentsByPostId };
