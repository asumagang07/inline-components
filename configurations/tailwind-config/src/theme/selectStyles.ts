export const SelectStyles = {
  rootCls: 'flex-1 flex items-start',
  iconCls: {
    base: 'w-10 h-10 my-2 transition-all duration-150 ease-in-out',
    state: {
      default: 'text-default text-opacity-50',
      disabled: 'text-secondary-light/50',
      focus: 'text-primary',
      error: 'text-danger'
    }
  },
  wrapperCls: {
    base: 'flex-1 py-2',
    state: {
      default: '',
      disabled: 'pointer-events-none'
    }
  },
  containerCls: {
    base: 'relative flex-1 w-full flex flex-row gap-1 transition-all duration-150 ease-in-out',
    state: {
      default: 'h-10 items-center',
      multiple: 'min-h-[40px] items-start'
    },
    variant: {
      flat: {
        base: 'pt-4 pb-[2px] border border-x-transparent border-t-transparent',
        state: {
          default:
            'px-0 text-secondary-dark/50 border-b-secondary-100 hover:border-b-secondary-light/50',
          disabled:
            'px-2 text-default text-opacity-40 bg-secondary-50 border-b-secondary-50',
          focus: 'px-0 text-secondary-dark/50 border-b-primary',
          error: 'px-0 text-secondary-dark/50 border-b-danger'
        }
      },
      filled: {
        base: 'pt-[1rem] pb-0 px-2 border border-x-transparent border-t-transparent',
        state: {
          default:
            'text-secondary-dark/50 bg-[#F7FBFD] hover:bg-primary-50 border-b-secondary-100 hover:border-b-secondary-light/50',
          disabled:
            'text-default text-opacity-40 bg-secondary-50 border-b-secondary-50',
          focus: 'text-secondary-dark/50 bg-[#F7FBFD] border-b-primary',
          error: 'text-secondary-dark/50 bg-[#FDF7F7] border-b-danger'
        }
      },
      outlined: {
        base: 'px-[0.55rem] py-[0.55rem] border rounded',
        state: {
          default:
            'text-secondary-dark/50 bg-white border-secondary-100 hover:border-secondary-light/50',
          disabled:
            'text-default text-opacity-40 bg-secondary-50 border-secondary-50',
          focus: 'text-secondary-dark/50 bg-white border-primary',
          error: 'text-secondary-dark/50 bg-white border-danger'
        }
      }
    },
    selectedItem: {
      default: {
        base: 'flex flex items-center gap-0.5 rounded text-base truncate overflow-hidden',
        variant: {
          flat: {
            state: {
              default: 'py-[0.2rem] text-default',
              disabled: 'p-[0.2rem] text-default/50'
            }
          },
          filled: {
            state: {
              default: 'p-[0.2rem] text-default',
              disabled: 'p-[0.2rem] text-default/50'
            }
          },
          outlined: {
            state: {
              default: 'p-[0.2rem] text-default',
              disabled: 'p-[0.2rem] text-default/50'
            }
          }
        },
        icon: 'ml-1',
        label: 'flex-1 truncate leading-none'
      },
      multiple: {
        base: 'h-5 flex flex items-center bg-secondary-50 hover:bg-secondary-100/50 rounded text-base text-default truncate overflow-hidden',
        variant: {
          flat: {
            state: {
              default: 'text-default',
              disabled: 'text-default/50'
            }
          },
          filled: {
            state: {
              default: 'text-default',
              disabled: 'text-default/50'
            }
          },
          outlined: {
            state: {
              default: 'text-default',
              disabled: 'text-default/50'
            }
          }
        },
        icon: 'ml-1',
        label: 'flex-1 px-1 truncate leading-none'
      },
      closeBtn:
        'h-full px-1.5 flex items-center justify-center text-xxs text-default/50 hover:text-danger hover:bg-danger-100/50'
    }
  },
  containerInnerCls: {
    base: 'flex-1 h-full flex flex-row flex-wrap gap-1',
    state: {
      default: 'items-center',
      multiple: 'items-start'
    }
  },
  clearBtnCls: {
    base: 'p-1 flex items-center text-xs text-default/50 hover:text-danger hover:bg-danger-100/50 rounded-full transition-all duration-150 ease-in-out'
  },
  labelCls: {
    base: 'absolute letf-0 rounded capitalize whitespace-nowrap overflow-hidden text-ellipsis leading-tight pointer-events-none transform -translate-y-1/2 transition-all duration-150 ease-in-out',
    variant: {
      flat: {
        base: 'px-0',
        state: {
          default: '',
          disabled: 'ml-1',
          float: 'top-[.6rem] text-xs'
        }
      },
      filled: {
        base: 'px-1',
        state: {
          default: '',
          disabled: '',
          float: 'top-[.6rem] text-xs'
        }
      },
      outlined: {
        base: 'px-1',
        state: {
          default: '',
          disabled: '',
          float: 'top-0 text-xs bg-white'
        }
      }
    },
    defaultPosition: 'top-1/2 text-base',
    state: {
      default: 'text-default/50',
      disabled: 'text-default/30',
      focus: 'text-primary',
      error: 'text-danger'
    }
  },
  panelCls: {
    base: 'flex-1 mt-0.5 bg-white border',
    option: {
      base: 'list-style-none cursor-pointer flex-1 h-7 px-3 flex items-center justify-center gap-1 hover:bg-primary-50 text-base text-default/75 hover:text-secondary-dark/50 transition-all duration-150 ease-in-out',
      noOption: 'text-center opacity-50 cursor-default',
      icon: 'min-w-[16px]',
      label: 'flex-1 mt-0.5 leading-none'
    }
  }
}

export const selectV3Styles = {
  trigger:
    'inline-flex gap-0.5 rounded-lg p-1.5 items-center text-base text-secondary-dark hover:bg-secondary-50',
  content:
    'relative z-50 min-w-fit overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-default/50 text-secondary-dark shadow-lg ring-1 ring-black ring-opacity-5 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
  viewport:
    'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
  label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
  item: 'flex gap-x-2 cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-default',
  indicatorContainer: 'h-3.5 w-3.5',
  separator: '-mx-1 my-1 h-px bg-secondary-50'
}
