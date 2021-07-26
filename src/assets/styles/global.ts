import { createGlobalStyle } from "styled-components";
import { Flex } from "./mixins";


const GlobalStyles = createGlobalStyle`

  body,
  html,
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: ${props => props.theme.fontFamily.main};
    font-size: ${props => props.theme.fontSizeBase.base};
    color: ${props => props.theme.colors.textDefault};
    background-color: ${props => props.theme.colors.background};
  }

  h1{
    font: ${props => `700 ${props.theme.fontSizeBase.heading01} ${props.theme.fontFamily.main}`}
  }

  input{
    font: 400  1.8rem ${props => props.theme.fontFamily.main};
    padding: 1.2rem;
  }

  ul{
    list-style: none;
  }

  main{
    display: block;
    width: 100%;
    height: 63vh;

    @media(min-width: 767px){
      height: 66vh;
    }
  }

  .leaflet-control-attribution.leaflet-control {
      background-color: #1b2071;
      color: ${props => props.theme.colors.white};

      a{
        color: #9db0fe;
      }
  }

  #root{
    width: 100%;
    height: 100vh;

    ${Flex({
      direction: 'column',
      horizontal: 'flex-start',
      vertical: 'center'
    })}
  }

`

export default GlobalStyles