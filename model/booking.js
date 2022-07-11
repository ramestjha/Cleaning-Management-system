const mongoose = require("mongoose");
const bookingSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  mob: String,
  date: String,
  address: String,
  service: String,
});

module.exports = mongoose.model("booking", bookingSchema);
