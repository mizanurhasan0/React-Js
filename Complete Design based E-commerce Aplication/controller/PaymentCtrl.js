const PaymentModel = require("../models/PaymentModel");
const UserModel = require("../models/UserModel");

const PaymentCtrl = {
  getPayments: async (req, res) => {
    try {
      const payment = await PaymentModel.find();
      return res.status(200).json(payment);
    } catch (error) {
      return res.status(200).json({ msg: error.message });
    }
  },
  createPayment: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.id).select("name email");
      if (!user) return res.status(400).json({ msg: "User not found" });

      const { cart, paymentID, address } = req.body;
      const { _id, name, email } = user;

      const newPayment = new PaymentModel({
        user_id: _id,
        name,
        email,
        paymentID,
        address,
        cart,
      });

      await newPayment.save();

      return res.status(200).json({ msg: "Save Payment!" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
module.exports = PaymentCtrl;
