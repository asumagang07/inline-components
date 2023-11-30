import * as DEFAULT_THEME from './theme'

export type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>
export type TPlaybookDefaultTheme = DeepPartial<typeof DEFAULT_THEME>
