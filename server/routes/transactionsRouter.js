const express = require("express");
const router = express.Router();

const fs = require("fs");

/* GET users listing. */
router.get("/", (req, res, next) => {
  try {
    const db = fs.readFileSync(`${__dirname}/../db.json`);
    const dbjson = JSON.parse(db);
    res.status(200);
    res.send(dbjson);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const { amount } = req.body || {};

    if (!amount) {
      const error = new Error("amount is required");
      error.status = 400;
      throw error;
    }

    const db = fs.readFileSync(`${__dirname}/../db.json`);
    const dbjson = JSON.parse(db);

    res.status(200);
    res.send(dbjson);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
