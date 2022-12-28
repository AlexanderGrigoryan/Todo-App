import React from "react";
import styled from "styled-components";
import { Todo } from "../types";
import InputCheckBox from "./InputCheckBox";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function CreateToDo(props: {
  todoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const [completed, setCompleted] = useState<boolean>(false);

  const addTodo = (event: any) => {
    event.preventDefault();
    props.setTodoList([
      ...props.todoList,
      { note: props.todoValue, completed: completed, id: uuidv4() },
    ]);
    props.setTodoValue("");
    setCompleted(false);
  };

  console.log(props.todoList);
  return (
    <Container>
      <Content>
        <InputCheckBox completed={completed} setCompleted={setCompleted} />
        <Form onSubmit={addTodo}>
          <Input
            value={props.todoValue}
            onChange={(event) => {
              props.setTodoValue(event.target.value);
            }}
            type="text"
            placeholder="Create a new todo…"
          />
        </Form>
      </Content>
    </Container>
  );
}

export default CreateToDo;

const Container = styled.div`
  width: 327px;
  margin-top: -95px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 327px;
  height: 48px;
  padding: 0 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
`;

const Form = styled.form``;

const Input = styled.input`
  width: 200px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  color: #9495a5;
`;
