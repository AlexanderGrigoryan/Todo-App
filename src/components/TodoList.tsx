import React from "react";
import styled from "styled-components";
import { Todo } from "../types";
import CheckBox from "./CheckBox";
import deleteIcon from "../img/icon-cross-small.svg";

function TodoList(props: {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}): JSX.Element {
  return (
    <Container>
      {props.todoList.map((todo) => {
        return (
          <>
            <Content>
              <ContentInner>
                <CheckBox />
                <Note>{todo.note}</Note>
              </ContentInner>
              <Delete>
                <Icon src={deleteIcon} alt="delete icon" />
              </Delete>
            </Content>
            <Line></Line>
          </>
        );
      })}
    </Container>
  );
}

export default TodoList;

const Container = styled.div`
  width: 279px;
  height: 368px;
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 15px;
`;

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
  width: 279px;
  height: 1px;
  background: #e3e4f1;
`;
