import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import CreateToDo from "./components/CreateToDo";
import { Todo } from "./types";
import TodoList from "./components/TodoList";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <div className="App">
        <Container>
          <Header theme={theme} setTheme={setTheme} />
          <CreateToDo
            todoValue={todoValue}
            setTodoValue={setTodoValue}
            todoList={todoList}
            setTodoList={setTodoList}
          />
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </Container>
      </div>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
