export const scrollAreaStyles = {
  scrollAreaCls: {
    root: 'relative overflow-hidden',
    viewport: 'h-full w-full rounded-[inherit]'
  },
  scrollBarCls: {
    bar: {
      base: 'flex touch-none select-none transition-colors',
      orientation: {
        vertical: 'h-full w-2.5 border-l border-l-transparent p-[1px]',
        horizontal: 'h-2.5 border-t border-t-transparent p-[1px]'
      }
    },
    thumb: 'relative flex-1 rounded-[inherit] bg-secondary'
  }
}
