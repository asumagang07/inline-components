export const textAreaStyles = {
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
      disabled: 'text-secondary-light/50',
      focus: 'text-primary/50',
      error: 'text-danger/50'
    }
  },
  wrapperCls: 'flex-1 py-2 space-y-1',
  containerCls: {
    base: 'relative flex-1 w-full flex items-center transition-all duration-150 ease-in-out',
    variant: {
      flat: {
        base: 'border border-x-transparent border-t-transparent',
        state: {
          default: 'text-secondary-dark border-b-secondary-100',
          disabled: 'text-secondary-light/50 border-b-secondary-100',
          focus: 'text-secondary-dark border-b-primary',
          error: 'text-secondary-dark border-b-danger'
        }
      },
      filled: {
        base: 'border border-x-transparent border-t-transparent',
        state: {
          default: 'text-secondary-dark border-b-secondary-100 bg-[#F7FBFD]',
          disabled:
            'text-secondary-light/50 border-b-secondary-100  bg-secondary-50',
          focus: 'text-secondary-dark border-b-primary bg-[#F7FBFD]',
          error: 'text-secondary-dark border-b-danger bg-[#FDF7F7]'
        }
      },
      outlined: {
        base: 'border rounded',
        state: {
          default: 'text-secondary-dark border-secondary-100 bg-white',
          disabled: 'text-secondary-light/50 border-secondary-100',
          focus: 'text-secondary-dark border-primary bg-white',
          error: 'text-secondary-dark border-danger bg-white'
        }
      }
    }
  },
  innerCls: {
    base: 'relative flex-1 w-full flex items-center',
    layout: {
      outlined: '',
      flat: '',
      filled: ''
    }
  },
  inputCls: {
    base: 'flex-1 w-full h-10 bg-transparent text-base transition-all duration-150 ease-in-out outline-none',
    layout: {
      outlined: 'px-3',
      flat: '',
      filled: ''
    },
    height: {
      sm: 'min-h-[70px]',
      md: 'min-h-[100px]',
      lg: 'min-h-[120px]',
      xl: 'min-h-[150px]'
    },
    // state: {
    //   default:
    //     'text-secondary-dark bg-white border-secondary-100 hover:border-secondary-light/50',
    //   disabled: 'text-default/40 bg-secondary-50 border-secondary-50',
    //   focus: 'text-secondary-dark bg-white border-primary',
    //   error: 'text-secondary-dark bg-white border-danger'
    // },
    variant: {
      flat: {
        withLabel: 'mb-2 mt-4',
        withoutLabel: 'mb-2'
      },
      filled: {
        withLabel: 'px-3 py-0 mb-2 mt-4',
        withoutLabel: 'px-3 mb-2'
      },
      outlined: {
        withLabel: 'my-2',
        withoutLabel: 'px-3 my-2'
      }
    }
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
    base: 'absolute capitalize letf-0 rounded whitespace-nowrap overflow-hidden text-ellipsis leading-tight pointer-events-none transform -translate-y-1/2 transition-all duration-150 ease-in-out',
    variant: {
      flat: {
        base: 'px-0',
        position: {
          default: 'top-4 text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      filled: {
        base: 'ml-2 px-1',
        position: {
          default: 'top-4 text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      outlined: {
        base: 'ml-2 px-1',
        position: {
          default: 'top-4 text-base',
          float: 'top-0 text-xs bg-white'
        }
      }
    },
    // defaultPosition: 'top-1/2 text-base',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light',
      withValue: 'text-default',
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
      error: 'text-danger/50',
      warning: 'text-warning',
      success: 'text-success/50',
      info: 'text-info/50',
      default: 'text-secondary-100'
    },
    icon: '',
    message: 'flex-1 text-xs py-[1px] leading-none'
  },
  prefixCls: {
    base: 'text-base leading-none pointer-events-none',
    state: {
      default: 'text-default/50',
      disabled: 'text-secondary-100'
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
      default: 'text-default',
      disabled: 'text-secondary-light/50'
    }
  },
  /*
  ======================================================
  ======================================================
  !NOTE: BELOW ISTO BE CLEAN UP
  ======================================================
  ======================================================
  */
  charCounterCls: 'text-xs text-secondary-light/50'
}
