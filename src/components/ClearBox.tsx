import React from "react";
import styled from "styled-components";
import { Todo } from "../types";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function ClearBox(props: Props) {
  const { todoList, setTodoList } = props;

  const clearCompleted = () => {
    const current = [...todoList].filter((element) => !element.completed);
    setTodoList(current);
  };

  return (
    <Container>
      <Content>
        <LeftItems>{todoList.length} items left</LeftItems>
        <ClearItems onClick={clearCompleted}>Clear Completed</ClearItems>
      </Content>
    </Container>
  );
}

export default ClearBox;

const Container = styled.div`
  padding: 16px 20px 22px 20px;
  margin-bottom: 15px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftItems = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  color: #9495a5;
`;

const ClearItems = styled.button`
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.1666666716337204px;
  color: #9495a5;
  border: 0;
  background: inherit;
  cursor: pointer;
`;
