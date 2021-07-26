import styled from "styled-components";
import { Flex } from "../../../assets/styles/mixins";


export const SearchLocale = styled.section`
  width: 90%;
  max-width: 102.4rem;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10;


  ${Flex({
    direction: 'column',
    horizontal: 'center',
    vertical: 'center'
  })}

  @media(min-width: 767px){
    top: 3rem;
  }
`

export const SearchLocaleTitle = styled.h1`
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  font-size: 2.4rem;
  text-align: center;
  width: 100%;
  margin-bottom: 1.6rem;
`