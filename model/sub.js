const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    type : String,
    unique : true
  },
  maincategory : { type: Schema.Types.ObjectId, ref: "maincategory" }
});

const SUBCATEGORY = mongoose.model('subcategory', subCategorySchema);

module.exports = SUBCATEGORY