const Post = require('../models/postModel');

const createPost = (req, res) =>{
  const {user_id, title, content} = req.body;
  Post.createPost(user_id, title, content, (err, result)=>{
    if(err) return res.status(500).json({error: 'Failed to create post'});
    res.status(201).json({message: 'Post created successfully!'});
  });
};


const getPost = (req, res) =>{
  Post.getAllPost((err, results)=>{
    if(err) return res.status(500).json({error: 'Failed to fetch posts!'});
    res.json(results);
  });
};


const getPostById = (req, res) =>{
  const postId = req.params.id;
  Post.getPostById(postId,(err, result)=>{
    if(err || result.length ===0) return res.status(404).json({error: 'Post not found!'});
    res.json(result[0]);
  });
};

const updatePost = (req, res) => {
  const postId = req.params.id;
  const {title, content} = req.body;
  Post.updatePost(postId, title, content, (err, resuls)=>{
    if(err) return res.status(500).json({error: 'Failed to update post'});
    res.json({message: 'Post updated successfully!'});
  });
};

const deletePost = (req, res)=>{
  const postId = req.params.id;
  Post.deletePost(postId,(err, results)=>{
    if(err) return res.status(500).json({error: 'Failed to delete post'});
    res.json({message: 'Post deleted successfully!'});
  })
}


module.exports = {createPost, getPost, getPostById, updatePost, deletePost};