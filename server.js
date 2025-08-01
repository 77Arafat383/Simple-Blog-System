//server.js
require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comments');

app.use(express.json());

app.use('/api',authRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/posts',commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});