export const creditCardStyles = {
  baseCls: 'credit-card-cmpt flex-1 flex flex-col gap-2',
  rootCls: {
    base: 'w-min'
  },
  assistiveTextCls: {
    base: 'flex-1 flex items-start gap-1.5 p-2 mb-4 rounded',
    variant: {
      flat: {
        base: 'px-0'
      },
      filled: {
        base: 'px-3'
      },
      outlined: {
        base: 'px-3'
      }
    },
    type: {
      error: 'text-danger/50',
      warning: 'text-warning-dark/50',
      success: 'text-success/50',
      info: 'text-info/50',
      default: 'text-secondary-dark/50 bg-primary-100'
    },
    icon: '',
    message: 'flex-1 text-xs py-[1px] leading-none'
  }
}
