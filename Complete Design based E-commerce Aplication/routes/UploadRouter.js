const UploadCtrl = require("../controller/UploadCtrl");
const Auth = require("../middleware/Auth");

const router = require("express").Router();

router.post("/", Auth, UploadCtrl.uploadImage);
router.post("/delete", Auth, UploadCtrl.deleteImage);

module.exports = router;
