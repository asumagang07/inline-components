export const textfieldStyles = {
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
  baseCls: 'relative flex-1 flex justify-start items-start px-0 transition-all',
  iconCls: {
    base: 'w-8 my-2 pr-2 transition-all',
    height: {
      flat: 'h-[41px]',
      filled: 'h-[41px]',
      outlined: 'h-[42px]'
    },
    state: {
      default: 'text-secondary',
      disabled: 'text-secondary-light',
      focus: 'text-primary',
      error: 'text-danger'
    },
    variant: {
      flat: {
        withLabel: 'pt-3',
        withoutLabel: ''
      },
      filled: {
        withLabel: 'pt-3',
        withoutLabel: ''
      },
      outlined: {
        withLabel: '',
        withoutLabel: ''
      }
    }
  },
  wrapperCls: 'relative flex-1 py-2 space-y-1',
  containerCls: {
    base: 'relative flex-1 w-full flex items-center transition-all',
    variant: {
      flat: {
        base: 'border-b border-t-transparent',
        // base: 'border border-x-transparent border-t-transparent',
        state: {
          default: 'text-secondary-dark border-b-secondary-light',
          hover: 'hover:border-b-secondary',
          disabled: 'text-secondary-dark border-b-transparent',
          focus: 'text-secondary-dark border-b-primary',
          error: 'text-secondary-dark border-b-danger'
        }
      },
      filled: {
        base: 'border-b border-t-transparent',
        // base: 'border border-x-transparent border-t-transparent',
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
  innerCls: {
    base: 'relative flex-1 w-full flex items-center'
  },
  inputCls: {
    base: 'outline-none flex-1 w-full h-10 bg-transparent text-base truncate transition-all',
    showPlaceholder:
      'placeholder:opacity-100 placeholder:visible placeholder:block',
    hidePlaceholder:
      'placeholder:opacity-0 placeholder:invisible placeholder:hiddden',
    variant: {
      flat: {
        withLabel: 'pr-3 pt-3 pb-0',
        withoutLabel: 'pr-3 py-2'
      },
      filled: {
        withLabel: 'px-3 pt-3 pb-0',
        withoutLabel: 'px-3 py-2'
      },
      outlined: {
        withLabel: 'px-3 py-2',
        withoutLabel: 'px-3 py-2'
      }
    }
  },
  trailingCls: {
    wrapper: {
      base: 'w-auto h-10 flex items-center',
      variant: {
        flat: {
          withLabel: 'mr-0 pt-3',
          withoutLabel: 'mr-0 mt-0'
        },
        filled: {
          withLabel: 'mr-2 pt-3',
          withoutLabel: 'mr-2 mt-0'
        },
        outlined: {
          withLabel: 'mr-2',
          withoutLabel: 'mr-2'
        }
      }
    },
    icon: {
      base: 'cursor-pointer outline-none w-5 h-5 ml-2',
      type: {
        default: 'text-secondary-light hover:text-secondary',
        trailing: '' // color is based on actual implementation
      }
    }
  },
  labelCls: {
    base: 'absolute capitalize w-auto rounded whitespace-nowrap overflow-hidden text-left truncate leading-tight pointer-events-none transform -translate-y-1/2 transition-all',
    variant: {
      flat: {
        base: 'left-0',
        // position & size
        position: {
          default: 'top-[67%] text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      filled: {
        base: 'left-2 px-1',
        // position & size
        position: {
          default: 'top-[67%] text-base',
          float: 'top-[.6rem] text-xs'
        }
      },
      outlined: {
        base: 'left-2 px-1 aria-[disabled=false]:bg-white',
        // position & size
        position: {
          default: 'top-1/2 text-base',
          float: 'top-0 text-xs'
        }
      }
    },
    state: {
      default: 'text-secondary',
      disabled: 'text-secondary-light',
      withValue: 'text-secondary',
      focus: 'text-primary',
      error: 'text-danger'
    },
    sub_label: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      info: 'text-info',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger'
    }
  },
  assistiveTextCls: {
    root: 'space-y-1',
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
      default: 'text-secondary'
    },
    // icon: '',
    icon: {
      error: 'fill-danger',
      warning: 'fill-warning',
      success: 'fill-success',
      info: 'fill-info',
      default: 'fill-secondary'
    },
    message: 'flex-1 py-[2px] text-xs text-left leading-none'
  },
  prefixCls: {
    base: 'text-base leading-none pointer-events-none',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light'
    },
    variant: {
      flat: {
        withLabel: 'mt-[0.85rem] mr-2.5',
        withoutLabel: 'mt-px mr-2.5'
      },
      filled: {
        withLabel: 'mt-[0.85rem] ml-3',
        withoutLabel: 'mt-px ml-3'
      },
      outlined: {
        withLabel: 'mt-px ml-3',
        withoutLabel: 'mt-px ml-3'
      }
    }
  },
  suffixCls: {
    base: 'text-base leading-none pointer-events-none',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light'
    },
    variant: {
      flat: {
        base: '',
        withLabel: 'mt-[0.85rem]',
        withoutLabel: 'mt-px'
      },
      filled: {
        base: 'mr-3',
        withLabel: 'mt-[0.85rem]',
        withoutLabel: 'mt-px'
      },
      outlined: {
        base: 'mr-3',
        withLabel: 'mt-px',
        withoutLabel: 'mt-px'
      }
    }
  },
  autoCompleteCls: {
    base: 'absolute top-12 left-0 right-0 z-10 flex-1 border bg-white rounded',
    list: 'cursor-pointer flex-1 px-3 py-2 hover:bg-primary-50 text-base text-default text-left leading-none'
  },
  /*
  ======================================================
  ======================================================
  !NOTE: BELOW ISTO BE CLEAN UP
  ======================================================
  ======================================================
  */
  charCounterCls: 'text-xs text-secondary-light/50 tests'
}

export const textfieldStyles_v3 = {
  root: 'w-full flex flex-col',
  dynamicIcon: {
    base: 'w-4 h-4 transition-all ease-out duration-300'
  },
  inputContainer:
    'relative h-9 px-2.5 py-0 flex-1 flex gap-1 items-center text-sm text-secondary-dark transition-all ease-out duration-300',
  label: {
    base: 'absolute px-1 left-2 transition-all ease-out duration-300',
    focusedOrHasValue: 'bg-white rounded text-xs -translate-y-[1.1rem]'
  },
  input: 'bg-transparent outline-none rounded h-full w-full flex-1',
  copyAndClear: {
    container: 'flex-none flex gap-1',
    iconBase: 'w-4 h-4',
    copied: 'text-success',
    focused: 'text-secondary-dark',
    blurred: 'text-secondary hover:text-secondary-dark'
  },
  slotContainer: 'flex gap-1 items-center h-full w-auto overflow-hidden'
}
