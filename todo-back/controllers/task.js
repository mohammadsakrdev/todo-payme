const Task = require("../models/task");

exports.add = (req, res, next) => {
  const task = new Task({
    name: req.body.name,
    done: req.body.done,
    owner: req.body.owner
  });

  task.save((err, task) => {
    if (err) {
      // throw err;
      return res.send({
        success: false,
        message: "Error while saving, pelase try again"
      });
    }

    return res.send({
      success: true,
      task,
      message: "Task Saved"
    });
  });
};

exports.list = (req, res, next) => {
  const owner = req.body.owner;
  Task.find({ owner }, (err, tasks) => {
    if (err) {
      return res.send({
        success: false,
        message: "Error while reteriving the tasks"
      });
    }

    return res.send({
      success: true,
      tasks
    });
  });
};
