import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
  }
  html{
    /* background-color: #f3f2ef; */
    background-color: #ffff;
    font-size: 12px;
    overflow-x: hidden;
  }
  body{
    font-family: Arial, sans-serif;
  }
  a{
      text-decoration: none;
  }
  a:hover{
    cursor: pointer;
  }
  button:hover{
    cursor: pointer;
  }
  
`
export default GlobalStyle;