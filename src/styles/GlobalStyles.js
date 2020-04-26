import { createGlobalStyle } from 'styled-components'
import { backgroundColor, ShadowColor } from './Theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  html {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
        
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: ${backgroundColor};
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px ${ShadowColor};
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`
