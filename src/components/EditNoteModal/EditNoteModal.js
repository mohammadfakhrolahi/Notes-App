import React from 'react'
import { connect, useSelector } from 'react-redux'

import MainForm from '../forms/MainForm'

// Inputs value
let titleValue = ''
let noteValue = ''
let color = 'bg-slate-300'
let labels = []

const EditNoteModal = ({
  onChangeTitle,
  onChangeNote,
  onClickColor,
  onClickSave,
  titleValue,
  noteValue,
}) => {
  const stateLabel = useSelector((state) => state.label)
  labels = stateLabel.filter((item) => item.checked).map((item) => item.name)

  return (
    <div className="w-full sm:max-w-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 sm:px-0 z-50">
      <MainForm
        onChangeTitle={onChangeTitle}
        onChangeNote={onChangeNote}
        onClickColor={onClickColor}
        onClickSave={onClickSave}
        titleValue={titleValue}
        noteValue={noteValue}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editNote: () =>
      dispatch({
        type: 'EDIT_NOTE',
        titleValue: titleValue,
        noteValue: noteValue,
        colorValue: color,
        labelValue: labels,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteModal)
