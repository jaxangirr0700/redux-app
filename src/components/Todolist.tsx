import { Button, Card, Form, Input, InputNumber } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../store/redux";
import EditTodo from "./EditTodo";
import { RootState } from "../store/redux.type";

interface TodoFormValues {
  name: string;
  age: number;
}

function Todolist() {
  const [editItem, setEditItem] = useState<any | null>(null);
  const [searchInput, setSearchInput] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values: TodoFormValues) => {
    if (editItem) {
      dispatch(
        editTodo({ id: editItem.id, name: values.name, age: values.age })
      );
      setEditItem(null);
    } else {
      dispatch(addTodo(values));
    }
    form.resetFields();
  };

  return (
    <div className="mt-5 flex items-center flex-col gap-2">
      <h1 className="font-bold">Todolist</h1>
      <Form
        form={form}
        className="flex gap-1"
        onFinish={onFinish}
        initialValues={
          editItem
            ? { name: editItem.name, age: editItem.age }
            : { name: "", age: undefined }
        }
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Name kiriting" }]}
        >
          <Input placeholder="Name kiriting" />
        </Form.Item>
        <Form.Item
          name="age"
          rules={[{ required: true, message: "Age kiriting" }]}
        >
          <InputNumber placeholder="Age kiriting" />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="rounded-xl border px-2 py-1"
          >
            {editItem ? "Update Todo" : "Add Todo"}
          </Button>
        </Form.Item>
      </Form>
      <Input
        name="search"
        placeholder="Search"
        className="my-2"
        onChange={(e) => setSearchInput(e.currentTarget.value)}
      />

      <ul className="w-96">
        {todos
          .filter((todo) =>
            todo.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((todo, i) => (
            <Card
              className="flex gap-2 border justify-between items-center px-10 rounded-2xl py-2"
              key={todo.id}
            >
              <p>ID: {i + 1}</p>
              <p>Name: {todo.name}</p>
              <p>Age: {todo.age}</p>
              <div className="flex gap-2 mt-2">
                <Button
                  type="default"
                  className="rounded-xl border px-2 py-1"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  Delete
                </Button>
                <Button
                  type="link"
                  className="rounded-xl border px-2 py-1"
                  onClick={() => setEditItem(todo)}
                >
                  Edit
                </Button>
              </div>
            </Card>
          ))}
      </ul>
      <EditTodo item={editItem} onClose={setEditItem} />
    </div>
  );
}

export default Todolist;
