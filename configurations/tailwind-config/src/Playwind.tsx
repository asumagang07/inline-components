import React, { useMemo } from 'react'
import { ThemeContext } from './context/ThemeContext'
import * as DEFAULT_THEME from './theme'
import { mergeDeep } from './utils/mergeDeep'
import { TPlaybookDefaultTheme } from './types'

export interface PlaywindProps {
  children: React.ReactNode
  theme?: TPlaybookDefaultTheme
}

const Playwind: React.FC<PlaywindProps> = ({
  children,
  theme: customTheme
}) => {
  const mergedTheme = mergeDeep(DEFAULT_THEME, customTheme)
  const value = useMemo(() => ({ theme: mergedTheme }), [mergedTheme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default Playwind
