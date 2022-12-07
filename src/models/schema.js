const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

employeeSchema.methods.createToken = async function () {
  try {
    const token = jwt.sign({ id: this._id.toString() }, "somesecret");
    this.tokens = this.tokens.concat({ token, token });
    await this.save();
    console.log(token);
  } catch (err) {
    console.log(`error ${err}`);
  }
};

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;
