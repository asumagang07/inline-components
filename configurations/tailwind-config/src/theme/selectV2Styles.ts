export const selectV2Styles = {
  iconCls: {
    base: '!w-5 min-w-[1.25rem] mx-2.5',
    state: {
      default: 'fill-secondary',
      disabled: 'fill-secondary-light',
      focused: 'fill-primary',
      error: 'fill-danger'
    },
    variant: {
      flat: {
        base: 'h-[41px]',
        withLabel: 'pt-3',
        withoutLabel: ''
      },
      filled: {
        base: 'h-[41px]',
        withLabel: 'pt-3',
        withoutLabel: ''
      },
      outlined: {
        base: 'h-[42px]',
        withLabel: '',
        withoutLabel: ''
      }
    }
  },
  containerCls: {
    base: '!outline-none'
  },
  coreCls: {
    base: 'flex items-center gap-1.5 text-left',
    color: {
      select: {
        value: 'text-secondary-dark',
        placeholder: 'text-secondary-light'
      },
      autocomplete: {
        base: 'text-secondary-dark placeholder:text-secondary-light'
      }
    },
    image: 'w-[30px] min-w-[30px]'
  },
  trailingActionCls: {
    base: 'flex items-center gap-1',
    variant: {
      flat: {
        withLabel: 'mr-0 mt-[0.85rem]',
        withoutLabel: 'mr-0 mt-0'
      },
      filled: {
        withLabel: 'mr-2 mt-[0.85rem]', // mr-3
        withoutLabel: 'mr-2 mt-0' // mr-3
      },
      outlined: {
        withLabel: 'mr-2', // mr-3
        withoutLabel: 'mr-2' // mr-3
      }
    }
    // variant: {
    //   flat: 'mt-[0.85rem]',
    //   filled: 'mt-[0.85rem]',
    //   outlined: 'mr-2'
    // }
  },
  trailingIconCls: {
    base: 'w-5 h-5',
    type: {
      // for all trailing icons
      common: {
        state: {
          default: 'fill-secondary-light hover:fill-secondary',
          disabled: 'fill-secondary-100 pointer-events-none'
        }
      },
      // for Select's caret
      caret: {
        default: 'fill-secondary-light hover:fill-secondary',
        focused: 'fill-secondary'
      }
    }
  },
  popoverCls: 'outline-none w-full',
  menuWrapperCls: 'w-full bg-white rounded shadow-md', // not used
  searchCls: {
    base: 'flex-1 px-3 py-1.5 flex items-center gap-1.5 bg-white border border-b-0 rounded-t shadow-md',
    icon: {
      base: 'w-4 h-5',
      state: {
        default: 'fill-secondary',
        focused: 'fill-primary'
      }
    },
    input:
      'outline-none w-full h-8 text-base border-b border-secondary-light hover:border-secondary focus:border-primary transition-all'
  },
  menuCls: {
    base: 'w-full bg-white border shadow-md outline-none overflow-y-auto',
    searchable: {
      true: 'max-h-[217px] rounded-b border-t-0',
      false: 'max-h-[254px] rounded'
    }
  },
  menuHeaderCls: {
    base: 'min-h-[2.25rem] px-3 py-1.5 flex items-center bg-secondary-50 text-base text-secondary font-medium leading-none'
  },
  optionCls: {
    root: {
      base: '!outline-none cursor-pointer min-h-[2.25rem] py-1.5 flex items-start gap-1.5',
      option: {
        default: 'px-3',
        withChildren: 'pl-6 pr-3'
      },
      noOption: `data-[key=noOption]:cursor-default pointer-events-none`,
      state: {
        default: 'text-secondary fill-secondary bg-white',
        disabled: 'text-secondary-light fill-secondary-light',
        focused: 'text-secondary-dark fill-secondary-dark bg-primary-50',
        // // hovered: 'text-secondary-dark fill-secondary-dark bg-primary-50',
        // // pressed: 'text-secondary-dark fill-secondary-dark bg-primary-50',
        selected: 'text-white fill-white bg-primary'
      }
    },
    image: 'w-[30px] min-w-[30px] mt-[2.5px]',
    icon: 'w-4 h-5 mt-[1.25px]',
    content: {
      base: 'flex-1 flex gap-2',
      option: '',
      noOption: 'justify-center'
    },
    details: {
      name: 'block flex-1 text-base',
      code: 'block text-base opacity-75',
      description: 'block text-xs italic opacity-75'
    }
  },
  // not use
  noOptionCls: {
    base: 'min-h-[2.25rem] px-3 py-1.5 bg-white flex items-center justify-center border shadow-md text-secondary',
    searchable: {
      true: 'border-t-0 rounded-b',
      false: 'rounded'
    }
  }
}
