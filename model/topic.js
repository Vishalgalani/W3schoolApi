const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
    type : String,
    unique : true
  },
  description : String,
  maincategory : { type: Schema.Types.ObjectId, ref: "maincategory" },
  subcategory : { type: Schema.Types.ObjectId, ref: "subcategory" }
});

const TOPIC = mongoose.model('topic', topicSchema);

module.exports = TOPIC