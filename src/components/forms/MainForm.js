import React from 'react'

import Button from '../buttons/Button'
import Dropdown from '../Dropdown/Dropdown'
import DropdownLabel from '../DropdownItems/DropdownLabel'
import DropdownColors from '../DropdownItems/DropdownColors'

const MainForm = ({
  onChangeTitle,
  onChangeNote,
  onClickColor,
  onClickSave,
  className,
}) => {
  const classes = `w-full sm:max-w-xl bg-sky-100 p-2 rounded-3xl ${className} || ''`

  return (
    <div className={classes.trim()}>
      <form>
        <div>
          <input
            type="text"
            id="title"
            className="w-full bg-sky-100 py-2.5 px-4 rounded-3xl font-medium focus:outline-0"
            placeholder="Title"
            onChange={onChangeTitle}
          />
        </div>
        <div>
          <textarea
            type="text"
            id="note"
            rows={4}
            className="w-full bg-sky-50 py-2.5 px-4 rounded-3xl  focus:outline-0"
            placeholder="Take a note..."
            onChange={onChangeNote}
          />
        </div>

        <div>
          <div>
            <div className="flex justify-end items-center gap-1 mt-4">
              <Dropdown
                dropdownItems={() => <DropdownLabel />}
                icon={
                  <span className="material-symbols-rounded me-2 text-sm">
                    sell
                  </span>
                }
              >
                Label
              </Dropdown>
              <Dropdown
                dropdownItems={DropdownColors}
                onClick={onClickColor}
                icon={
                  <span className="material-symbols-rounded me-2 text-sm">
                    palette
                  </span>
                }
              >
                Color
              </Dropdown>
            </div>
          </div>
          <hr className="border-t border-sky-300 my-2" />
        </div>
      </form>
      <div className="flex justify-end items-center ">
        <Button className="btn-primary" onClick={onClickSave}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default MainForm
