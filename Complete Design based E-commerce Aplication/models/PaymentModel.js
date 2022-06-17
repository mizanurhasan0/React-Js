const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      required: true,
      type: String,
      trim: true,
    },
    paymentID: {
      type: String,
      required: true,
    },
    address: {
      type: Array,
      required: true,
    },
    cart: {
      type: Array,
      default: [],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
