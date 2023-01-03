import React from "react";
import styled, { css } from "styled-components";
import { Todo } from "../types";
import Filter from "./Filter";

interface Props {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
  filtered: string;
  setFiltered: React.Dispatch<React.SetStateAction<string>>;
  theme: boolean;
}

function ClearBox(props: Props) {
  const { todoList, setTodoList, filtered, setFiltered, theme } = props;

  const clearCompleted = () => {
    const current = [...todoList].filter((element) => !element.completed);
    setTodoList(current);
  };

  return (
    <Container>
      <Content>
        <LeftItems>{todoList.length} items left</LeftItems>
        <FilterBlock>
          <Filter filtered={filtered} setFiltered={setFiltered} theme={theme} />
        </FilterBlock>
        <ClearItems theme={theme} onClick={clearCompleted}>
          Clear Completed
        </ClearItems>
      </Content>
    </Container>
  );
}

export default ClearBox;

const FilterBlock = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  padding: 16px 20px 22px 20px;
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

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.1944444477558136px;
  }
`;

const ClearItems = styled.button(
  (props: { theme: boolean }) => css`
    font-family: "Josefin Sans", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: -0.1666666716337204px;
    color: #9495a5;
    border: 0;
    background: inherit;
    cursor: pointer;
    transition: all ease 0.2s;

    &:hover {
      color: ${typeof props.theme === "boolean" && props.theme
        ? "#e3e4f1"
        : "#494C6B"};
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: -0.1944444477558136px;
    }
  `
);
