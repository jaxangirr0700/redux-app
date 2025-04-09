import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterStore";
import { todosSlice } from "./todosStore";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export const { increment, decrement, reset } = counterSlice.actions;
export const { addTodo, editTodo, deleteTodo } = todosSlice.actions;
