const app = require("./src/app");

const PORT = 5000;

app.get("/api/skills", (req, res) => {
  res.json({
    skills: ["HTML", "CSS", "JavaScript", "Node.js"]
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
