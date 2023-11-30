export const cdpSelectMultipleStyles = {
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
    'relative flex-1 flex justify-start px-0 transition-all duration-150 ease-in-out',
  iconCls: {
    base: 'w-10 h-10 transition-all duration-150 ease-in-out',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light/50',
      readOnly: 'text-primary',
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
        state: {
          default: 'text-secondary-dark/50 border-b-secondary-100',
          disabled: 'text-secondary-light/50 border-b-secondary-100',
          focus: 'text-secondary-dark/50 border-b-primary',
          error: 'text-secondary-dark/50 border-b-danger'
        }
      },
      filled: {
        base: 'border border-x-transparent border-t-transparent',
        state: {
          default: 'text-secondary-dark/50 border-b-secondary-100 bg-[#F7FBFD]',
          disabled:
            'text-secondary-light/50 border-b-secondary-100  bg-secondary-50',
          focus: 'text-secondary-dark/50 border-b-primary bg-[#F7FBFD]',
          error: 'text-secondary-dark/50 border-b-danger bg-[#FDF7F7]'
        }
      },
      outlined: {
        base: 'border rounded',
        state: {
          default: 'text-secondary-dark/50 border-secondary-100 bg-white',
          disabled: 'text-secondary-light/50 border-secondary-100',
          focus: 'text-secondary-dark/50 border-primary bg-white',
          error: 'text-secondary-dark/50 border-danger bg-white'
        }
      }
    }
  },
  coreCls: {
    base: 'relative inline-flex h-10 w-full',
    variant: {
      flat: 'pt-4 pb-0',
      filled: 'px-3 pt-4',
      outlined: 'px-3 py-2'
    }
  },
  menuListCls: {
    base: 'absolute z-10 w-full max-h-[300px] flex flex-col border-t border-secondary-50/80 rounded shadow-md overflow-hidden',
    wrapper: 'menulist_wrapper relative max-h-[300px] flex flex-col w-full',
    menu_option:
      'menulist_option_wrapper max-h-[236px] w-full overflow-x-hidden overflow-y-auto',
    actions:
      'menulist_actions w-full flex justify-end items-center gap-2 p-3 h-16 bg-white border-t border-secondary-50'
  },
  optionCls: {
    base: 'w-full h-auto flex flex-col py-2 px-3 hover:bg-primary-50',
    state: {
      active: 'cursor-pointer',
      selected: 'bg-primary text-white cursor-pointer hover:bg-primary',
      disabled:
        'cursor-not-allowed pointer-events-none  bg-white !text-secondary-100',
      default: 'bg-white cursor-pointer text-default'
    },
    noOption: {
      base: 'w-full text-center bg-white py-3',
      spanCls: 'text-gray-500 cursor-text'
    }
  },
  searchCls: {
    divCls: 'flex items-center w-full py-3 px-3 gap-2 bg-white sticky top-0',
    inputCls:
      'w-full p-1 outline-none bg-transparent border-b border-gray-300 text-sm'
  },
  innerCls: {
    base: 'relative flex-1 w-full flex items-center'
  },
  inputCls: {
    base: 'flex-1 w-full h-10 bg-transparent text-base truncate transition-all duration-150 ease-in-out outline-none',
    variant: {
      flat: {
        withLabel: 'pt-3 pb-0',
        withoutLabel: 'py-2'
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
      base: 'cursor-pointer text-sm duration-150 hover:text-primary'
    }
  },
  labelCls: {
    base: 'absolute capitalize letf-0 rounded whitespace-nowrap overflow-hidden text-ellipsis leading-tight pointer-events-none transform -translate-y-1/2 transition-all duration-150 ease-in-out',
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
      disabled: 'text-secondary-light/50',
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
      error: 'text-danger',
      warning: 'text-warning-dark/50',
      success: 'text-success',
      info: 'text-info',
      default: 'text-secondary-light/50'
    },
    icon: '',
    message: 'flex-1 text-xs py-[1px] leading-none'
  },
  prefixCls: {
    base: 'text-base leading-none pointer-events-none',
    state: {
      default: 'text-default',
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
      default: 'text-default',
      disabled: 'text-secondary-light/50'
    }
  }
}
