const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

const FriendsModel = require("./models/Friends");
const { json } = require("express");
mongoose.connect(
  "mongodb://127.0.0.1:27017/tutorialmern?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
);

app.post("/insert", async (req, res) => {
  const friend = new FriendsModel({
    name: req.body.name,
    age: req.body.age,
  });

  await friend.save();
  res.send(friend._id);
});

app.get("/read", (req, res) => {
  FriendsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.put("/update", async (req, res) => {
  const newAge = req.body.newAge;
  const id = req.body.id;

  console.log("New Age:" + newAge);

  try {
    await FriendsModel.findById(id, (error, friendToUpdate) => {
      friendToUpdate.age = newAge;
      friendToUpdate.save();
    });
  } catch (error) {
    res.send(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await FriendsModel.findByIdAndRemove(id).exec();
  res.send("Successful Deleted");
});
app.listen(3001, () => {
  console.log("Server is running.....");
});
