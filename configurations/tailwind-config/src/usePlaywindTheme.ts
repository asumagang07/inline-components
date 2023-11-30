import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

export function usePlaywindTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw Error(
      'usePlaywindTheme must be used within a `<Playwind />` component.'
    )
  }
  return context.theme
}
