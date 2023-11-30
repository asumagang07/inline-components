export const customSelectStyles = {
  containerCls: {
    base: '!border-0 !rounded-r-none !rounded-l',
    variant: {
      flat: {
        state: {
          default: '!bg-transparent',
          disabled: '!bg-transparent',
          error: '!bg-transparent'
        }
      },
      filled: {
        state: {
          default: '!bg-transparent',
          disabled: '',
          error: '!bg-danger-50'
        }
      },
      outlined: {
        state: {
          default: '!bg-primary-50',
          disabled: '!bg-secondary-50',
          error: '!bg-danger-50'
        }
      }
    }
  },
  coreCls: {
    variant: {
      flat: '!pt-4',
      filled: '!pt-4',
      outlined: ''
    }
  },
  trailingWrapperCls: {
    variant: {
      flat: '!pt-4',
      filled: '!pt-4',
      outlined: ''
    }
  },
  // !NOTE: The above styling is being shared to Currency and PhoneNumber before and now only for Currency
  // !NOTE: The below styling is for PhoneNumber
  phoneNumberCls: {
    root: {
      base: 'relative px-3 my-2 flex items-center gap-2 transition-all',
      variant: {
        flat: {
          base: 'h-[41px] pt-4',
          default: 'border-b border-secondary-light',
          disabled: 'border-b border-b-transparent'
        },
        filled: {
          base: 'h-[41px] pt-4',
          default: 'border-b border-secondary-light bg-primary-50',
          disabled: 'border-b border-b-transparent bg-secondary-50'
        },
        outlined: {
          base: 'h-[42px] rounded mr-1 py-2',
          default: 'border border-secondary-light',
          disabled: 'border border-transparent bg-secondary-50'
        }
      }
    },
    label: {
      base: 'absolute capitalize left-0 rounded whitespace-nowrap overflow-hidden text-left text-ellipsis leading-tight text-xs',
      state: {
        default: 'text-secondary',
        disabled: 'text-secondary-light'
      },
      variant: {
        flat: 'top-[0.2rem]',
        filled: 'top-[0.2rem]',
        outlined: 'top-[-7px]'
      },
      span: {
        base: 'w-auto flex ml-2 px-1',
        variant: {
          flat: {
            default: '',
            disabled: ''
          },
          filled: {
            default: '',
            disabled: ''
          },
          outlined: {
            default: 'bg-white',
            disabled: ''
          }
        }
      }
    },
    image: {
      base: 'w-8 h-6 object-contain'
    },
    country_code: {
      base: 'leading-none whitespace-nowrap'
    }
  }
}
