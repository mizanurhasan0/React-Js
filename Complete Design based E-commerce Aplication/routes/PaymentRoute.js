const PaymentCtrl = require("../controller/PaymentCtrl");
const Auth = require("../middleware/Auth");
const AuthAdmin = require("../middleware/AuthAdmin");

const router = require("express").Router();

router
  .route("/")
  .get(Auth, AuthAdmin, PaymentCtrl.getPayments)
  .post(Auth, PaymentCtrl.createPayment);

module.exports = router;
