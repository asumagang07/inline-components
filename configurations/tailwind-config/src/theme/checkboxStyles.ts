export const checkboxStyles = {
  rootCls: {
    base: 'inline-flex flex-col text-base gap-x-8',
    gap_y: {
      compact: 'gap-y-1',
      default: 'gap-y-2',
      comfortable: 'gap-y-3'
    },
    gap_x: {
      compact: 'gap-x-1',
      default: 'gap-x-2',
      comfortable: 'gap-x-3'
    }
  },
  labelCls: {
    base: 'w-full text-base',
    state: {
      default: 'text-secondary-dark',
      disabled: 'text-secondary-light',
      error: 'text-danger'
    }
  },
  groupCls: {
    base: 'inline-flex text-base ',
    orientation: {
      horizontal: 'flex-row flex-wrap',
      vertical: 'flex-col'
    },
    gap_y: {
      compact: 'gap-y-1',
      default: 'gap-y-2',
      comfortable: 'gap-y-3'
    },
    gap_x: {
      compact: 'gap-x-2',
      default: 'gap-x-4',
      comfortable: 'gap-x-6'
    }
  },
  subGroupCls: {
    base: 'inline-flex pl-7 mt-2 text-base ',
    orientation: {
      horizontal: 'flex-row flex-wrap',
      vertical: 'flex-col'
    },
    gap_y: {
      compact: 'gap-y-1',
      default: 'gap-y-2',
      comfortable: 'gap-y-3'
    },
    gap_x: {
      compact: 'gap-x-1',
      default: 'gap-x-2',
      comfortable: 'gap-x-3'
    }
  },
  optionCls: {
    base: 'relative block',
    label: {
      root: {
        base: 'group flex gap-2',
        state: {
          default: 'cursor-pointer',
          disabled: 'cursor-not-allowed pointer-events-none'
        }
      },
      flag: {
        base: 'object-cover object-left'
      },
      icon: {
        base: '',
        state: {
          default: 'text-secondary-dark',
          disabled: 'text-secondary-100',
          error: 'text-danger-light/50'
        }
      },
      span: {
        base: 'w-max',
        state: {
          default: 'text-secondary-dark',
          disabled: 'text-secondary-100',
          error: 'text-danger'
        }
      },
      description: {
        base: 'mt-[2px] italic leading-tight',
        state: {
          default: 'text-default',
          disabled: 'text-secondary-100',
          error: 'text-danger'
        }
      },
      input: 'cursor-pointer absolute opacity-0 w-0 h-0',
      checkmark: {
        base: 'relative flex items-center justify-center border rounded text-white transition-all duration-150 ease-in-out',
        size: {
          // sm: 'min-w-[1rem] h-4',
          // default: 'min-w-[1.25rem] h-5',
          // md: 'min-w-[1.5rem] h-6',
          // lg: 'min-w-[1.75rem] h-7'
          sm: 'w-4 h-4',
          default: 'w-5 h-5',
          md: 'w-6 h-6',
          lg: 'w-7 h-7'
        },
        state: {
          default: {
            checked: {
              true: 'bg-primary border-primary drop-shadow-[0_0_1px_rgb(#07357E)]',
              false: 'bg-white border-default-light'
            },
            hover: {
              true: 'group-hover:drop-shadow-[0_0px_2px_#d3d3d3] group-hover:border-primary',
              false:
                'group-hover:drop-shadow-[0_0px_2px_#d3d3d3] group-hover:border-primary'
            }
          },
          disabled: {
            checked: {
              true: 'bg-secondary-100 border-secondary-100',
              false: 'border-secondary-100'
            }
          },
          error: 'border border-danger bg-white'
        }
      }
    }
  },
  helperCls: {
    base: 'flex flex-row items-center',
    text: {
      danger: 'text-danger text-xs ml-1',
      warning: 'text-warning text-xs ml-1',
      info: 'text-info text-xs ml-1',
      success: 'text-success text-xs ml-1',
      primary: 'text-primary text-xs ml-1',
      secondary: 'text-default text-xs ml-1'
    },
    icon: ''
  },
  assistiveTextCls: {
    base: 'flex-1 flex items-start gap-1.5',
    type: {
      error: 'text-danger',
      warning: 'text-warning-dark/50',
      success: 'text-success',
      info: 'text-info',
      default: 'text-default/50'
    },
    icon: '',
    message: 'flex-1 text-xs py-[1px] leading-none'
  }
}
