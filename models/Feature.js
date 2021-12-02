const Mongoose = require("mongoose");

const { Schema } = Mongoose;
const { ObjectId } = Schema;

const featureSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  itemId: {
    type: ObjectId,
    ref: "Item",
  },
});

module.exports = Mongoose.model("Feature", featureSchema);
