export const switchStyles = {
  rootCls: {
    base: 'inline-flex items-center gap-x-4 gap-y-2',
    label_position: {
      top: 'flex-col-reverse',
      left: 'flex-row-reverse',
      bottom: 'flex-col',
      end: 'flex-row'
    }
  },
  containerCls: {
    base: 'inline-flex flex-row items-center gap-2'
  },
  coreCls: {
    input: 'w-0 h-0 opacity-0 visibility-hidden',
    slot: {
      base: 'relative rounded-full',
      layout: {
        default: {
          sm: 'w-8 h-3.5',
          default: 'w-9 h-4',
          md: 'w-11 h-5',
          lg: 'w-14 h-6'
        },
        inner: {
          sm: 'w-9 h-5',
          default: 'w-11 h-6',
          md: 'w-[3.25rem] h-7',
          lg: 'w-[3.75rem] h-8'
        },
        icon: {
          sm: 'w-8 h-3.5',
          default: 'w-9 h-4',
          md: 'w-11 h-5',
          lg: 'w-14 h-6'
        },
        text: {
          sm: 'text-sm',
          default: 'text-base',
          md: 'text-lg',
          lg: 'text-xl'
        }
      },
      cursor_state: {
        default: 'cursor-pointer',
        disabled: 'cursor-not-allowed'
      },
      bg_state: {
        // layout: SOLID
        solid: {
          // state: DEFAULT
          default: {
            checked: {
              primary: 'bg-primary',
              secondary: 'bg-secondary',
              info: 'bg-info',
              success: 'bg-success',
              warning: 'bg-warning',
              danger: 'bg-danger',
              default: 'bg-default'
            },
            unchecked: {
              primary: 'bg-secondary-light',
              secondary: 'bg-secondary-light',
              info: 'bg-secondary-light',
              success: 'bg-secondary-light',
              warning: 'bg-secondary-light',
              danger: 'bg-secondary-light',
              default: 'bg-secondary-light'
            }
          },
          // state: DISABLED
          disabled: {
            checked: {
              primary: 'bg-primary-light',
              secondary: 'bg-secondary-light',
              info: 'bg-info-light',
              success: 'bg-success-light',
              warning: 'bg-warning-light',
              danger: 'bg-danger-light',
              default: 'bg-secondary-light'
            },
            unchecked: {
              primary: 'bg-secondary-100',
              secondary: 'bg-secondary-100',
              info: 'bg-secondary-100',
              success: 'bg-secondary-100',
              warning: 'bg-secondary-100',
              danger: 'bg-secondary-100',
              default: 'bg-secondary-100'
            }
          }
        },
        // layout: FILLED
        filled: {
          // state: DEFAULT
          default: {
            checked: {
              primary: 'bg-primary-100',
              secondary: 'bg-secondary-100',
              info: 'bg-info-100',
              success: 'bg-success-100',
              warning: 'bg-warning-100',
              danger: 'bg-danger-100',
              default: 'bg-secondary-100'
            },
            unchecked: {
              primary: 'bg-secondary-light',
              secondary: 'bg-secondary-light',
              info: 'bg-secondary-light',
              success: 'bg-secondary-light',
              warning: 'bg-secondary-light',
              danger: 'bg-secondary-light',
              default: 'bg-secondary-light'
            }
          },
          // state: DISABLED
          disabled: {
            checked: {
              primary: 'bg-primary-100',
              secondary: 'bg-secondary-100',
              info: 'bg-info-100',
              success: 'bg-success-100',
              warning: 'bg-warning-100',
              danger: 'bg-danger-100',
              default: 'bg-secondary-100'
            },
            unchecked: {
              default: 'bg-secondary-100',
              primary: 'bg-secondary-100',
              info: 'bg-secondary-100',
              success: 'bg-secondary-100',
              warning: 'bg-secondary-100',
              danger: 'bg-secondary-100',
              secondary: 'bg-secondary-100'
            }
          }
        }
      }
    },
    handle: {
      base: 'absolute transform top-1/2 -translate-y-1/2 inline-flex items-center justify-center leading-none transition-all duration-150 ease',
      hover: {
        size: {
          sm: 'group-hover:ring-[5px]',
          default: 'group-hover:ring-[5px]',
          md: 'group-hover:ring-[6px]',
          lg: 'group-hover:ring-[7px]'
        },
        state: {
          default: {
            primary: 'ring-[#359ad4]/20',
            secondary: 'ring-[#595959]/20',
            info: 'ring-[#7fbab4]/20',
            success: 'ring-[#4caf50]/20',
            warning: 'ring-[#ffc53d]/20',
            danger: 'ring-[#f44336]/20',
            default: 'ring-[#333333]/20'
          },
          disabled: {
            primary: 'ring-[#333333]/20',
            secondary: 'ring-[#333333]/20',
            info: 'ring-[#333333]/20',
            success: 'ring-[#333333]/20',
            warning: 'ring-[#333333]/20',
            danger: 'ring-[#333333]/20',
            default: 'ring-[#333333]/20'
          }
          // default: {
          //   primary: 'ring-primary/20',
          //   secondary: 'ring-secondary/20',
          //   info: 'ring-info/20',
          //   success: 'ring-success/20',
          //   warning: 'ring-warning/20',
          //   danger: 'ring-danger/20',
          //   default: 'ring-default/20'
          // },
          // disabled: {
          //   primary: 'ring-default/20',
          //   secondary: 'ring-default/20',
          //   info: 'ring-default/20',
          //   success: 'ring-default/20',
          //   warning: 'ring-default/20',
          //   danger: 'ring-default/20',
          //   default: 'ring-default/20'
          // }
        }
      },
      layout: {
        default: {
          sm: 'w-3.5 h-3.5 scale-[1.143] rounded-full shadow-md',
          default: 'w-4 h-4 scale-125 rounded-full shadow-md',
          md: 'w-5 h-5 scale-[1.2] rounded-full shadow-md',
          lg: 'w-6 h-6 scale-[1.1665] rounded-full shadow-md'
        },
        inner: {
          sm: 'w-4 h-4 rounded-full', // shadow-[0_0_2px_1px_rgba(0,0,0,0.15)]
          default: 'w-5 h-5 rounded-full',
          md: 'w-6 h-6 rounded-full',
          lg: 'w-7 h-7 rounded-full'
        },
        icon: {
          sm: 'w-3.5 h-3.5 scale-[1.143] rounded-full shadow-md',
          default: 'w-4 h-4 scale-125 rounded-full shadow-md',
          md: 'w-5 h-5 scale-[1.2] rounded-full shadow-md',
          lg: 'w-6 h-6 scale-[1.1665] rounded-full shadow-md'
        },
        text: {
          sm: '',
          default: '',
          md: '',
          lg: ''
        }
      },
      position: {
        checked: {
          layout: {
            default: {
              sm: 'left-[1.125rem]',
              default: 'left-5',
              md: 'left-6',
              lg: 'left-8'
            },
            inner: {
              sm: 'left-[1.125rem]',
              default: 'left-[1.375rem]',
              md: 'left-[1.625rem]',
              lg: 'left-[1.875rem]'
            },
            icon: {
              sm: 'left-[1.125rem]',
              default: 'left-5',
              md: 'left-6',
              lg: 'left-8'
            },
            text: {
              sm: '',
              default: '',
              md: '',
              lg: ''
            }
          }
        },
        unchecked: {
          layout: {
            default: {
              sm: 'left-0',
              default: 'left-0',
              md: 'left-0',
              lg: 'left-0'
            },
            inner: {
              sm: 'left-0.5',
              default: 'left-0.5',
              md: 'left-0.5',
              lg: 'left-0.5'
            },
            icon: {
              sm: 'left-0',
              default: 'left-0',
              md: 'left-0',
              lg: 'left-0'
            },
            text: {
              sm: '',
              default: '',
              md: '',
              lg: ''
            }
          }
        }
      },
      bg_state: {
        // layout: SOLID
        solid: {
          // state: DEFAULT
          default: {
            checked: {
              primary: 'bg-white',
              secondary: 'bg-white',
              info: 'bg-white',
              success: 'bg-white',
              warning: 'bg-white',
              danger: 'bg-white',
              default: 'bg-white'
            },
            unchecked: {
              primary: 'bg-white',
              secondary: 'bg-white',
              info: 'bg-white',
              success: 'bg-white',
              warning: 'bg-white',
              danger: 'bg-white',
              default: 'bg-white'
            }
          },
          // state: DISABLED
          disabled: {
            checked: {
              primary: 'bg-white',
              secondary: 'bg-white',
              info: 'bg-white',
              success: 'bg-white',
              warning: 'bg-white',
              danger: 'bg-white',
              default: 'bg-white'
            },
            unchecked: {
              primary: 'bg-white',
              secondary: 'bg-white',
              info: 'bg-white',
              success: 'bg-white',
              warning: 'bg-white',
              danger: 'bg-white',
              default: 'bg-white'
            }
          }
        },
        // layout: FILLED
        filled: {
          // state: DEFAULT
          default: {
            checked: {
              primary: 'bg-primary',
              secondary: 'bg-secondary',
              info: 'bg-info',
              success: 'bg-success',
              warning: 'bg-warning',
              danger: 'bg-danger',
              default: 'bg-default'
            },
            unchecked: {
              primary: 'bg-white',
              secondary: 'bg-white',
              info: 'bg-white',
              success: 'bg-white',
              warning: 'bg-white',
              danger: 'bg-white',
              default: 'bg-white'
            }
          },
          // state: DISABLED
          disabled: {
            checked: {
              primary: 'bg-primary-light',
              secondary: 'bg-secondary-light',
              info: 'bg-info-light',
              success: 'bg-success-light',
              warning: 'bg-warning-light',
              danger: 'bg-danger-light',
              default: 'bg-secondary-light'
            },
            unchecked: {
              primary: 'bg-secondary-light',
              secondary: 'bg-secondary-light',
              info: 'bg-secondary-light',
              success: 'bg-secondary-light',
              warning: 'bg-secondary-light',
              danger: 'bg-secondary-light',
              default: 'bg-secondary-light'
            }
          }
        }
      }
    }
  },
  labelCls: {
    base: 'text-base',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light'
    }
  },
  prefixLabelCls: {
    base: 'text-base',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light'
    }
  },
  suffixLabelCls: {
    base: 'text-base',
    state: {
      default: 'text-default',
      disabled: 'text-secondary-light'
    }
  }
}
