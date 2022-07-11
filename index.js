const express = require("express");

const mongoose = require("mongoose");
const app = express();

const bookingSchema = require("./model/booking");
const userSchema = require("./model/user");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get("/booklaundry", (req, res) => {
  res.render("booking_page");
});
app.post("/thankupage", async (req, res) => {
  console.log(req.body);
  const thankupage = new bookingSchema(req.body);
  let data = await thankupage.save();
  res.render("thankupage");
});
app.get("/registration", (req, res) => {
  res.render("signup");
});
app.post("/login", (req, res) => {
  const user = new userSchema(req.body);
  const data = user.save();
  res.render("Loginform");
});
app.get("/login", (req, res) => {
  res.render("Loginform");
});
app.get("/pricing", (req, res) => {
  res.render("price_page");
});
app.get("/service", (req, res) => {
  res.render("Service_page");
});
app.get("/", (req, res) => {
  res.render("laundry", {
    loginButton: "Login",
  });
});
app.get("/mybooking", async (req, res) => {
  let mybooking = await bookingSchema.find();

  let data = mybooking.map((value) => {
    return {
      date: value.date,
      address: value.address,
      service: value.service,
    };
  });
  res.render("mybooking", {
    data,
  });
});
app.post("/", async (req, res) => {
  let user = await userSchema.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) {
    return res.render("loginform");
  }
  res.render("laundry", {
    loginButton: user.fname,
  });
});
mongoose.connect("mongodb://localhost:27017/ocs").then(() => {
  console.log("database connected");
  app.listen(3000, () => {
    console.log("running on 3000");
  });
});
