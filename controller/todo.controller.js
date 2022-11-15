import {
  saveAddTodoService,
  updateTodoService,
  deleteTodoService,
  getAllTodoService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveTodoController = async (req, res) => {
  try {
    const todo = await saveAddTodoService(req.body);

    res.json(todo);
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateTodoController = async (req, res) => {
  try {
    const todo = await updateTodoService(req.params.id, req.body);
    res.json(Success(todo, "Successfully todo Updated."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteTodoController = async (req, res) => {
  try {
    const todo = await deleteTodoService(req.params.id);
    res.json(Success(todo, "Successfully todo Deleted."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getALLTodoController = async (req, res) => {
  try {
    const todo = await getAllTodoService();
    res.json(Success(todo, "Successfully Fetched todo Details."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
