var express = require('express');
var router = express.Router();
const subCategory = require('../controller/sub')
const addMin = require('../controller/user')


//=====================addSubCategory====================
router.post('/addsubcategory',addMin.checkJwt, subCategory.addCategory)

//=====================allSubCategory====================
router.get('/allsubcategory', subCategory.allCategory)

//=====================updateSubCategory====================
router.patch('/updatesubcategory/:id', addMin.checkJwt,subCategory.updateCategory)

//=====================deleteSubCategory====================
router.delete('/deletesubcategory/:id',addMin.checkJwt, subCategory.deleteCategory)

module.exports = router;
