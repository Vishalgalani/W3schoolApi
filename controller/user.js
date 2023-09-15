const ADDMIN = require('../model/user')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


exports.checkJwt = async function(req, res, next) {
    try {
        const token = req.headers.authorization
        if(!token){
            throw new Error("Token not found")
        }
      const decode =   jwt.verify(token, 'process.env.JwtSign');
      const checkUser = await ADDMIN.find(decode.id)
      if(!checkUser){
        throw new Error("User is not Found")
      }
      next()

    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };

exports.signUp =  async function(req, res, next) {
  try {
      if(!req.body.username || !req.body.email || !req.body.password  ){
          throw new Error ("Please enter valid Field")
        }
        req.body.password = await bcrypt.hash(req.body.password,10)
        const data = await ADDMIN.create(req.body)
        // console.log(data);
    res.status(201).json({
        status  : "sucessfully",
        message : "New Addmin Created",
        data
    })
  } catch(error) {
    res.status(404).json({
        status : "fail",
        message : error.message
    })
  }
};

exports.LogIn =  async function(req, res, next) {
    try {
        const checkUser = await ADDMIN.findOne({email :  req.body.email})
        if(!checkUser){
            throw new Error('Invalid Email')
        }
              const checkPass= await bcrypt.compare(req.body.password,checkUser.password)
         if(!checkPass){
            throw new Error('Incorrect password')
         }     
         var token = jwt.sign({ _id: checkUser._id }, process.env.JwtSign);

          // console.log(data);
      res.status(200).json({
          status  : "sucessfully",
          message : "login Successfully",
          token
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };

  exports.allUSer =  async function(req, res, next) {
    try {
          const data = await ADDMIN.find()
          // console.log(data);
      res.status(201).json({
          status  : "sucessfully",
          message : "AlluSer is Found",
          data
      })
    } catch(error) {
      res.status(404).json({
          status : "fail",
          message : error.message
      })
    }
  };
  

