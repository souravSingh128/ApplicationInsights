const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost:27017/login-page")
//   .then(() => {
//     console.log("connection success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/login-page");
    console.log("connection successful");
  } catch (err) {
    console.log(err);
  }
};

connection();
