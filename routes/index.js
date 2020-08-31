const express = require("express");
const router = express();
const user = require("./user");
const todo = require("./todo");

router.use("/user", user);
router.use("/todo", todo);

module.exports = router;
