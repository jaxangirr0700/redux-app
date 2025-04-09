type TodoType = {
  id: number;
  name: string;
  age: number;
};

export type RootState = {
  counter: { value: number };
  todos: TodoType[];
};
