const MAINCATEGORY = require('../model/main')


exports.addCategory =  async function(req, res, next) {
  try {
      if(!req.body.title || !req.body.colorcode || !req.body.tagline  ){
          throw new Error ("Please enter valid Field")
        }
        const data = await MAINCATEGORY.create(req.body)
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
          const data = await MAINCATEGORY.find()
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
         await MAINCATEGORY.findByIdAndUpdate(req.params.id,req.body)
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
         await MAINCATEGORY.findByIdAndDelete(req.params.id)
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