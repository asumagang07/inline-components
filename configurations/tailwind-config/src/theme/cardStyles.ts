export const cardStyles = {
  baseCls: 'flex-1 bg-white rounded transition duration-150 ease-in-out',
  containerCls: {
    base: 'flex-1 bg-white rounded transition duration-150 ease-in-out',
    state: {
      fullHeight: 'h-full fullHeight',
      bordered: 'border border-t-4',
      fullscreen: 'fixed inset-0 m-2 z-[100]',
      loading: 'relative border border-l border-r border-b'
    },
    border_color: {
      primary: 'border-primary',
      secondary: 'border-secondary',
      info: 'border-info',
      success: 'border-success',
      warning: 'border-warning',
      default: '',
      danger: 'border-danger'
    }
  },
  headerCls: {
    wrapper: 'relative flex-1 h-10 flex items-center gap-1.5 px-3',
    state: {
      fullHeight: 'overflow-hidden',
      loading: 'cursor-not-allowed pointer-events-none',
      collapsible: 'cursor-pointer'
    },
    titleCls: {
      base: 'flex-1 p-0 m-0 whitespace-nowrap overflow-hidden truncate leading-tight',
      default_header: 'text-md',
      sub_header: 'text-base font-bold',
      colors: {
        default: {
          primary: 'text-primary',
          secondary: ' text-secondary',
          info: 'text-info',
          success: ' text-success',
          warning: ' text-warning',
          danger: ' text-danger',
          default: ' text-secondary-dark'
        },
        disabled: {
          primary: 'text-primary-light',
          secondary: ' text-secondary-light',
          info: 'text-info-light',
          success: ' text-success-light',
          warning: ' text-warning-light',
          danger: ' text-danger-light',
          default: ' text-secondary-light'
        }
      }
    }
  },
  actionsCls: {
    wrapper: 'flex items-center',
    actionBtnCls: {
      base: 'outline-none inline-flex items-center justify-center whitespace-nowrap transition-all duration-150 ease-in-out !leading-none text-[0.875rem] h-7 w-7 text-default rounded-full',
      colors: {
        primary: 'hover:text-primary hover:bg-primary-100',
        secondary: 'hover:text-secondary hover:bg-secondary-100',
        info: 'hover:text-info hover:bg-info-100',
        success: 'hover:text-success hover:bg-success-100',
        warning: 'hover:text-warning hover:bg-warning-100',
        danger: 'hover:text-danger hover:bg-danger-100',
        default: 'hover:text-default hover:bg-secondary-100'
      }
    },
    custom_actions: {
      state: {
        disabled: 'opacity-50 cursor-not-allowed'
      }
    },
    popoverActionsCls: {
      triggerbtn: {
        base: 'outline-none flex items-center justify-center transition duration-150 ease-in-out',
        state: {
          default: 'cursor-pointer text-default hover:text-secondary-dark ',
          disabled: 'text-secondary-light'
        }
      },
      itembtn: {
        base: 'w-full outline-none flex gap-2 items-center text-left px-4 py-2 text-base text-secondary-dark bg-white',
        state: {
          default:
            'w-full outline-none flex gap-2 items-center text-left px-4 py-2 text-base text-secondary-dark bg-white hover:bg-secondary-50'
        },
        colors: {
          primary: 'hover:bg-primary-50',
          secondary: ' hover:bg-secondary-50',
          info: 'hover:bg-info-50',
          success: ' hover:bg-success-50',
          warning: ' hover:bg-warning-50',
          danger: ' hover:bg-danger-50',
          default: ' hover:bg-secondary-50'
        },
        icon: {
          colors: {
            primary: 'text-primary',
            secondary: ' text-secondary',
            info: 'text-info',
            success: ' text-success',
            warning: ' text-warning',
            danger: ' text-danger',
            default: ' text-default'
          }
        }
      }
    }
  },
  contentCls: {
    base: ' flex-1 p-3 text-secondary-dark text-base transition duration-150 ease-in-out rounded-b',
    contentWrapperCls: 'w-full h-full overflow-x-visible',
    state: {
      disabled: 'opacity-50'
    },
    backgroundCls: {
      colors: {
        primary: 'bg-primary-50',
        secondary: ' bg-secondary-50',
        info: 'bg-info-50',
        success: ' bg-success-50',
        warning: ' bg-warning-50',
        danger: ' bg-danger-50',
        default: ' bg-secondary-50',
        white: 'bg-white'
      }
    }
  }
}
