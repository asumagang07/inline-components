export const badgeStyles = {
  containerCls: {
    base: 'relative inline-flex'
  },
  coreCls: {
    base: 'absolute top-0 rounded-full text-sm text-white text-center shadow-[0_2px_2px_-1px_rgb(0,0,0)] flex items-center justify-center',
    size: {
      default: 'w-[30%] h-[30%] right-0',
      with_value:
        ' min-w-[1.125rem] h-[1.125rem] px-1 py-0.5 left-3/4 transform -translate-y-1/4'
      // ' min-w-[1.125rem] h-[1.125rem] px-1 py-0.5 -right-1/4 transform -translate-y-1/4'
    },
    placement: '',
    background: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      info: 'bg-info',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
      default: 'bg-default'
    }
  }
}
