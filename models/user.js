const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  user_name: { type: String, required: true, maxLength: 100 },
  password: { type: String, required: true, maxLength: 100 },
membership_status: {type: Boolean, default: false}
});

module.exports = mongoose.model("User", UserSchema);
