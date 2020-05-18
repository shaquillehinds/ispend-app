const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "../public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
