import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Source Sans Pro", Sans-Serif;
    color: #222222;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 600;
  }

  a {
      text-decoration: none;
  }

  button { 
    font-family: "Source Sans Pro", Sans-Serif;
  }
`;

export default GlobalStyle;
