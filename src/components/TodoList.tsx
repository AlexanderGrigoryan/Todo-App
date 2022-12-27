import React from "react";
import styled from "styled-components";
import { Todo } from "../types";
import CheckBox from "./CheckBox";
import deleteIcon from "../img/icon-cross-small.svg";

function TodoList(props: {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoId: string;
  todoNote: string;
}): JSX.Element {
  const deleteTodo = () => {
    const todoData = [...props.todoList];
    const deleteTodo = todoData.findIndex(
      (element: Todo) => element.id === props.todoId
    );
    todoData.splice(deleteTodo, 1);
    props.setTodoList(todoData);
  };

  return (
    <>
      <Content>
        <ContentInner>
          <CheckBox />
          <Note>{props.todoNote}</Note>
        </ContentInner>
        <Delete onClick={deleteTodo}>
          <Icon src={deleteIcon} alt="delete icon" />
        </Delete>
      </Content>
      <Line></Line>
    </>
  );
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

const Note = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.25px;
  color: #494c6b;
`;

const Delete = styled.button`
  width: 12px;
  height: 12px;
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
