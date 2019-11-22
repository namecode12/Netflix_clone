import React from 'react';
import Main from './pages/Main.jsx';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Tv from './pages/Tv.jsx';
import Banner from './components/Banner.jsx'
const GlobalStyle = createGlobalStyle`
  html, body{
    margin:0;
    padding: 0;
  }
  body{
    background-color:black;
  }
  a{
    color:white;
    text-decoration:none;
  }
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        
      <Route path="/" exact>
      
          <Main />
        </Route>
        <Route path="/tv" exact>

          <Tv />
        </Route>

        <Route path="/test" exact>
          <div style={{color:"red"}}>test</div>
        </Route>

      </Router>
    </>
  );
}

export default App;
