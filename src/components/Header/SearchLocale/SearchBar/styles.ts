import styled from "styled-components";
import { lighten } from 'polished'
import { Flex, SearchBarItems, SmoothTransition } from "../../../../assets/styles/mixins";

export const SearchBar = styled.div`
  width: 100%;
  max-width: 40rem;
  border-radius: ${props => props.theme.measures.borderRadiusDefault};
  overflow: hidden;

  ${Flex({
    direction: 'row',
    horizontal: 'center',
    vertical: 'center'
  })}
`

export const SearchInput = styled.input`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
  ${SearchBarItems()}
`

export const SearchButton = styled.button`
  width: 6rem;
  ${SearchBarItems()}
  background-color: ${props => props.theme.colors.black};
  ${SmoothTransition({
    duration: '.3s',
    animation: 'ease-in-out'
  })}

  &:hover{
    background-color: ${props => lighten(0.2, props.theme.colors.black)};
  }

  ${Flex({
    direction: 'row',
    horizontal: 'center',
    vertical: 'center'
  })}
`