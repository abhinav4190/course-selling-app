const { Router } = require("express");

const adminRouter = Router();

adminRouter.get("/signup", (req, res) => {
  res.send("Reached admin signup endpoint");
});

adminRouter.post("/login", (req, res) => {
  res.send("Reached admin login endpoint");
});

adminRouter.post("/createcourse", (req, res) => {
  res.send("Reached admin create course endpoint");
});

adminRouter.delete("/deletecourse", (req, res) => {
  res.send("Reached admin delete course endpoint");
});

adminRouter.post("/coursecontent", (req, res) => {
  res.send("Reached admin add course content endpoint");
});

module.exports = {
  adminRouter: adminRouter,
};
