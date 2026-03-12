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

//Post contacto and handling form submissions
app.post("/contacto", async (req, res) => {
    const { name, email, subject, message } = req.body;

    // we make a validation to see if any field is missing
    if (!name || !email || !message) {
        return res.status(400).sendFile(path.join(__dirname, "views", "contact.html"));
    }

    try {
        // we send the data to FormSubmit endpoint
        await axios.post(
        "https://formsubmit.co/ajax/jesuscarbajal.csv@hotmail.com",
        {
            name,
            email,
            subject: subject || "New message from portfolio",
            message,
            _subject: `[Portfolio Contact] ${subject || "New message"} — from ${name}`,
            _captcha: "false",
        },
        {
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
        }
    );

    // if it works succesfuly, we show a confirmation page
    res.sendFile(path.join(__dirname, "views", "confirmation.html"));
  } catch (error) {
    console.error("FormSubmit error:", error.message);
    // to not expose server errors
    res.sendFile(path.join(__dirname, "views", "confirmation.html"));
  }
});

// Handle 404 in case of unmatched route
app.use((req, res) => {
  res.status(404).send(`
    <html>
      <body style="font-family:monospace;background:#0a0d14;color:#e8e4d9;display:flex;
        align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;">
        <h1 style="font-size:4rem;margin:0;color:#f5a623;">404</h1>
        <p>Page not found.</p>
        <a href="/" style="color:#f5a623;text-decoration:none;">← Back home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running at http://localhost:${PORT}`);
});

