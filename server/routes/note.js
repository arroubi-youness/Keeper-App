const express = require ("express");
const router = express.Router();
const note_handle=require ("../controllers/addNote");


router.post("/", note_handle.handleNote);

module.exports = router;