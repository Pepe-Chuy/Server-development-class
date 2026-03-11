const express = require("express");
const app = express();

function salute(req, res) {
  res.send("hello world");
}

app.get("/", salute);

app.listen(3000);
