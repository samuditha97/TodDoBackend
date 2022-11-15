import express from "express";
import todoRouter from "./todo.route.js";

const apiRouter = express.Router();

apiRouter.use("/todo", todoRouter);

export default apiRouter;
