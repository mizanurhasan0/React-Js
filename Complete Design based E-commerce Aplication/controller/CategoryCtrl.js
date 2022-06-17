const CategoryModel = require("../models/CategoryModel");
const Category = require("../models/CategoryModel");

const CategoryCtrl = {
  getCategories: async (req, res) => {
    try {
      const category = await CategoryModel.find();
      return res.status(200).json(category);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;

      const category = await CategoryModel.findOne({
        name: name.toLowerCase(),
      });
      if (category)
        return res.status(400).json({ msg: "Category already exist" });

      const newCategory = new CategoryModel({ name: name.toLowerCase() });

      await newCategory.save();

      return res.status(200).json({ msg: "Add category" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await CategoryModel.findByIdAndDelete(req.params.id);

      return res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    const username = req.body.name;
    const id = req.params.id;
    console.log(username + "-" + id);
    try {
      await CategoryModel.findByIdAndUpdate(
        { _id: req.params.id },
        { name: req.body.name }
      );

      return res.status(200).json({ msg: "Update category" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
module.exports = CategoryCtrl;
