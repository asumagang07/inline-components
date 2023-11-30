export const dropdownStyles = {
  base: 'relative inline-block text-left',
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
  itemsContainer:
    'absolute w-48 z-10 min-w-full mt-2 bg-white shadow ring-1 ring-black ring-opacity-5 focus:outline-none',
  positionRight: 'origin-top-right right-0',
  positionLeft: 'origin-top-left left-0',
  // Items
  buttonItem:
    'w-full flex items-center text-left px-4 py-2 text-base text-secondary-dark hover:bg-secondary-50',
  // custom dropdown
  read: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
  unread: 'text-blue-700 bg-blue-100 dark:text-white dark:bg-blue-600'
}

// DropdownItem
// this is the <li> that lives inside the Dropdown <ul>
// you're probably looking for the dropdownItem style inside button
export const dropdownItemStyles = {
  itemButton: 'group py-2 px-3'
}

// DropdownSubmenu
export const dropdownSubmenuStyles = {
  base: 'hidden absolute w-56 p-2 -mt-4 text-gray-600 bg-white border border-gray-100 shadow min-w-max-content',
  align: {
    left: 'left-full',
    right: 'right-full'
  }
}

// For Standard Dropdown Styling only
export const standardDropdownStyles = {
  btnTrigger:
    'cursor-pointer outline-none flex items-center justify-center text-secondary hover:text-secondary-dark transition duration-150 ease-in-out',
  btnItems:
    'cursor-pointer outline-none w-full flex items-center px-4 py-2 gap-2 text-base text-secondary-dark hover:bg-secondary-50 leading-none',
  actionItmens:
    'cursor-pointer outline-none w-full flex items-center px-4 py-2 gap-2 text-base leading-none bg-white',
  actionColor: {
    primary: 'text-primary-dark hover:bg-primary-50',
    secondary: 'text-secondary-dark hover:bg-secondary-50',
    success: 'text-success-dark hover:bg-success-50',
    warning: 'text-warning-dark hover:bg-warning-50',
    danger: 'text-danger-dark hover:bg-danger-50'
  }
}
