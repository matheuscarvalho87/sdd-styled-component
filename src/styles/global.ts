//@ts-ignore
import { injectGlobal } from 'vue3-styled-components'

export const GlobalStyle = injectGlobal`
  :root{
    --background: #f0f2f5
    --text-title:#363f5f;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }
    ul{
      list-style: none;
    }
  }
  html{
    @media (max-width:1080px){
      font-size:93.75%;
    }
    @media (max-width:720px){
      font-size:87.5%;
    }
  }
  button{
    cursor: pointer;
  }

  body{
    background:var(--background);
    color: var(--text-tile);
  }


  body, input, textarea, button {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`