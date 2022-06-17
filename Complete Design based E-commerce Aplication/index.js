require("dotenv").config();
const express = require("express");
const UserRouter = require("./routes/UserRouter");
const ProductRouter = require("./routes/productRouter");
const UploadImage = require("./routes/UploadRouter");
const CategoryRouter = require("./routes/CategoryRouter");
const PaymentRouter = require("./routes/PaymentRoute");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

app.use("/user", UserRouter);
app.use("/products", ProductRouter);
app.use("/images", UploadImage);
app.use("/categories", CategoryRouter);
app.use("/payment", PaymentRouter);

mongoose.connect(
  process.env.MONGOOSE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.listen(5000, () => {
  console.log("Server running port: 5000");
});
