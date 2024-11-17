const express = require ("express");
const router = express.Router();
const Login_handle=require ("../controllers/auth_user");


router.post("/", Login_handle.handleLogin);

module.exports = router;
