const SUBCATEGORY = require('../model/sub')
const MAINCATEGORY = require('../model/main')
const TOPIC = require('../model/topic')
 

exports.addTopic =  async function(req, res, next) {
  try {
      if(!req.body.name || !req.body.description || !req.body.subcategory || !req.body.maincategory){
          throw new Error ("Please enter valid Field")
        }
        checkMain = await MAINCATEGORY.findById( req.body.maincategory)
        if(!checkMain){
            throw new Error("Maincategory is not valid")
        }
        checkSub = await SUBCATEGORY.findById( req.body.subcategory)
        if(!checkSub){
            throw new Error("Subcategory is not valid")
        }
        const data = await TOPIC.create(req.body)
        // console.log(data);
    res.status(201).json({
        status  : "sucessfully",
        message : "Topic is added",
        data
    })
  } catch(error) {
    res.status(404).json({
        status : "fail",
        message : error.message
    })
  }
};

exports.allTopic =  async function(req, res, next) {
    try {
          const data = await TOPIC.find().populate("maincategory").populate("subcategory")
        //   console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "all data is found",
          data
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };

  exports.updateTopic =  async function(req, res, next) {
    try {
      const getData = await TOPIC.findById(req.params.id)
        var data = {...getData._doc,...req.body}
      checkMain = await MAINCATEGORY.findById( data.maincategory)
      if(!checkMain){
          throw new Error("Maincategory is not valid")
      }
      checkSub = await SUBCATEGORY.findById( data.subcategory)
      if(!checkSub){
          throw new Error("Subcategory is not valid")
      }
         await TOPIC.findByIdAndUpdate(req.params.id,req.body)
        //   console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "Topic is Updated",
        
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };

  exports.deleteTopic =  async function(req, res, next) {
    try {
         await TOPIC.findByIdAndDelete(req.params.id)
        //   console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "Topic is deleted",
        
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };