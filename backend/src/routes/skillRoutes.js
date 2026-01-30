const express = require("express");
const router = express.Router();
const { generateSkillTree } = require("../controllers/skillController");

router.post("/generate", generateSkillTree);

module.exports = router;
