var express = require('express');
var router = express.Router();
const topic= require('../controller/topic')
const addMin = require('../controller/user')


//=====================addtopic====================
router.post('/addtopic',addMin.checkJwt, topic.addTopic)

//=====================allTopic====================
router.get('/alltopic', topic.allTopic)

//=====================updateTopic====================
router.patch('/updatetopic/:id',addMin.checkJwt, topic.updateTopic)

//=====================deleteTopic==================
router.delete('/deletetopic/:id',addMin.checkJwt, topic.deleteTopic)

module.exports = router;
