import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  html{
    background-color: #fdfff5;
  }
  a{
      text-decoration: none;
  }
`
export default GlobalStyle;