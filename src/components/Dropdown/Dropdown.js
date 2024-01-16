import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

const Dropdown = ({ icon, children, dropdownItems, onClick, value, colorClass }) => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn-secondary duration-200">
            {icon}
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2  origin-top-right divide-y divide-gray-100 rounded-lg bg-sky-900 text-white  shadow-lg ring-1 ring-black/5 focus:outline-none">
            {dropdownItems({ onClick, value })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
