import { css } from "styled-components";
import { MixinFlex, MixinSmoothTransition } from "../../types/mixins";

export const Flex = ({direction, horizontal, vertical}: MixinFlex) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${vertical};
  justify-content: ${horizontal};
`

export const SearchBarItems = () => css`
  border: 0;
  height: 4.6rem;
  padding: 1rem;
`


export const SmoothTransition = ({
  duration = '.3s',
  animation = 'ease-in-out'
}: MixinSmoothTransition) => css`
  transition: ${duration} ${animation};
`