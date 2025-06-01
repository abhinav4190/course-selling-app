const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("Reached user signup endpoint");
});

userRouter.post("/login", (req, res) => {
  res.send("Reached user login endpoint");
});

userRouter.get("/courses", (req, res) => {
  res.send("Reached user view all course endpoint");
});

userRouter.post("/purchase", (req, res) => {
  res.send("Reached purchase course endpoint");
});

userRouter.get("/purchased", (req, res) => {
  res.send("Reached purchased course endpoint");
});

module.exports = {
  userRouter: userRouter,
};
