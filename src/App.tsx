import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

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
          <CreateToDo />
        </Container>
      </div>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 0 24px;
`;
