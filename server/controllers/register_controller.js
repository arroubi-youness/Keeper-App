const bcrypt = require('bcrypt');
 const User=require('../models/model');

 
       const signUp= async (req, res) => {
            try {
              const { username, email, password } = req.body;
              console.log(req.body);
              pass_hased = await bcrypt.hash(password, 10);
              const newUser = new User({ username, email, password: pass_hased });
              
              const promise = await newUser.save();
              console.log("Promise after resolving:", promise);
              
              res.status(201).json({ message: "User added successfully!" });
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: "Error saving user", error });
            }
          };

          module.exports = { signUp };

    