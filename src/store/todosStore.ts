import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: 1, name: "Ali", age: 25 }],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [
        {
          name: payload.name,
          id: Math.floor(Math.random() * 240),
          age: payload.age,
        },
        ...state.todos,
      ];
    },
    editTodo: (state, { payload }) => {
      console.log(payload);

      const newTodos = state.todos.map((i) => {
        console.log(i.id);

        if (i.id === payload.id) {
          return { ...i, name: payload.name, age: payload.age };
        }
        return i;
      });

      state.todos = newTodos;
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
  },
});
