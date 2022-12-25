import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet } from "react-helmet";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="App">
        <Container>
          <Header theme={theme} setTheme={setTheme} />
        </Container>
      </div>
    </>
  );
}

export default App;

const Container = styled.div``;
