import React, { useState } from 'react'

const DropdownLabel = () => {
  const [checkbox, setCheckbox] = useState([
    { name: 'work', checked: false },
    { name: 'todo', checked: false },
    { name: 'test', checked: false },
  ])

  const handleCheckboxChange = (name) => {
    setCheckbox((prevCheckbox) =>
      prevCheckbox.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const renderCheckbox = (name, checked) => {
    return (
      <label
        className="w-full flex items-center px-1 hover:bg-sky-800 rounded-md duration-200"
        key={name}
      >
        <input
          type="checkbox"
          className="hidden"
          name={name}
          checked={checked}
          onChange={() => handleCheckboxChange(name)}
        />
        <span className="material-symbols-rounded">
          {checked ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <span className="ml-2">{name}</span>
      </label>
    )
  }

  return (
    <div className="w-56 flex flex-col gap-1 px-1 py-2">
      {checkbox.map((item) => renderCheckbox(item.name, item.checked))}
    </div>
  )
}

export default DropdownLabel
