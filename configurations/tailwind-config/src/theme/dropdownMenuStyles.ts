export const dropdownMenuStyles = {
  label: 'px-2 py-1.5 text-sm font-semibold text-default',
  separator: '-mx-1 my-1 h-px bg-secondary-50',
  contentCls: {
    base: 'z-50 min-w-fit overflow-hidden bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 text-default/50',
    main: 'text-secondary-dark shadow-lg ring-1 ring-black ring-opacity-5 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
    sub: 'min-w-fit animate-in slide-in-from-left-1 '
  },
  itemCls: {
    base: 'relative flex gap-x-2 cursor-default select-none items-center rounded-sm py-1.5 text-sm outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-default',
    item: 'px-2',
    radioAndCheckBox: 'pl-8 pr-2',
    subTrigger: 'px-2 data-[state=open]:bg-secondary-50'
  }
}
