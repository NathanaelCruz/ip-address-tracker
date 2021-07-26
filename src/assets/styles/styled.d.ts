import 'styled-components'

import { theme } from './theme'

type themeDefault = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends themeDefault {}
}

