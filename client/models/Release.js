var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ReleaseSchema = new Schema ({

  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  pip: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

var Release = mongoose.model("Release", ReleaseSchema);

module.exports = Release;
