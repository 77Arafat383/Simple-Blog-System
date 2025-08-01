const db = require('../config/db');

const addComment = (postId,userId, text,callback)=>{
    const sql = 'INSERT INTO comments (post_id,user_id,comment_text) VALUES(?,?,?)';
    db.query(sql, [postId,userId,text],callback);
};

const getCommentsByPostId = (postId, callback)=>{
    const sql = 'SELECT * FROM comments WHERE post_id=?';
    db.query(sql,[postId],callback);
}

module.exports={addComment,getCommentsByPostId};