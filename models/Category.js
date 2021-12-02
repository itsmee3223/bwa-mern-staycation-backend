const Mongoose = require("mongoose");

const { Schema } = Mongoose;
const { ObjectId } = Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: ObjectId,
      ref: "Item",
    },
  ],
});

module.exports = Mongoose.model("Category", categorySchema);
