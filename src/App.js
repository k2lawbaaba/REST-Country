import React, {useState} from 'react';
import Navbar from './components/Nav';
import MainBody from './components/MainBar';
import './styles.css'
import {ThemeProvider, createGlobalStyle} from "styled-components"



function App() {

  const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    background-image: ${({theme})=> theme.backgroundImage};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .userInput, .filter, input, .det {
  background-color:  ${({theme})=> theme.bgColor};
  color:${({theme})=> theme.text}
}
  `

    const [theme, setTheme]= useState('light')

    const handleThemeMode= (e)=>
    {
          (theme === 'light')?  setTheme("dark"): setTheme('light')
    }
    const dark=
    {
        text: "#fff",
        body: '#03000d',
        bgColor: "#222831",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/green-gobbler.png")',
    }
    const dayLight={
        body: "#F1F6F9",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/diagmonds.png")'
    }

  return (
    <div className="App">
     <ThemeProvider theme={ theme !== 'light'? dark : dayLight}>
         <GlobalStyles />
      
      <Navbar  click={handleThemeMode}/>
      </ThemeProvider>
      <MainBody mode={theme}/>
    </div>
  );
}

export default App;
