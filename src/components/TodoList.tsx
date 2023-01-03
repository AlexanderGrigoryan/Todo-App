import React from "react";
import styled, { css } from "styled-components";
import CheckBox from "./CheckBox";
import deleteIcon from "../img/icon-cross-small.svg";
import deleteIconBig from "../img/icon-cross.svg";
import { Todo } from "../types";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: string;
  note: string;
  completed: boolean;
  theme: boolean;
}

function TodoList(props: Props) {
  const { todoList, setTodoList, id, note, completed, theme } = props;
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
            <IconBig src={deleteIconBig} alt="delete icon" />
          </Delete>
        </Content>
        <Line theme={theme}></Line>
      </>
    );
  }
}

export default TodoList;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 24px 21px 24px;
`;

const ContentInner = styled.div`
  display: flex;
  align-items: center;
`;

interface NoteProps {
  completed: boolean;
  theme: boolean;
}

const Note = styled.p(
  (props: NoteProps) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    text-decoration: ${props.completed ? "line-through" : "none"};
    color: ${!props.completed && props.theme
      ? "#4D5067"
      : !props.completed && !props.theme
      ? "#D1D2DA"
      : props.theme
      ? "#C8CBE7"
      : "#494C6B"};

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 18px;
      letter-spacing: -0.25px;
    }
  `
);

const Delete = styled.button`
  width: 12px;
  height: 12px;
  border: 0;
  background: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const IconBig = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Line = styled.div(
  (props) => css`
    width: 100%;
    max-width: 540px;
    height: 1px;
    background: ${typeof props.theme === "boolean" && props.theme
      ? "#393A4B"
      : "#e3e4f1"};
  `
);
