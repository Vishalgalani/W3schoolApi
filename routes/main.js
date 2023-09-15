var express = require('express');
var router = express.Router();
const mainCategory = require('../controller/main')
const addMin = require('../controller/user')


//=====================addMainCategory====================
router.post('/addcategory',addMin.checkJwt, mainCategory.addCategory)

//=====================allMainCategory====================
router.get('/allcategory', mainCategory.allCategory)

//=====================updateMainCategory====================
router.patch('/updatecategory/:id',addMin.checkJwt, mainCategory.updateCategory)

//=====================deleteMainCategory====================
router.delete('/deletecategory/:id', addMin.checkJwt,mainCategory.deleteCategory)


module.exports = router;
