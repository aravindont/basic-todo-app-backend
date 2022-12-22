const express = require("express");
const {
  getAllTodos,
  createTodo,
  completeTodo,
  deleteTodo,
} = require("../controllers/todos");

const router = express.Router();

router.get("/allTodos", getAllTodos);

router.post("/createTodo", createTodo);

router.get("/completeTodo/:id", completeTodo);

router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
