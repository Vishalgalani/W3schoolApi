const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const addminSchema = new Schema({
  username :  String,
  email: {
    type : String,
    unique : true
  },
  password : String
});

const ADDMIN = mongoose.model('addmin', addminSchema);

module.exports = ADDMIN