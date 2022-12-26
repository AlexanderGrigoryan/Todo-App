import React from "react";
import styled from "styled-components";
import { Todo } from "../types";

function TodoList(props: {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}) {
  return (<Container>
    
  </Container>);
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
