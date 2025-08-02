const express = require('express');
const router = express.Router();
const {addComment, getCommentsByPostId} = require('../Controllers/commentController');

router.post('/:id/comments',addComment);
router.get('/:id/comments',getCommentsByPostId);

module.exports = router;