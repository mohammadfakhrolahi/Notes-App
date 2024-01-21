import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

import Button from '../buttons/Button'
import Dropdown from '../Dropdown/Dropdown'
import DropdownColors from '../DropdownItems/DropdownColors'
import DropdownLabel from '../DropdownItems/DropdownLabel'

import '../../index.css'

// Inputs value
let titleValue = ''
let noteValue = ''
let color = 'bg-slate-300'
let labels = []

const AddNote = (props) => {
  const stateNote = useSelector((state) => state.notes)
  const stateLabel = useSelector((state) => state.label)
  labels = stateLabel.filter((item) => item.checked).map((item) => item.name)
  // console.log(labels)

  // Save note handler
  const saveHandler = () => {
    props.save()
    // console.log(stateNote)
    // console.log(stateLabel)
  }

  // Title for new note
  const title = (e) => {
    titleValue = e.target.value
  }

  // New note
  const note = (e) => {
    noteValue = e.target.value
  }

  // Choose color
  const colorHandler = (e) => {
    e.preventDefault()
    const btnValue = e.currentTarget.value
    color = btnValue
    // console.log(color)
  }

  return (
    <div className="w-full sm:max-w-xl bg-sky-100 p-2 rounded-3xl">
      <form>
        <div>
          <input
            type="text"
            className="w-full bg-sky-100 py-2.5 px-4 rounded-3xl font-medium focus:outline-0"
            placeholder="Title"
            onChange={(e) => title(e)}
          />
        </div>
        <div>
          <textarea
            type="text"
            rows={4}
            className="w-full bg-sky-50 py-2.5 px-4 rounded-3xl  focus:outline-0"
            placeholder="Take a note..."
            onChange={(e) => note(e)}
          />
        </div>

        <div>
          <div>
            <div className="flex justify-end items-center gap-1 mt-4">
              <Dropdown
                dropdownItems={() => <DropdownLabel />}
                // onClick={labelHandler}
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
                onClick={colorHandler}
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
        <Button className="btn-primary" onClick={saveHandler}>
          Save
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { note: state.note }
}

const mapDispatchToProps = (dispatch) => {
  return {
    save: () =>
      dispatch({
        type: 'SAVE',
        titleValue: titleValue,
        noteValue: noteValue,
        colorValue: color,
        labelValue: labels,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
