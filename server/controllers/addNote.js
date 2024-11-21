const note = require ('../models/note');
const { json } = require('express');


const handleNote= async (req, res) => {
    try {
        
         console.log(req.body);
         const {id_user,Note}=req.body;

         if (!id_user || !Note)
            return res
              .status(400)
              .json({ message: "id_user and Note are required." });
              const newNote = new note({
                userId: id_user,   
                content: Note    
            });
              await newNote.save();
              res.status(201).json({message:"note saved succssufly"});

        
    }
    catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({message:'server error. try again'});
  
    };
}

module.exports={handleNote};