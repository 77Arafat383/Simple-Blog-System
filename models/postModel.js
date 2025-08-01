const db = require('../config/db');

const createPost = (userId, title, content,callback)=>{
    const sql = 'INSERT INTO posts (user_id, title, content) VALUES (?,?,?)';
    db.query(sql,[userId, title,content],callback);
};

const getAllPost = (callback)=>{
    const sql = 'SELECT * FROM posts';
    db.query(sql,callback);
};

const getPostById = (id,callback)=>{
    const sql  = 'SELECT *FROM post WHERE id = ?';
    db.query(sql,[id],callback);
};

const updatePost = (id, title,content,callback)=>{
    const sql = 'UPDATE posts SET title=?, content=? WHERE id = ?';
    db.query(sql,[title,content,id],callback);

};

const deletePost = (id, callback)=>{
    const sql = 'DELETE FROM posts WHERE id=?';
    db.query(sql,[id],callback);
};

module.exports = {createPost,getAllPost,getPostById,updatePost,deletePost};