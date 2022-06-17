const jwt = require("jsonwebtoken");

const Auth = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid token!" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(400).json({ msg: "invalide authentication" });

      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
module.exports=Auth
