export const contextMenuStyles = {
  subTrigger:
    'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary-50 data-[state=open]:bg-secondary-50',
  subContent:
    'z-50 min-w-[8rem] overflow-hidden border bg-white p-1 text-default shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  content:
    'z-50 min-w-[8rem] overflow-hidden border bg-white p-1 text-default/50 shadow-lg animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  checkboxItem:
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  radioItem:
    'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  label: 'px-2 py-1.5 text-sm font-semibold',
  separator: '-mx-1 my-1 h-px bg-secondary-50',
  shortcut: 'ml-auto text-xs tracking-widest'
}
