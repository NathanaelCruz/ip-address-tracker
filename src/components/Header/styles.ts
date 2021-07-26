import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  position: relative;
  height: 37vh;
  min-height: 20rem;
  background-image: url('/images/pattern-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1000;

  @media(min-width: 767px){
    height: 33vh;
  }
`