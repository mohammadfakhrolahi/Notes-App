import React from 'react'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

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
let id = ''

const AddNote = (props) => {
  const stateLabel = useSelector((state) => state.label)
  labels = stateLabel.filter((item) => item.checked).map((item) => item.name)

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
  }

  // Save note handler
  const saveHandler = () => {
    props.save()
    props.checkboxReset()
    // Reset form inputs
    document.getElementById('title').value = ''
    document.getElementById('note').value = ''
    titleValue = ''
    noteValue = ''
    color = 'bg-slate-300'
    id = uuidv4()
  }

  return (
    <div className="w-full sm:max-w-xl bg-sky-100 p-2 rounded-3xl">
      <form>
        <div>
          <input
            type="text"
            id="title"
            className="w-full bg-sky-100 py-2.5 px-4 rounded-3xl font-medium focus:outline-0"
            placeholder="Title"
            onChange={(e) => title(e)}
          />
        </div>
        <div>
          <textarea
            type="text"
            id="note"
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
        id: id,
      }),
    checkboxReset: () => dispatch({ type: 'CHECKBOXRESET' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote)
