export const phoneNumberStyles = {
  dividerCls: {
    base: 'w-px h-4 bg-secondary-100 ',
    absolute: {
      phone: 'absolute top-1/2 right-0 transform -translate-y-1/2',
      country: 'absolute top-1/2 right-0 transform -translate-y-1/2',
      extesion: ''
    },
    variant: {
      flat: 'mt-[0.35rem]',
      filled: 'mt-[0.35rem]',
      outlined: 'mt-0'
    }
  },

  customInputCls: {
    base: 'w-20 h-10 outline-none px-3 text-base rounded-r bg-transparent',
    variant: {
      flat: 'pt-3',
      filled: 'pt-3',
      outlined: ''
    }
  }
}
