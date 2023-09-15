var express = require('express');
var router = express.Router();
const addMin = require('../controller/user')

//=====================Signup====================
router.post('/signup', addMin.signUp)

//=====================Login====================
router.post('/login', addMin.LogIn)

//=====================alluser====================
router.get('/alluser',addMin.checkJwt, addMin.allUSer)



module.exports = router;
