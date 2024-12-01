const note = require('../models/note');
const { json } = require('express');
const mongoose = require('mongoose');

const handleGettednote= async(req,res)=>{
    try{
        const {userId}=req.query;
        console.log(userId);
        if(!userId)  return res.status(400).json({ message:"id user   is  required (should added )"});
        const objectId = new mongoose.Types.ObjectId(userId);

        const Notes= await note.find({userId:objectId});
        if(!Notes || Notes.length==0) return res.status(404).json({ message:"No  notes are  found!"});
        const content = Notes.map(note => note.content); 
        res.status(200).json({content});

    }catch (error) {
        console.error("Error during getting data:", error);
        return res.status(500).json({message:'server error, try again'});
  
    }

}
module.exports={handleGettednote};