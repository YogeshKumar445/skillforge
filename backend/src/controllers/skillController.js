exports.generateSkillTree = (req, res) => {
  const { skill } = req.body;

  if (!skill) {
    return res.status(400).json({ error: "Skill is required" });
  }

  res.json({
    success: true,
    skill,
    roadmap: [
      "Basics",
      "Intermediate",
      "Advanced",
      "Projects"
    ]
  });
};
