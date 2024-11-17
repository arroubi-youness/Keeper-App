const express = require("express");
router = express.Router();

const getNote = require("../controllers/getNote");

router.get("/", getNote.handleGettednote);

module.exports = router;
