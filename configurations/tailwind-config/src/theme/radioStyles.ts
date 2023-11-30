export const radioStyles = {
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
    base: 'inline-flex text-base',
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
    base: 'inline-flex pl-7 mt-2 text-base gap-x-8',
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
    base: 'relative flex-1',
    label: {
      root: {
        base: 'group flex items-center gap-2',
        state: {
          default: 'cursor-pointer',
          disabled: 'cursor-not-allowed pointer-events-none'
        }
      },
      span: {
        base: 'w-max leading-3',
        state: {
          default: 'text-secondary-dark',
          disabled: 'text-secondary-light',
          error: 'text-danger'
        }
      },
      input: 'cursor-pointer absolute opacity-0',
      checkmark: {
        base: 'relative p-2 flex items-center justify-center border rounded-full text-white transition-all duration-150 ease-in-out',
        size: {
          sm: 'w-4 h-4',
          default: 'w-5 h-5',
          md: 'w-6 h-6',
          lg: 'w-7 h-7'
        },
        state: {
          default: {
            checked: {
              true: 'bg-white border-primary group-hover:border-primary border-spacing-[7px]',
              false: 'bg-white border-default-light'
            },
            hover: {
              true: 'group-hover:drop-shadow-[0_1px_2px_#d3d3d3] group-hover:border-primary',
              false:
                'group-hover:drop-shadow-[0_1px_2px_#d3d3d3] group-hover:border-primary'
            }
          },
          disabled: {
            checked: {
              true: 'border-secondary-100',
              false: 'border-secondary-100'
            }
          },
          error: 'border border-danger bg-white'
        }
      }
    }
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
