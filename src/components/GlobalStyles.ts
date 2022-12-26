import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Josefin Sans', sans-serif;

}

.App {
  width: 100vw;
  height: 100vh;

}
`;

export default GlobalStyles;
