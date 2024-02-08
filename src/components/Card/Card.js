import React from 'react'

import Button from '../buttons/Button'
import Dropdown from '../Dropdown/Dropdown'
import DropdownColors from '../DropdownItems/DropdownColors'

const Card = ({
  note,
  title,
  color,
  children,
  className,
  id,
  deleteNote,
  onClickColor,
  onClickEditNote,
}) => {
  const classes = `flex flex-col justify-between p-4 rounded-3xl ${color} ${className} || ''`

  return (
    <div className={classes} id={id}>
      <div>
        <div>
          <div>
            <h4 className="pb-2 font-semibold">{title}</h4>
          </div>
          <div>
            <p className="pb-2">{note}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 my-3">{children}</div>
      </div>

      <div className="flex items-center gap-2">
        <Button onClick={onClickEditNote} className="btn-xs">
          <span className="material-symbols-rounded">edit_square</span>
        </Button>
        <Button className="btn-xs" onClick={deleteNote}>
          <span className="material-symbols-rounded">delete</span>
        </Button>
        <Dropdown
          dropdownItems={() => <DropdownColors onClick={onClickColor} />}
          className="btn-xs bg-transparent "
          icon={<span className="material-symbols-rounded">palette</span>}
        ></Dropdown>
      </div>
    </div>
  )
}

export default Card
