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

      <MainContainer theme={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <Container>
          <CreateToDo
            todoValue={todoValue}
            setTodoValue={setTodoValue}
            todoList={todoList}
            setTodoList={setTodoList}
            theme={theme}
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
            <ClearBox
              todoList={todoList}
              setTodoList={setTodoList}
              theme={theme}
              filtered={filtered}
              setFiltered={setFiltered}
            />
          </ListContainer>
          <FilterBlock>
            <Filter
              theme={theme}
              filtered={filtered}
              setFiltered={setFiltered}
            />
          </FilterBlock>
        </Container>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div(
  (props) => css`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    background: ${typeof props.theme === "boolean" && props.theme
      ? "#171823"
      : "#F2F2F2"};
  `
);

const FilterBlock = styled.div`
  max-width: 540px;
  width: 100%;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ListContainer = styled.div(
  (props: { theme: boolean }) => css`
    max-width: 540px;
    width: 100%;
    border-radius: 5px;
    margin: 16px 0 16px;
    background: ${typeof props.theme === "boolean" && props.theme
      ? "#25273D"
      : "#ffffff"};
    box-shadow: ${typeof props.theme === "boolean" && props.theme
      ? "0px 35px 50px -15px #00000080"
      : "0px 35px 50px -15px #c2c3d680"};

    @media screen and (min-width: 768px) {
      margin: 24px 0 40px;
    }
  `
);
