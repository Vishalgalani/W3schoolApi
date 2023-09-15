const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const mainCategorySchema = new Schema({
  title: {
    type : String,
    unique : true
  },
  colorcode: String,
  tagline : String
});

const MAINCATEGORY = mongoose.model('maincategory', mainCategorySchema);

module.exports = MAINCATEGORY