export const buttonStyles = {
  rootCls: {
    base: 'outline-none inline-flex items-center justify-center whitespace-nowrap transition-all duration-150 ease-in-out !leading-none',
    width_full: 'w-full',
    state: {
      default: 'cursor-pointer',
      disabled: 'opacity-50 cursor-not-allowed pointer-events-none'
    },
    sizes: {
      sm: 'text-[0.875rem] h-7',
      default: 'text-[1rem] h-[2.125rem]',
      md: 'text-[1.125rem] h-10',
      lg: 'text-[1.25rem] h-12'
    },
    borders: {
      solid: '',
      outlined: 'border border-solid',
      flat: 'border border-transparent'
    },
    border_radius: {
      squared: 'rounded-none',
      'soft-edged': 'rounded',
      rounded: 'rounded-full'
    },
    // variants and colors
    variants: {
      solid: {
        colors: {
          primary: 'text-white bg-primary ',
          secondary: 'text-white bg-secondary ',
          info: 'text-white bg-info  ',
          success: 'text-white bg-success ',
          warning: 'text-white bg-warning ',
          danger: 'text-white bg-danger ',
          default: 'text-white bg-default '
        }
      },
      outlined: {
        colors: {
          primary: 'text-primary bg-white border-primary',
          secondary: 'text-secondary bg-white border-secondary',
          info: 'text-info bg-white border-info',
          success: 'text-success bg-white border-success',
          warning: 'text-warning bg-white border-warning',
          danger: 'text-danger bg-white border-danger',
          default: 'text-default bg-white border-default'
        }
      },
      flat: {
        colors: {
          primary: 'text-primary bg-transparent',
          secondary: 'text-secondary bg-transparent',
          info: 'text-info bg-transparent',
          success: 'text-success bg-transparent',
          warning: 'text-warning bg-transparent',
          danger: 'text-danger bg-transparent',
          default: 'text-default bg-transparent'
        }
      }
    },
    hoverable: {
      variants: {
        solid: {
          colors: {
            primary: 'hover:bg-primary-dark',
            secondary: 'hover:bg-secondary-dark',
            info: 'hover:bg-info-dark',
            success: 'hover:bg-success-dark',
            warning: 'hover:bg-warning-dark',
            danger: 'hover:bg-danger-dark',
            default: 'hover:bg-secondary-dark'
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
        flat: {
          colors: {
            primary: 'hover:text-primary-dark hover:bg-primary-50',
            secondary: 'hover:text-secondary-dark hover:bg-secondary-50',
            info: 'hover:text-info-dark hover:bg-info-50',
            success: 'hover:text-success-dark hover:bg-success-50',
            warning: 'hover:text-warning-dark hover:bg-warning-50',
            danger: 'hover:text-danger-dark hover:bg-danger-50',
            default: 'hover:text-secondary-dark hover:bg-secondary-50'
          }
        }
      }
    },
    spacing: {
      icon_and_or_label: {
        sm: 'px-2 gap-1.5',
        default: 'px-2.5 gap-2',
        md: 'px-3.5 gap-2.5',
        lg: 'px-4 gap-3'
      },
      icon_only: {
        sm: 'w-7',
        default: 'w-[2.125rem]',
        md: 'w-10',
        lg: 'w-12'
      }
    }
  }
}
