export const spinnerStyles = {
  spinnerCls: {
    baseCls: 'inline-block relative',
    divCls: {
      afterCls: "after:block after:absolute after:content-['']"
    },
    textColorCls: {
      primary: 'after:bg-primary',
      warning: 'after:bg-warning',
      info: 'after:bg-info',
      danger: 'after:bg-danger',
      success: 'after:bg-success',
      secondary: 'after:bg-secondary',
      default: 'after:bg-default',
      white: 'after:bg-white'
    },
    border: {
      rounded: 'after:rounded-full',
      flat: 'after:rounded-none'
    }
  },
  spinnerImageCls: {
    backdropCls:
      'min-h-screen min-w-screen bg-secondary-50 flex items-center justify-center',
    size: {
      sm: 'w-32',
      default: 'w-40',
      md: 'w-48',
      lg: 'w-56'
    },
    buttonspinner: {
      sm: 'w-6',
      default: 'w-8',
      md: 'w-10',
      lg: 'w-12'
    }
  }
}
