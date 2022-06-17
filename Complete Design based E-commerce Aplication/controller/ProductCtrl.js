const ProductModel = require("../models/ProductModel");

const ProductCtrl = {
  getProducts: async (req, res) => {
    try {
      const products = await await ProductModel.find();
      return res.status(200).json({ products });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      const {
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      } = req.body;

      if (!images) return res.status(400).json({ msg: "No image uploaded" });

      const product = await ProductModel.findOne({ product_id });

      if (product)
        return res.status(400).json({ msg: "Product already exists" });

      const newProduct = new ProductModel({
        product_id,
        title: title.toLowerCase(),
        price,
        description,
        content,
        images,
        category,
      });

      await newProduct.save();
      return res.status(200).json({ msg: "Product add" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      // const product = await ProductModel.findById({ _id: req.params.id });
      // if (!product) return res.status(200).json({ msg: "Product not found!" });

      await ProductModel.findByIdAndDelete({ _id: req.params.id });
      return res.status(400).json({ msg: "Product deleted!" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  editProduct: async (req, res) => {
    try {
      const product = await ProductModel.findById(req.params.id);
      if (!product) return res.status(400).json({ msg: "Product not found" });

      const { title, price, description, content, images, category } = req.body;
      if (!images) return res.status(400).json({ msg: "Image not uploaded" });

      await ProductModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          title,
          price,
          description,
          content,
          images,
          category,
        }
      );
      return res.status(200).json({ msg: "Update a product" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
};
module.exports = ProductCtrl;
