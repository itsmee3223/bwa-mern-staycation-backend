const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const imageSchema = Schema({
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("Image", imageSchema);
