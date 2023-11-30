export const modalStyles = {
  overlayCls:
    'fixed inset-0 w-screen h-[var(--visual-viewport-height)] p-4 flex items-center justify-center bg-black/25',
  modalCls: {
    base: 'outline-none w-full p-5 bg-white border border-solid border-secondary-50',
    size: {
      sm: 'max-w-[320px]',
      default: 'max-w-[500px]',
      md: 'max-w-[800px]',
      lg: 'max-w-[1140px]'
    },
    shadow: {
      sm: 'shadow-sm',
      default: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg'
    },
    border_radius: {
      squared: 'rounded-none',
      rounded: 'rounded',
      'soft-edged': 'rounded-md'
    }
  },
  dialogCls: 'outline-none flex-1',
  headingCls: 'flex-1 text-secondary-dark leading-normal font-semibold'
}
