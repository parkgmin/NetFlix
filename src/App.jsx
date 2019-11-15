import React from 'react';
import Main from "./pages/Main"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html,body{
    margin:0;
    padding:0;
  }
  body{
    background-color:black;
  }
`


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main></Main>
    </>
  );
}

export default App;
