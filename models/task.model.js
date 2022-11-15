import mongoose from "mongoose";

const { Schema } = mongoose;

const todoList = new Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      required: true,
    },
    Date: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const TodoList = mongoose.model("TodoList", todoList);
