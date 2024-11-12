const mongoose = require('mongoose');


 
const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Foreign key
  content: Object,
  createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
