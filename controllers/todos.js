const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.completeTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    todo.complete = !todo.complete;
    todo.save();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id, { new: true });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
