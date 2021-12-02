const Mongoose = require("mongoose");

const { Schema } = Mongoose;
const { ObjectId } = Schema;

const acitvitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
  itemId: {
    type: ObjectId,
    ref: "Item",
  },
});

module.exports = Mongoose.model("Activity", acitvitySchema);
