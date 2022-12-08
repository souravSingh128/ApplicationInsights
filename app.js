const express = require("express");
const app = express();
var jwt = require("jsonwebtoken");
const path = require("path");
const hbs = require("hbs");
require("./src/db/conn");
// const bcrypt = require("bcrypt");
const port = process.env.PORT || 3000;
const Register = require("./src/models/schema");

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./template/views");
const partialPath = path.join(__dirname, "./template/partials");
// console.log(staticPath);
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// app.post("/login", async (req, res) => {
//   try {
//     const name = req.body.name;
//     const password = req.body.psw;
//     const result = await Register.findOne({ email: name });
//     const match = await bcrypt.compare(password, result.password);
//     if (match) {
//       console.log("password matched");
//       const token = await createEmployee.createToken(savingData);
//       console.log("token is generated ", token);
//       res.status(200).render("index");
//     } else {
//       res.status(400).send("email & password are not matching");
//     }
//     // if (result.password === password) {
//     //   res.status(200).render("index");
//     // } else {
//     //   res.status(400).send("email & password are not matching");
//     // }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.get("/register", (req, res) => {
  console.log(req.params);
  res.render("register");
});

// app.post("/register", async (req, res) => {
//   try {
//     if (req.body.psw === req.body.pswRepeat) {
//       const salt = await bcrypt.genSalt(10);
//       const pass = await bcrypt.hash(req.body.psw, salt);

//       const createEmployee = new Register({
//         email: req.body.email,
//         password: pass,
//         something: "sfljs",
//       });

//       console.log("registration part is success");

//       const token = await createEmployee.createToken(savingData);

//       // using callback function here.

//       res.status(201).render("login");
//     } else {
//       res.status(404).send("password is not matchingh");
//     }
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// const securePassword = async (pass) => {
//   const salt = await bcrypt.genSalt(10);
//   const pwd = await bcrypt.hash(pass, salt);
//   console.log(pwd);
// };

// securePassword("sourav");

const auth = async () => {
  var token = await jwt.sign({ foo: "bar" }, "shhhhh", {
    expiresIn: "2 minutes",
  });
  console.log(token);

  const userVar = await jwt.verify(token, "shhhhh");
  console.log(userVar);
};

// auth();

const savingData = async () => {
  const result = await createEmployee.save();
  console.log("result is ", result);
};
