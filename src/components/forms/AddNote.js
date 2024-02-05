import React from 'react'
import { connect, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import MainForm from './MainForm'
import axios from '../../axios/axios'

import '../../index.css'

// Inputs value
let titleValue = ''
let noteValue = ''
let color = 'bg-slate-300'
let labels = []
let id = uuidv4()

const AddNote = (props) => {
  const stateNote = useSelector((state) => state.notes)
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
  const saveHandler = async () => {
    console.log(labels)
    const noteData = {
      id: id,
      title: titleValue,
      text: noteValue,
      color: color,
      label: labels,
    }

    try {
      await axios.post('/notes.json', noteData)
    } catch (error) {
      console.log('Error saving note:', error)
    }

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
    <MainForm
      onChangeTitle={(e) => title(e)}
      onChangeNote={(e) => note(e)}
      onClickColor={colorHandler}
      onClickSave={saveHandler}
    />
  )
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
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
