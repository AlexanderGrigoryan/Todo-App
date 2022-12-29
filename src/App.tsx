import React from "react";
import styled, { css } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import CreateToDo from "./components/CreateToDo";
import TodoList from "./components/TodoList";
import ClearBox from "./components/ClearBox";
import Filter from "./components/Filter";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { Todo } from "./types";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filtered, setFiltered] = useState<string>("All");

  const filterResult = [...todoList].filter((element) =>
    filtered === "Active"
      ? !element.completed
      : filtered === "Completed"
      ? element.completed
      : true
  );

  return (
    <>
      <GlobalStyles theme={theme} />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <Container>
          <CreateToDo
            todoValue={todoValue}
            setTodoValue={setTodoValue}
            todoList={todoList}
            setTodoList={setTodoList}
            theme={theme}
            setTheme={setTheme}
          />
          <ListContainer theme={theme}>
            {filterResult.map((todo) => {
              return (
                <TodoList
                  key={todo.id}
                  note={todo.note}
                  id={todo.id}
                  completed={todo.completed}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  theme={theme}
                />
              );
            })}
            <ClearBox todoList={todoList} setTodoList={setTodoList} />
          </ListContainer>
          <Filter theme={theme} filtered={filtered} setFiltered={setFiltered} />
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

const ListContainer = styled.div(
  (props: { theme: boolean }) => css`
    width: 327px;
    background: ${typeof props.theme === "boolean" && props.theme
      ? "#25273D"
      : "#ffffff"};
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    margin-top: 15px;
  `
);
