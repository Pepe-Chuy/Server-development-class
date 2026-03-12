const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Midlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes

// Get CV page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Get contacto 
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
})

