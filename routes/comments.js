const express = require('express');
const router = express.Router();
const { addComment, getCommentsByPostId } = require('../controllers/commentController');

router.post('/:id/comments', addComment); // :id = post_id
router.get('/:id/comments', getCommentsByPostId);

module.exports = router;