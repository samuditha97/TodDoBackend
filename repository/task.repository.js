import { TodoList } from "../models/task.model";
import AppError from "../utils/appError.js";

export const saveTodo = (data) =>
  TodoList.create(data)
    .then((assignData) => {
      return Promise.resolve(assignData);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateTodo = (id, status) =>
  TodoList.findByIdAndUpdate(id, { status }, { new: true })
    .then((updatedTodoStatus) => {
      if (!updatedTodoStatus) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(updatedTodoStatus);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteTodo = (id) =>
  TodoList.findByIdAndDelete(id)
    .then((todoData) => {
      if (!todoData) {
        throw new AppError("Data Not Found", 404);
      }
      return Promise.resolve(todoData);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getAll = () =>
  TodoList.find()
    .then((data) => {
      return Promise.resolve(data);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
