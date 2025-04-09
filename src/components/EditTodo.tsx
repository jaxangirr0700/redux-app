import { Button, Drawer, Form, Input, InputNumber } from "antd";
import { useDispatch } from "react-redux";
import { editTodo } from "../store/redux";
import { useEffect } from "react";

interface EditTodoProps {
  item: any | null;
  onClose: (value: any | null) => void;
}

function EditTodo({ item, onClose }: EditTodoProps) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (item) {
      form.setFieldsValue({ name: item.name, age: item.age });
    }
  }, [item, form]);

  const onFinish = (values: { name: string; age: number }) => {
    if (item) {
      dispatch(editTodo({ ...values, id: item.id }));
      onClose(null);
    }
  };

  return (
    <Drawer
      title="Edit Todo"
      onClose={() => onClose(null)}
      open={!!item}
      destroyOnClose
    >
      <Form form={form} onFinish={onFinish}>
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default EditTodo;
