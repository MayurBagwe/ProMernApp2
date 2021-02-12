const express = require("express");

const port = 3001;
const app = express();
const fileServerMiddleware = express.static("public");
app.use("/", fileServerMiddleware);
app.use("/home", fileServerMiddleware);

app.listen(port, function () {
  console.log(`App Started on port ${port}`);
});
