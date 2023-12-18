import { db } from '../db.js'

export const register = (req, res) => {   
   // Check existing user 
   const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

   db.query(q, [req.body.email, req.body.username], (err, result) => {
      if (err) {
         return res.status(500).json({ error: err.message });
      }
      if (result.length > 0) {
         return res.status(409).json({ error: 'User already exists' });
      }
      // Create new user
      const q = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(q, [req.body.username, req.body.email, req.body.password], (err, result) => {
         if (err) {
            return res.status(500).json({ error: err.message });
         }
         return res.status(201).json({ message: 'User created' });
      });
   });
};

export const login = (req, res) => {   

};



export const logout = (req, res) => {   

};


