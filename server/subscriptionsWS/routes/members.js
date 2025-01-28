const express = require("express");
const Member = require("../models/member");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
