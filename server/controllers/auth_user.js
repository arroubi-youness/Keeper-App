const bcrypt = require('bcrypt');
const { json } = require('express');
const jwt =require("jsonwebtoken");
require('dotenv').config();
const User=require('../models/model');



const handleLogin= async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Username and password are required." });
    
          const user = await User.findOne({ email });
          console.log(user);
          console.log(user._id);
          

          // localStorage.setItem("id_user",user._id);
    
          if (!user) {
            return res.status(404).json({ message: "User not found." });
          }
          const match = await bcrypt.compare(password, user.password);

          if (match) {
             const accessToken=jwt.sign( { userId: user._id, email: user.email },
                process.env.ACCESS_TOKEN_REQEUST,{expiresIn:'120s'}
            );
            const refreshToken=jwt.sign( { userId: user._id, email: user.email },
                process.env.REFRESH_TOKEN_REQEUST,{expiresIn:'1d'}
            );

            /////saving  the  refresh   token  in  db
            user.refreshToken = refreshToken;
            await user.save();

            res.cookie('jwt',refreshToken,{ httpOnly:true,maxAge:24*60*60*1000});
            res.status(201).json({ accessToken,userId: user._id,username:user.username });


            

        }    else{
            return res.status(401).json({ message: "Incorrect password." });
          }

  
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({message:'server error. try again'});
  
    }
  }

  module.exports={handleLogin};