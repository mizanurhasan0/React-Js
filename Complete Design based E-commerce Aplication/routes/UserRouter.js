const router = require("express").Router();
const UserCtrl = require("../controller/UserCtrl");
const Auth = require("../middleware/Auth");

router.post("/", UserCtrl.createUser);
router.post("/login", UserCtrl.Login);
router.get("/refreshtoken", UserCtrl.refreshToken);
router.get("/logout", UserCtrl.logout);
router.patch("/cart", Auth, UserCtrl.addCart);
router.get("/info", Auth, UserCtrl.getUser);
router.get("/history", Auth, UserCtrl.history);

module.exports = router;
