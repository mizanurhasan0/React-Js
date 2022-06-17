const ProductCtrl = require("../controller/ProductCtrl");
const Auth = require("../middleware/Auth");
const AuthAdmin = require("../middleware/AuthAdmin");

const router = require("express").Router();

router
  .route("/")
  .get(ProductCtrl.getProducts)
  .post(Auth, ProductCtrl.createProduct);

router.put("/:id", Auth, ProductCtrl.editProduct);

router.delete("/:id", Auth, ProductCtrl.deleteProduct);

module.exports = router;
