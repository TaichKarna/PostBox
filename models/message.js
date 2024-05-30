const mongoose = require("mongoose");
const User = require ('./user');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true},
  user_name: { type: Schema.Types.ObjectId, ref: User, required: true },
  timestamp : {type: Date, defautl: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);
