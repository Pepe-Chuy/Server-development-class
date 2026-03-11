const express = require("express");
const path = require("path");
const app = express();

// Midlewares
app.use(express.static(path.join(__dirname, "public")));


// Routes

// Get CV page

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

function salute(req, res) {
  res.send("hello world");
}

app.get("/", salute);

app.listen(3000);
