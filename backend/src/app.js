const express = require("express");
const cors = require("cors");

const app = express();

/* ✅ MIDDLEWARE FIRST */
app.use(cors());
app.use(express.json());

/* ✅ ROUTES AFTER */
const skillRoutes = require("./routes/skillRoutes");
app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend working 🚀" });
});

module.exports = app;
