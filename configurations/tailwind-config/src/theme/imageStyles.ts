export const imageStyles = {
  rootCls: {
    base: 'relative w-full flex items-center justify-center bg-primary-50 border-opacity-30 overflow-hidden',
    border_radius: {
      squared: 'rounded-none',
      'soft-edged': 'rounded',
      rounded: 'rounded-full'
    }
  },
  containerCls: 'relative w-full',
  overlayCls: 'absolute inset-0 w-full h-full flex items-center justify-center',
  coreCls: {
    base: 'w-full h-full',
    divCls:
      'w-full h-full border border-primary-100 bg-transparent flex items-center justify-center',
    fitCls: {
      cover: 'object-cover',
      contain: 'object-contain'
    }
  }
}
