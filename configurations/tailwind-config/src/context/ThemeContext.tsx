import React from 'react'
import * as defaultTheme from '../theme'

export interface ThemeContextInterface<T> {
  theme: T
}

export const ThemeContext = React.createContext<
  ThemeContextInterface<typeof defaultTheme>
>({
  theme: defaultTheme
})
