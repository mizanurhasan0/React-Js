const UserModel = require("../models/UserModel");
const PaymentModel = require("../models/PaymentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserCtrl = {
  getUser: async (req, res) => {
    try {
      const User = await UserModel.findById(req.user.id).select("-password");

      if (!User) return res.status(400).json({ msg: "User does not exist" });
      return res.status(200).json(User);
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if (user) return res.status(400).json({ msg: "User already exist! " });

      if (password < 4)
        return res.status(400).json({ msg: "Password must be 4 charecter" });

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({ name, email, password: hashPassword });
      console.log(newUser);
      newUser.save();
      const accessToken = createAccessToken({
        id: newUser._id,
        email: newUser.email,
      });
      const refreshToken = createRefreshToken({
        id: newUser._id,
        email: newUser.email,
      });
      res.cookie("refreshToken", refreshToken, {
        maxAge: 5000,
        expiresIn: "15m",
        httpOnly: true,
      });
      return res.status(200).json({ msg: "Add new user!", token: accessToken });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User not found! " });

      const matchPass = await bcrypt.compare(password, user.password);

      if (!matchPass)
        return res.status(400).json({ msg: "Incorrect password!" });

      const accessToken = createAccessToken({
        id: user._id,
        email: user.email,
      });
      const refreshToken = createRefreshToken({
        id: user._id,
        email: user.email,
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        path: "/user/refreshtoken",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({ token: accessToken });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  logout: (req, res) => {
    try {
      res.clearCookie("refreshToken", { path: "/user/refreshtoken" });
      return res.status(200).json({ msg: "Logged out!" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const token = req.cookies.refreshToken;
      if (!token)
        return res.status(400).json({ msg: "Please Login or Register!" });
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please login or register!" });

        const accessToken = createAccessToken({
          id: user.id,
          email: user.email,
        });
        return res.json({ user, accessToken });
      });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  addCart: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.id);
      if (!user) return res.status.json({ msg: "User doest not found" });

      await UserModel.findOneAndUpdate(
        { _id: req.user.id },
        { cart: req.body.cart }
      );

      return res.status(200).json({ msg: "Add to cart" });
    } catch (error) {
      return res.status(400).json({ msg: error.message });
    }
  },
  history: async (req, res) => {
    try {
      const history = await PaymentModel.find({ user_id: req.user.id });

      res.status(200).json(history);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "11m",
  });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
module.exports = UserCtrl;
