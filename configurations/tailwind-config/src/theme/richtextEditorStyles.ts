export const richTextEditorStyles = {
  editorContainer:
    'block relative p-1 pt-0 border rounded border-secondary-100 max-h-full overflow-auto',
  editor: 'prose prose-playbookRTE',
  toolbarContainer:
    'sticky top-0 flex flex-wrap p-1 bg-white/50 backdrop-blur-md gap-px items-center border-b border-t-0 border-secondary-100',
  toolbarDivider: 'inline w-px h-5 bg-secondary-100 mx-1',
  customButton: {
    base: 'inline-flex gap-0.5 rounded-lg p-1.5 items-center text-base text-secondary-dark hover:bg-secondary-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent',
    icon: 'w-4 h-4',
    active: 'bg-secondary-100',
    notActive: 'bg-white/50 backdrop-blur-md'
  },
  customSelect: {
    trigger:
      'inline-flex gap-0.5 rounded-lg p-1.5 items-center text-base text-secondary-dark hover:bg-secondary-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent',
    content:
      'relative z-50 min-w-fit overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 text-default/50 text-secondary-dark shadow-lg ring-1 ring-black ring-opacity-5 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
    viewport:
      'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
    label: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
    item: 'flex gap-x-2 cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-primary-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-default',
    indicatorContainer: 'h-3.5 w-3.5',
    separator: '-mx-1 my-1 h-px bg-secondary-50'
  },
  mentions: {
    chip: 'border border-secondary-darker rounded box-decoration-clone px-1 py-0.5 bg-white',
    itemContainer: 'relative bg-white drop-shadow-xl overflow-hidden p-2',
    item: {
      base: 'bg-transparent border border-transparent rounded block px-2 py-1 text-base text-left w-full',
      isSelected: 'border-secondary-darker'
    }
  }
}
