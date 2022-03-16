const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  like: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("trip", tripSchema);
