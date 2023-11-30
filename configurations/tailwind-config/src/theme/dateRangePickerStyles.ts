export const dateRangePickerStyles = {
  rootCls: {
    base: 'flex-1 font-sans',
    display: {
      block: {
        base: 'block space-y-2'
      },
      flex: {
        base: 'flex flex-row flex-wrap gap-2'
      },
      grid: {
        base: 'grid gap-2',
        column: {
          1: 'grid-cols-1',
          2: 'grid-cols-2',
          3: 'grid-cols-3',
          4: 'grid-cols-4',
          5: 'grid-cols-5',
          6: 'grid-cols-6',
          7: 'grid-cols-7',
          8: 'grid-cols-8',
          9: 'grid-cols-9',
          10: 'grid-cols-10',
          11: 'grid-cols-11',
          12: 'grid-cols-12'
        }
      }
    }
  },
  rowCls: 'flex-1 flex flex-row flex-wrap gap-2',
  baseCls:
    'relative flex-1 flex justify-start items-start px-0 transition-all duration-150 ease-in-out',
  iconCls: {
    base: 'w-10 h-10 my-2 transition-all duration-150 ease-in-out',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light',
      focus: 'text-primary',
      error: 'text-danger'
    }
  },
  wrapperCls: 'relative flex-1 py-2 space-y-1',
  containerCls: {
    base: 'relative flex-1 w-full flex items-center transition-all duration-150 ease-in-out',
    variant: {
      flat: {
        base: 'border border-x-transparent border-t-transparent',
        // hovered: 'duration-75 ease-in-out hover:border-b-secondary-light/50',
        state: {
          default: 'text-secondary-dark border-b-secondary-light',
          hover: 'hover:border-b-secondary',
          disabled: 'text-secondary-dark border-b-transparent',
          focus: 'text-secondary-dark border-b-primary',
          error: 'text-secondary-dark border-b-danger'
        }
      },
      filled: {
        base: 'border border-x-transparent border-t-transparent',
        // hovered: 'duration-75 ease-in-out hover:border-b-secondary-light/50',
        state: {
          default: 'text-secondary-dark border-b-secondary-light bg-primary-50',
          hover: 'hover:border-b-secondary',
          disabled: 'text-secondary-dark border-b-transparent bg-secondary-50',
          focus: 'text-secondary-dark border-b-primary bg-primary-50',
          error: 'text-secondary-dark border-b-danger bg-danger-50'
        }
      },
      outlined: {
        base: 'border rounded',
        // hovered: 'duration-75 ease-in-out hover:border-secondary-light/50',
        state: {
          default: 'text-secondary-dark border-secondary-light bg-white',
          hover: 'hover:border-secondary',
          disabled: 'text-secondary-dark border-transparent bg-secondary-50',
          focus: 'text-secondary-dark border-primary bg-white',
          error: 'text-secondary-dark border-danger bg-white'
        }
      }
    }
  },
  coreCls: {
    base: 'flex items-center relative w-full h-10',
    variant: {
      flat: 'pt-4 pb-0',
      filled: 'px-3 pt-4',
      outlined: 'px-3 py-2'
    },
    inputCls:
      'outline-none border-none  w-full h-10 bg-transparent absolute top-0 left-0',
    customInputCls:
      'outline-none border-none   w-full relative z-10 bg-transparent '
  },
  popperCls: {
    base: 'absolute z-10 w-auto flex flex-row shadow-lg border border-default-50 rounded overflow-y-auto min-h-[400px]'
  },
  rangeCls: {
    base: 'flex flex-col justify-start gap-3 px-4 bg-primary-50 min-w-[170px] cursor-pointer',
    divCls: 'flex flex-col text-sm pt-6',
    spanCls: {
      base: 'p-2 rounded-sm',
      state: {
        selected: 'bg-primary text-white',
        default: 'hover:text-primary'
      }
    }
  },
  innerCls: {
    base: 'relative flex-1 w-full flex items-center'
  },
  trailingIconCls: {
    wrapper: {
      base: 'w-auto flex items-center gap-2.5',
      variant: {
        flat: {
          withLabel: 'mr-0',
          withoutLabel: 'mr-0'
        },
        filled: {
          withLabel: 'mr-3',
          withoutLabel: 'mr-3'
        },
        outlined: {
          withLabel: 'mr-3',
          withoutLabel: 'mr-3'
        }
      }
    },
    icon: {
      base: 'cursor-pointer text-sm'
    }
  },
  labelCls: {
    base: 'absolute capitalize left-0 rounded whitespace-nowrap overflow-hidden text-ellipsis leading-tight pointer-events-none transform -translate-y-1/2 transition-all duration-150 ease-in-out',
    variant: {
      flat: {
        base: 'px-0',
        position: {
          default: 'top-1/2 text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      filled: {
        base: 'ml-2 px-1',
        position: {
          default: 'top-1/2 text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      outlined: {
        base: 'ml-2 px-1',
        position: {
          default: 'top-1/2 text-base',
          float: 'top-0 text-xs bg-white'
        }
      }
    },
    // defaultPosition: 'top-1/2 text-base',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light',
      withValue: 'text-default/50',
      focus: 'text-primary',
      error: 'text-danger'
    }
  },
  assistiveTextCls: {
    base: 'flex-1 flex items-start gap-1.5',
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
      error: 'text-danger',
      warning: 'text-warning',
      success: 'text-success',
      info: 'text-info',
      default: 'text-default/50'
    },
    icon: '',
    message: 'flex-1 text-xs py-[1px] leading-none'
  },
  prefixCls: {
    base: 'text-base leading-none pointer-events-none',
    state: {
      default: 'text-default/50',
      disabled: 'text-secondary-light/50'
    },
    variant: {
      flat: {
        withLabel: 'mt-[0.85rem] mr-2.5',
        withoutLabel: 'mt-px mr-2.5'
      },
      filled: {
        withLabel: 'mt-[0.85rem] ml-2.5',
        withoutLabel: 'mt-px ml-2.5'
      },
      outlined: {
        withLabel: 'mt-px ml-2.5',
        withoutLabel: 'mt-px ml-2.5'
      }
    }
  },
  suffixCls: {
    base: 'text-base mr-2.5 leading-none pointer-events-none',
    state: {
      default: 'text-default/50',
      disabled: 'text-secondary-light/50'
    }
  }
}
