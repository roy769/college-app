var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PipSchema = new Schema({
  title: String,
  body: String
}) ;

var Pip = mongoose.model("Pip", PipSchema);

module.exports = Pip;
