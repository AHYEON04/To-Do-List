const express = require("express");
const router = express();
const controller = require("./controller/");
const tokenMiddleware = require("../../middlewares/token");

router.post("/", tokenMiddleware, controller.write);
router.get("/", tokenMiddleware, controller.showTodo);
router.delete("/:id", tokenMiddleware, controller.deleteOne);

module.exports = router;
