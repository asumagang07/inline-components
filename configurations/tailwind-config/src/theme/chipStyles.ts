export const chipStyles = {
  containerCls: {
    base: 'relative inline-flex items-center justify-center border rounded-full leading-none transition-all duration-150 ease-in-out group',
    size: {
      sm: 'h-5 gap-0.5',
      default: 'h-6 gap-1',
      md: 'h-7 gap-1',
      lg: 'h-[2.125rem] gap-1.5'
    },
    state: {
      default: '',
      disabled: 'cursor-not-allowed pointer-events-none'
    },
    padding: {
      flat: {
        sm: 'px-1.5',
        default: 'px-2',
        md: 'px-3',
        lg: 'px-4'
      },
      avatar: {
        sm: 'pl-0.5 pr-1',
        default: 'pl-0.5 pr-2',
        md: 'pl-1 pr-2',
        lg: 'pl-1 pr-2'
      },
      closable: {
        sm: 'px-1.5',
        default: 'px-2',
        md: 'px-3',
        lg: 'px-4'
      },
      avatar_and_closable: {
        sm: 'pl-0.5 pr-1',
        default: 'pl-0.5 pr-2',
        md: 'pl-1 pr-2',
        lg: 'pl-1 pr-2'
      }
    },
    variant: {
      default: {
        solid: {
          primary: 'bg-primary border-primary text-white',
          secondary: 'bg-secondary border-secondary text-white',
          info: 'bg-info border-info text-white',
          success: 'bg-success border-success text-white',
          warning: 'bg-warning border-warning text-white',
          danger: 'bg-danger border-danger text-white',
          default: 'bg-default border-default text-white'
        },
        filled: {
          primary: 'bg-primary-50 border-primary-50 text-primary-dark',
          secondary: 'bg-secondary-50 border-secondary-50 text-secondary-dark',
          info: 'bg-info-50 border-info-50 text-info-dark',
          success: 'bg-success-50 border-success-50 text-success-dark',
          warning: 'bg-warning-50 border-warning-50 text-warning-dark',
          danger: 'bg-danger-50 border-danger-50 text-danger-dark',
          default: 'bg-secondary-50 border-secondary-50 text-secondary-dark'
        },
        outlined: {
          primary: 'bg-white border-primary text-primary-dark',
          secondary: 'bg-white border-secondary text-secondary-dark',
          info: 'bg-white border-info text-info-dark',
          success: 'bg-white border-success text-success-dark',
          warning: 'bg-white border-warning text-warning-dark',
          danger: 'bg-white border-danger text-danger-dark',
          default: 'bg-white border-default text-secondary-dark'
        }
      },
      disabled: {
        solid: {
          primary: 'bg-primary-100 border-primary-100 text-white',
          secondary: 'bg-secondary-100 border-secondary-100 text-white',
          info: 'bg-info-100 border-info-100 text-white',
          success: 'bg-success-100 border-success-100 text-white',
          warning: 'bg-warning-100 border-warning-100 text-white',
          danger: 'bg-danger-100 border-danger-100 text-white',
          default: 'bg-secondary-100 border-secondary-100 text-white'
        },
        filled: {
          primary: 'bg-primary-50 border-primary-50 text-primary-light',
          secondary: 'bg-secondary-50 border-secondary-50 text-secondary-light',
          info: 'bg-info-50 border-info-50 text-info-light',
          success: 'bg-success-50 border-success-50 text-success-light',
          warning: 'bg-warning-50 border-warning-50 text-warning-light',
          danger: 'bg-danger-50 border-danger-50 text-danger-light',
          default: 'bg-secondary-50 border-secondary-50 text-secondary-light'
        },
        outlined: {
          primary: 'bg-white border-primary-100 text-primary-100',
          secondary: 'bg-white border-secondary-100 text-secondary-100',
          info: 'bg-white border-info-100 text-info-100',
          success: 'bg-white border-success-100 text-success-100',
          warning: 'bg-white border-warning-100 text-warning-100',
          danger: 'bg-white border-danger-100 text-danger-100',
          default: 'bg-white border-secondary-100 text-secondary-100'
        }
      }
    },
    hoverable: {
      variants: {
        solid: {
          colors: {
            primary: 'hover:bg-primary-dark hover:border-primary-dark',
            secondary: 'hover:bg-secondary-dark hover:border-secondary-dark',
            info: 'hover:bg-info-dark hover:border-info-dark',
            success: 'hover:bg-success-dark hover:border-success-dark',
            warning: 'hover:bg-warning-dark hover:border-warning-dark',
            danger: 'hover:bg-danger-dark hover:border-danger-dark',
            default: 'hover:bg-secondary-dark hover:border-secondary-dark'
          }
        },
        outlined: {
          colors: {
            primary: 'hover:text-primary-dark hover:bg-primary-50',
            secondary: 'hover:text-secondary-dark hover:bg-secondary-50',
            info: 'hover:text-info-dark hover:bg-info-50',
            success: 'hover:text-success-dark hover:bg-success-50',
            warning: 'hover:text-warning-dark hover:bg-warning-50',
            danger: 'hover:text-danger-dark hover:bg-danger-50',
            default: 'hover:text-secondary-dark hover:bg-secondary-50'
          }
        },
        filled: {
          colors: {
            primary:
              'hover:text-primary-dark hover:bg-primary-100 hover:border-primary-100',
            secondary:
              'hover:text-secondary-dark hover:bg-secondary-100 hover:border-secondary-100',
            info: 'hover:text-info-dark hover:bg-info-100 hover:border-info-100',
            success:
              'hover:text-success-dark hover:bg-success-100 hover:border-success-100',
            warning:
              'hover:text-warning-dark hover:bg-warning-100 hover:border-warning-100',
            danger:
              'hover:text-danger-dark hover:bg-danger-100 hover:border-danger-100',
            default:
              'hover:text-secondary-dark hover:bg-secondary-100 hover:border-secondary-100'
          }
        }
      }
    }
  },
  labelCls: {
    base: 'leading-none pointer-events-none',
    size: {
      sm: 'text-xs',
      default: 'text-sm',
      md: 'text-base',
      lg: 'text-base'
    }
  },
  selectCls: {
    base: 'text-[1.75rem]',
    state: {
      default: '',
      disabled: 'grayscale'
    },
    variant: {
      solid: {
        primary: 'text-white',
        secondary: 'text-white',
        info: 'text-white',
        success: 'text-white',
        warning: 'text-white',
        danger: 'text-white',
        default: 'text-white'
      },
      filled: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        default: 'text-default'
      },
      outlined: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        default: 'text-default'
      }
    }
  },
  closeIconCls: {
    base: 'flex p-0.5',
    size: {
      sm: '!text-sm',
      default: '!text-sm',
      md: '!text-base',
      lg: '!text-base'
      // sm: '!text-[0.875rem]',
      // default: '!text-[1rem]',
      // md: '!text-[1.125rem] ',
      // lg: '!text-[1.25rem]'
    },
    state: {
      default: '',
      disabled: 'pointer-events-none opacity-70'
    },
    variant: {
      solid: {
        primary: 'text-primary-100 hover:text-white',
        secondary: 'text-secondary-100 hover:text-white',
        info: 'text-info-100 hover:text-white',
        success: 'text-success-100 hover:text-white',
        warning: 'text-warning-100 hover:text-white',
        danger: 'text-danger-100 hover:text-white',
        default: 'text-secondary-100 hover:text-white'
      },
      filled: {
        primary:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        secondary:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        info: 'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        success:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        warning:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        danger:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        default:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100'
      },
      outlined: {
        primary:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        secondary:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        info: 'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        success:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        warning:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        danger:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100',
        default:
          'text-danger text-opacity-50 hover:text-danger hover:text-opacity-100'
      }
    }
  },
  draggableCls: {
    base: 'h-[34px] inline-flex items-center justify-center gap-2.5 border rounded-full transition-all duration-150 ease-in-out shadow-md shadow-success'
  }
}
