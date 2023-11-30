export const addressAutoCompleteStyles = {
  rootCls: 'w-full flex-1 flex flex-col gap-x-8 gap-y-3',
  wrapperCls: ' flex flex-col flex-wrap space-y-4 ',
  suggestionsCls: {
    wrapper:
      'w-[calc(100%+2px)] absolute top-[2.85rem] w-full h-auto bg-primary-100 border border-secondary-light/50 rounded z-10 overflow-hidden left-[-1px]',
    item: {
      base: 'flex-1 px-3 py-2 flex items-start flex-row gap-2 text-base cursor-pointer',
      default: 'bg-white text-default',
      active: 'bg-primary-50 text-secondary-dark'
    }
  },
  fieldCls: ''
}
