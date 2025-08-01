const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ error: 'Password encryption failed' });
    createUser(name, email, hash, (err, result) => {
      if (err) return res.status(500).json({ error: 'User creation failed' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  findUserByEmail(email, (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid email' });
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).json({ error: 'Invalid password' });
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
      res.json({ message: 'Login successful', token });
    });
  });
};

module.exports = { registerUser, loginUser };