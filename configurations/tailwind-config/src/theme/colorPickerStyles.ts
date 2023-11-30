export const colorPickerStyles = {
  base: 'inline-flex gap-2.5',
  containers: {
    left: 'flex flex-col flex-wrap w-[10.65rem]',
    right: 'flex'
  },
  customHeader: {
    container: 'mt-4 mb-2 flex items-center justify-between w-full text-xs',
    icon: 'w-3 h-3 text-danger'
  },
  swatches: {
    container: 'flex flex-wrap gap-1.5 w-full',
    buttons: 'w-4 h-4 rounded ring-1 ring-secondary-100'
  },
  formHeader: {
    container: 'w-full flex items-center justify-end gap-1 mt-2',
    buttons: 'inline-flex gap-1 rounded px-1 text-xs hover:bg-primary-50',
    spacer: {
      hidden: 'text-secondary-100',
      shown: 'text-transparent'
    }
  },
  form: {
    container: 'flex items-center gap-1',
    colorSampler: 'w-7 h-7 rounded-full ring-1 ring-secondary-100',
    field: {
      container: 'relative flex-1',
      input: {
        base: 'w-full text-xs pl-2 pr-7 py-1.5 border rounded outline-1',
        valid: 'border-default-100 outline-default-100',
        invalid: 'border-danger outline-danger'
      }
    },
    copyBtn: {
      base: 'absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
      icon: 'w-3 h-3'
    },
    copiedText:
      'absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 italic text-xs',
    assistiveText: {
      base: 'pl-8 pt-0.5 flex items-center gap-1',
      icon: 'w-4 h-4 text-danger',
      text: 'text-xs'
    }
  }
}
