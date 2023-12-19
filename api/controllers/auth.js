import { db } from '../db.js'

export const register = (req, res) => {   
   // Check existing user 
   const q = 'SELECT * FROM users WHERE email = ? OR username = ?';

   db.query(q, [req.body.email, req.body.username], (err, data) => {
      if(error) return res.json({ error: error.message });

      if(data.length > 0) {
         return res.status(409).json({ error: 'User already exists' });
      }

      // Create user

      const q = 'INSERT INTO users SET ?';

      db.query(q, req.body, (err, data) => {
         if(error) return res.json({ error: error.message });

         return res.json({ message: 'User created successfully' });
      }
      )
   });
};

export const login = (req, res) => {   

};



export const logout = (req, res) => {   

};


