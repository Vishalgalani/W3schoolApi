const SUBCATEGORY = require('../model/sub')
const MAINCATEGORY = require('../model/main')


exports.addCategory =  async function(req, res, next) {
  try {
      if(!req.body.name || !req.body.maincategory ){
          throw new Error ("Please enter valid Field")
        }
        checkMain = await MAINCATEGORY.findById( data.maincategory)
        if(!checkMain){
            throw new Error("Category is not valid")
        }
        const data = await SUBCATEGORY.create(req.body)
        // console.log(data);
    res.status(201).json({
        status  : "sucessfully",
        message : "Category is added",
        data
    })
  } catch(error) {
    res.status(404).json({
        status : "fail",
        message : error.message
    })
  }
};

exports.allCategory =  async function(req, res, next) {
    try {
          const data = await SUBCATEGORY.find().populate("maincategory")
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

  exports.updateCategory =  async function(req, res, next) {
    try {
      const getData = await SUBCATEGORY.findById(req.params.id)
      var data = {...getData._doc,...req.body}
      checkMain = await MAINCATEGORY.findById( data.maincategory)
      if(!checkMain){
          throw new Error("Category is not valid")
      }
         await SUBCATEGORY.findByIdAndUpdate(req.params.id,req.body)
        //   console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "Category is Updated",
        
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };

  exports.deleteCategory =  async function(req, res, next) {
    try {
         await SUBCATEGORY.findByIdAndDelete(req.params.id)
        //   console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "data is deleted",
        
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };