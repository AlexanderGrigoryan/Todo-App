import React from "react";
import styled, { css } from "styled-components";
import { Todo } from "../types";
import CheckBox from "./CheckBox";
import deleteIcon from "../img/icon-cross-small.svg";
import { useState } from "react";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: string;
  note: string;
  completed: boolean;
}

function TodoList(props: Props) {
  const { todoList, setTodoList, id, note, completed } = props;
  {
    const deleteTodo = () => {
      const todoData = [...todoList];
      const deleteTodo = todoData.findIndex(
        (element: Todo) => element.id === props.id
      );
      todoData.splice(deleteTodo, 1);
      setTodoList(todoData);
    };

    return (
      <>
        <Content>
          <ContentInner>
            <CheckBox
              completed={completed}
              todoList={todoList}
              setTodoList={setTodoList}
              id={id}
            />
            <Note completed={completed}>{note}</Note>
          </ContentInner>
          <Delete onClick={deleteTodo}>
            <Icon src={deleteIcon} alt="delete icon" />
          </Delete>
        </Content>
        <Line></Line>
      </>
    );
  }
}

export default TodoList;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 24px;
`;

const ContentInner = styled.div`
  display: flex;
  align-items: center;
`;

const Note = styled.p(
  (props: { completed: boolean }) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.25px;
    color: ${props.completed ? "#D1D2DA" : "#494c6b"};
    text-decoration: ${props.completed ? "line-through" : "none"};
  `
);

const Delete = styled.button`
  width: 12px;
  height: 12px;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img``;

const Line = styled.div`
  width: 327px;
  height: 1px;
  background: #e3e4f1;
`;
