const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  text: { type: String, required: true},
  user_name: { type: Schema.Types.ObjectId, refs: User, required: true },
  timestamp : {type: Date, defautl: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);
