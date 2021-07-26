import { lighten } from "polished";
import styled from "styled-components";
import { Flex } from "../../../../assets/styles/mixins";


export const InfoLocale = styled.ul`
  border-radius: ${props => props.theme.measures.borderRadiusDefault};
  background-color: ${props => props.theme.colors.white};
  grid-gap: 1.2rem;
  width: 100%;
  margin-top: 2rem;
  padding: 1.8rem 1.2rem;
  box-shadow: 0 6px 10px 4px ${props => props.theme.colors.boxShadow};

  ${Flex({
    direction: 'column',
    horizontal: 'center',
    vertical: 'center'
  })}

  @media(min-width: 767px){
    ${Flex({
      direction: 'row',
      horizontal: 'space-between',
      vertical: 'stretch'
    })}

    margin-top: 2.6rem;
    padding: 2rem 1.2rem;
    min-height: 16rem;
  }


  @media(min-width: 1024px){
    padding: 2.6rem 1.8rem;
  }
`

export const InformationWrapper = styled.li`
  width: 100%;

  ${Flex({
    direction: 'column',
    horizontal: 'center',
    vertical: 'center'
  })}

  h2{
    color: ${props => lighten(0.4, props.theme.colors.black)};
    font: 400 1.4rem ${props => props.theme.fontFamily.main};
    text-transform: uppercase;
    
    @media(min-width: 767px){
      margin-bottom: 1rem;
      font-weight: 700;
    }
  }

  p{
    color: ${props => props.theme.colors.primary};
    font: 700 2.4rem ${props => props.theme.fontFamily.main};
    text-align: center;

    @media(min-width: 767px){
      text-align: left;
      font-size: 2rem;
      height: 100%;
    }
  }

  @media(min-width: 767px){
    ${Flex({
      direction: 'column',
      horizontal: 'flex-start',
      vertical: 'flex-start'
    })}
    min-height: 100%;

    &:not(:last-child){
      border-right: 1px solid ${props => props.theme.colors.secondary};
    }
  }

  @media(min-width: 1024px){
    padding: 0 1.4rem;
  }
`