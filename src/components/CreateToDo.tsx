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
  
}

function CreateToDo(props: Props) {
  const { todoValue, setTodoValue, todoList, setTodoList, theme} =
    props;

  const [completed, setCompleted] = useState<boolean>(false);
  const addTodo: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (todoValue.length > 0) {
      setTodoList([
        ...todoList,
        { note: todoValue, completed: completed, id: uuidv4() },
      ]);
      setTodoValue("");
      setCompleted(false);
    }
  };
  return (
    <Container theme={theme}>
      <Content>
        <InputCheckBox
          completed={completed}
          setCompleted={setCompleted}
          theme={theme}
        />
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
    max-width: 540px;
    width: 100%;
    margin-top: -95px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${typeof props.theme === "boolean" && props.theme
      ? "0px 35px 50px -15px #00000080;"
      : "0px 35px 50px -15px #c2c3d680"};
    background: ${typeof props.theme === "boolean" && props.theme
      ? "#25273D"
      : "#ffffff"};
  `
);

const Content = styled.div`
  max-width: 540px;
  width: 100%;
  height: 48px;
  padding: 0 24px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 64px;
  }
`;

const Form = styled.form``;

const Input = styled.input(
  (props: { theme: boolean }) => css`
    width: 200px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-family: "Josefin Sans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    color: ${typeof props.theme === "boolean" && props.theme
      ? "#C8CBE7"
      : "#393A4B"};
    background: transparent;
    box-shadow: 0px 35px 50px -15px #c2c3d680;

    &::placeholder {
      color: ${typeof props.theme === "boolean" && props.theme
        ? "#767992"
        : "#9495a5"};
    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }
  `
);
