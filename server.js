const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, company, message } = req.body || {};

  const trimmedName = (name || "").trim();
  const trimmedEmail = (email || "").trim();
  const trimmedCompany = (company || "").trim();
  const trimmedMessage = (message || "").trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({
      success: false,
      message: "Please fill in your name, email, and project details.",
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(trimmedEmail)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
  }

  const subject = encodeURIComponent(`New inquiry from ${trimmedName}`);
  const body = encodeURIComponent(
    `Name: ${trimmedName}\n` +
    `Email: ${trimmedEmail}\n` +
    `Company: ${trimmedCompany || "N/A"}\n\n` +
    `Project Details:\n${trimmedMessage}`
  );

  return res.json({
    success: true,
    message: "Your email app is opening with the inquiry details ready to send.",
    mailto: `mailto:info@starvixsystems.com?subject=${subject}&body=${body}`,
  });
});

app.listen(PORT, () => {
  console.log(`Starvix Systems app running on http://localhost:${PORT}`);
});