const express = require("express");
const router = express.Router();
const signUp_function=require("../controllers/register_controller")

router.post("/",signUp_function.signUp);



module.exports = router;
