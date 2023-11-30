export const progressStyles = {
  containerCls: {
    base: 'relative inline-flex flex-row gap-3 items-center'
  },
  progressCls: {
    linear: {
      base: 'relative inline-flex items-center justify-center',
      sizes: {
        size: {
          sm: 'w-full h-9',
          default: 'w-full h-[2.875rem]',
          md: 'w-full h-[3.625rem]',
          lg: 'w-full h-[4.3rem]'
        }
      },
      stroke_width: {
        sm: 2,
        default: 4,
        md: 6,
        lg: 8
      },
      stroke_color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        default: 'text-default'
      },
      label: {
        base: 'absolute inset-0 flex items-center justify-center text-base',
        color: {
          primary: 'text-primary/50',
          secondary: 'text-secondary/50',
          info: 'text-info/50',
          success: 'text-success/50',
          warning: 'text-warning/50',
          danger: 'text-danger/50',
          default: 'text-default/50'
        }
      }
    },
    circular: {
      base: 'relative inline-flex items-center justify-center',
      sizes: {
        default: 'w-full h-full',
        size: {
          sm: 'w-9 h-9',
          default: 'w-[2.875rem] h-[2.875rem]',
          md: 'w-[3.625rem] h-[3.625rem]',
          lg: 'w-[4.3rem] h-[4.3rem]'
        }
      },
      stroke_width: {
        sm: 2,
        default: 4,
        md: 6,
        lg: 8
      },
      stroke_color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        default: 'text-default'
      },
      label: {
        base: 'absolute inset-0 flex items-center justify-center text-base',
        color: {
          primary: 'text-primary/50',
          secondary: 'text-secondary/50',
          info: 'text-info/50',
          success: 'text-success/50',
          warning: 'text-warning/50',
          danger: 'text-danger/50',
          default: 'text-default/50'
        }
      }
    }
  },
  // =================
  linearCls: {
    trailCls: 'w-full bg-secondary-50 h-1.5 inline-flex items-center',
    strokeCls: 'h-1.5 transition-[width] duration-150 ease-in-out',
    checkCls: {
      wrapper:
        'flex w-5 h-5 items-center justify-center text-white rounded-full'
    },
    background: {
      primary: 'bg-primary/50',
      secondary: 'bg-secondary/50',
      info: 'bg-info/50',
      success: 'bg-success/50',
      warning: 'bg-warning/50',
      danger: 'bg-danger/50',
      default: 'bg-default/50'
    },
    corner: {
      flat: 'rounded-none',
      rounded: 'rounded-full'
    }
  },
  circularCls: {
    base: 'relative flex inline-flex flex-row gap-2 items-center',
    checkCls: {
      wrapper:
        'absolute w-full h-full left-0  top-0 flex items-center justify-center'
    }
  },
  colorCls: {
    stroke: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
      default: 'text-default'
    },
    text: {
      primary: 'text-primary/50',
      secondary: 'text-secondary/50',
      info: 'text-info/50',
      success: 'text-success/50',
      warning: 'text-warning/50',
      danger: 'text-danger/50',
      default: 'text-default/50'
    }
  }
}
