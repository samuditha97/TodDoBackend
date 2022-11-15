import express from "express";

import {
  saveTodoController,
  updateTodoController,
  deleteTodoController,
  getTodoController,
  getALLTodoController,
} from "../controller/index.js";

const todoRouter = express.Router();

todoRouter.post("/", saveTodoController);
todoRouter.delete("/:id", deleteTodoController);
todoRouter.put("/", updateTodoController);
todoRouter.get("/", getALLTodoController);

export default todoRouter;
