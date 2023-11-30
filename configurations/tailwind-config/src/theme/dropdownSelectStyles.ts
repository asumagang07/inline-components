export const dropdownSelectStyles = {
  triggerCls:
    'flex items-center gap-x-2 disabled:cursor-not-allowed disabled:opacity-50',
  labelCls: 'px-2 py-1.5 text-sm font-semibold text-default/50',
  separator: '-mx-1 my-1 h-px bg-secondary-50',
  contentCls:
    'relative z-50 min-w-fit overflow-hidden bg-white text-default/50 shadow-lg ring-1 ring-black ring-opacity-5 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
  itemCls:
    'relative flex gap-x-2 cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
}
