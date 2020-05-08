const express = require("express");
const router = express.Router();

const transactionsRouter = require("./transactionsRouter");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/transactions", transactionsRouter);

module.exports = router;
