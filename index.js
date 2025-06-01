const express = require("express");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const PORT = 3000;

const app = express();
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started: http://localhost:${PORT}`);
  } else {
    console.log(`Error starting server on Port ${PORT}: ${err}`);
  }
});
