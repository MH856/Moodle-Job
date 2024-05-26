const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const hbs = require("hbs");
const { template } = require("handlebars");
const collection = require("./server/mongodb");


// static assets
app.use(express.static('./html'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

const templatepath = path.join(__dirname, "../templates");
app.use(cookieParser("secret"));
app.use(session({ cookie: { maxAge: null } }));

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.set("view engine", "hbs");
app.set("views", templatepath);

app.get("/", (req, res) => {
  res.render("MOODLEJOB_Employer_Login");s
});

app.get("/MOODLEJOB_Employer_Registration", (req, res) => {
  res.render("MOODLEJOB_Employer_Registration");
});

app.post("/MOODLEJOB_Employer_Registration", async (req, res) => {
  const data = {
    CompanyName: req.body.CompanyName,
    CompanyID: req.body.CompanyID,
    email: req.body.email,
    Address: req.body.Address,
    Postcode: req.body.Postcode,
    password: req.body.password,
  };

  await collection.insertMany([data]);

  req.session.message = {
    type: "success",
    intro: "Registration Sucessful !",
    message: "Welcome Abroad!",
  };
  res.redirect("/");
});

app.post("/MOODLEJOB_Employer_Login", async (req, res) => {
  try {
    const check = await collection.findOne({ CompanyID: req.body.CompanyID });
    if (check.password === req.body.password) {
      res.render("RegistrationStatus");
    } else {
      req.session.message = {
        type: "danger",
        intro: "password incorrect",
        message: "The password is currently not found. Please Try Again.",
      };
      res.redirect("/");
    }
  } catch {
    req.session.message = {
      type: "danger",
      intro: "User Details incorrect",
      message: "The User Details is currently not found. Please Try Again.",
    };
    res.redirect("/");
  }
});



// start server 
app.listen(3000, () => {
    console.log("Server is listening to port 3000....");
  });
  