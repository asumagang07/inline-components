export const cdpAvatarStyles = {
  containerCls: {
    base: 'relative inline-flex bg-white'
  },
  commonCls: {
    base: 'relative inline-flex items-center justify-center',
    size: {
      sm: 'text-sm w-7 h-7',
      default: 'text-base w-[2.375rem] h-[2.375rem]',
      md: 'text-base w-12 h-12',
      lg: 'text-lg w-[3.625rem] h-[3.625rem]'
    },
    border_radius: {
      squared: 'rounded-none',
      'soft-edged': 'rounded',
      rounded: 'rounded-full'
    },
    background: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      info: 'bg-info',
      success: 'bg-success',
      warning: 'bg-warning',
      danger: 'bg-danger',
      default: 'bg-secondary'
    },
    // NOTE: was used in field level: AvatarGroup
    hover: {
      primary: 'hover:bg-primary-dark/50',
      info: 'hover:bg-info-dark/50',
      success: 'hover:bg-success-dark/50',
      warning: 'hover:bg-warning-dark/50',
      danger: 'hover:bg-danger-dark/50',
      secondary: 'hover:bg-secondary-dark/50'
    }
  },
  imgCls: {
    base: 'object-cover'
  },
  fallbackCls: {
    base: 'w-full h-full flex items-center justify-center text-white font-medium'
  },
  statusCls: {
    base: 'absolute bottom-0 rounded-full text-sm text-default text-center leading-none shadow-[0_2px_2px_-1px_rgb(0,0,0)]',
    size: {
      default: 'w-[30%] h-[30%] right-0',
      with_value:
        ' min-w-[1.125rem] h-[1.125rem] px-1 py-0.5 -right-1/4 transform -translate-y-0'
    },
    status: {
      online: 'bg-success',
      offline: 'bg-secondary-100',
      busy: 'bg-danger',
      inactive: 'bg-transparent'
    }
  },
  slotCls: {
    base: 'absolute -bottom-1 -right-0.5 w-5 h-5 right flex items-center justify-center rounded-full z-[1]'
  }
}
