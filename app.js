const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Express JS");
});
app.listen("3000");

module.exports = app;
