const express = require("express");
const router = express.Router();
const passport = require("passport");

const taskController = require("../controllers/task");

//Add New Task(Todo)
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  taskController.add
);

//List Own Tasks
router.post(
  "/list",
  passport.authenticate("jwt", { session: false }),
  taskController.list
);

module.exports = router;
