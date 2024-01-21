import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux'

let labels = []

const DropdownLabel = (props) => {
  const stateLabel = useSelector((state) => state.label)

  const checkboxChangeHandler = (name) => {
    labels = stateLabel.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
      )

    props.label(labels)
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
          onChange={() => checkboxChangeHandler(name)}
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
      {stateLabel.map((item) => renderCheckbox(item.name, item.checked))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { label: state.label }
}

const mapDispatchToProps = (dispatch) => {
  return {
    label: () => dispatch({ type: 'CHECKBOX', label: labels }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownLabel)
