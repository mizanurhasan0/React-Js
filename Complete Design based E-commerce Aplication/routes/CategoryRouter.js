const router = require("express").Router();
const CategoryCtrl = require("../controller/CategoryCtrl");
const Auth = require("../middleware/Auth");
const AuthAdmin = require("../middleware/AuthAdmin");

router.get("/", CategoryCtrl.getCategories);
router.post("/", Auth, AuthAdmin, CategoryCtrl.createCategory);
router.put("/:id", Auth, AuthAdmin, CategoryCtrl.updateCategory);
router.delete("/:id", Auth, AuthAdmin, CategoryCtrl.deleteCategory);

module.exports = router;
