import {
  saveTodo,
  deleteTodo,
  updateTodo,
  getAll,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveAddTodoService = async (data) => {
  const { Title, Status, Date } = data;
  try {
    const todo = await saveTodo({
      Title,
      Status,
      Date,
    });
    return Promise.resolve(todo);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllTodoService = async () => {
  try {
    const todo = await getAll();
    return Promise.resolve(todo);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateTodoService = async (id) => {
  try {
    const todo = await updateTodo(id);
    return Promise.resolve(todo);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteTodoService = async (id) => {
  try {
    const todo = await deleteTodo(id);
    return Promise.resolve(todo);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
