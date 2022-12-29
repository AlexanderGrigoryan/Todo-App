import React from "react";
import styled, { css } from "styled-components";
import { Todo } from "../types";
import InputCheckBox from "./InputCheckBox";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface Props {
  todoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateToDo(props: Props) {
  const { todoValue, setTodoValue, todoList, setTodoList, theme, setTheme } =
    props;

  const [completed, setCompleted] = useState<boolean>(false);
  const addTodo = (event: any) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      { note: todoValue, completed: completed, id: uuidv4() },
    ]);
    setTodoValue("");
    setCompleted(false);
  };
  return (
    <Container theme={theme}>
      <Content>
        <InputCheckBox completed={completed} setCompleted={setCompleted} />
        <Form onSubmit={addTodo}>
          <Input
            theme={theme}
            value={todoValue}
            onChange={(event) => {
              setTodoValue(event.target.value);
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

const Container = styled.div(
  (props: { theme: boolean }) => css`
    width: 327px;
    margin-top: -95px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props.theme ? "#25273D" : "#ffffff"};
  `
);

const Content = styled.div(
  (props: { theme: boolean }) => css`
    width: 327px;
    height: 48px;
    padding: 0 24px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  `
);

const Form = styled.form``;


const Input = styled.input((props: { theme: boolean }) => {
  console.log(props.theme);
  return css`
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
    background: transparent;
    box-shadow: 0px 35px 50px -15px #c2c3d680;
  `;
});
