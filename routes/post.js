const express = require('express');
const router = express.Router();
const {createPost, getPost, getPostById, updatePost, deletePost}= require('../Controllers/postController');

router.post('/',createPost);
router.get('/',getPost);
router.get('/:id',getPostById);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);

module.exports = router;