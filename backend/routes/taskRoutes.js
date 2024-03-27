const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const { authenticateToken } = require("../middleware/authmiddleware");


router.get("/",authenticateToken, taskController.getAllTasksByUser);
router.post("/",authenticateToken ,taskController.createTaskByUser);
router.put("/:id",authenticateToken , taskController.updateTaskByUser);
router.delete("/:id", authenticateToken, taskController.deleteTaskByUser);

module.exports = router;
