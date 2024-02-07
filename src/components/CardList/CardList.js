import React, { useEffect } from 'react'
import { useSelector, connect, useDispatch } from 'react-redux'

import Card from '../Card/Card'
import Badge from '../Badge/Badge'
import EditNoteModal from '../EditNoteModal/EditNoteModal'
import axios from '../../axios/axios'

let noteId = ''
let color = ''
let titleValue = ''
let noteValue = ''
let labels = []
let ModalData = []
let payload = null

const CardList = (props) => {
  const dispatch = useDispatch()
  const stateNotes = useSelector((state) => state.notes)
  const stateLabel = useSelector((state) => state.label)

  // Delete note
  const deleteHandler = async (id) => {
    noteId = id
    let noteKey = ''

    try {
      await axios.get(`/notes.json`).then((res) => {
        const index = stateNotes.findIndex((item) => item.id === id)
        const objects = Object.keys(res.data)
        noteKey = objects[index]
      })

      await axios.delete(`/notes/${noteKey}.json`)
      props.deleteNote()
    } catch (error) {
      console.log(`Can't delete note! ${error}`)
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    }
  }

  // Change color
  const changeColorHandler = (e, id) => {
    noteId = id
    const btnValue = e.currentTarget.value
    color = btnValue
    props.changeColor()
  }

  // Edit title
  const title = (e) => {
    titleValue = e.target.value
  }

  // Edit note
  const note = (e) => {
    noteValue = e.target.value
  }

  // Choose color
  const colorHandler = (e) => {
    e.preventDefault()
    const btnValue = e.currentTarget.value
    color = btnValue
  }

  labels = stateLabel.filter((item) => item.checked).map((item) => item.name)

  // Edit note handler
  const editNoteHandler = (id) => {
    props.backdrop()
    props.modal()
    props.checkboxReset()

    ModalData = stateNotes.filter((item) => item.id === id)

    ModalData.map((item) => {
      noteId = item.id
      titleValue = item.title
      noteValue = item.text
      color = item.color
      labels = item.label
    })
  }

  // Save edited note
  const saveHandler = () => {
    props.editNote()
    props.backdrop()
    props.modal()
    // Reset form inputs
    titleValue = ''
    noteValue = ''
    color = ''
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get('/notes.json').then((res) => {
          const notesArray = []
          for (const item in res.data) {
            if (res.data.hasOwnProperty(item)) {
              const note = res.data[item]
              notesArray.push(note)
            }
          }

          dispatch({ type: 'UPDATE_NOTES', payload: notesArray })
        })
      } catch (error) {
        console.error('Error fetching notes:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2 className="ms-4 mb-8 text-4xl text-slate-700">Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {stateNotes.length == 0 ? (
          <p className="ms-4 text-slate-500">Notes you add appear here</p>
        ) : (
          stateNotes?.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                note={item.text}
                color={item.color}
                deleteNote={() => deleteHandler(item.id)}
                onClickColor={(e) => changeColorHandler(e, item.id)}
                onClickEditNote={() => editNoteHandler(item.id)}
              >
                {item.label?.map((labels, index) => (
                  <Badge key={index}>{labels}</Badge>
                ))}
              </Card>
            )
          })
        )}
      </div>
      {ModalData
        ? ModalData.map((item) => {
            return (
              <EditNoteModal
                key={item.id}
                onChangeTitle={(e) => title(e)}
                onChangeNote={(e) => note(e)}
                onClickColor={colorHandler}
                onClickSave={saveHandler}
                titleValue={item.title}
                noteValue={item.text}
              />
            )
          })
        : null}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: () => dispatch({ type: 'DELETE_NOTE', id: noteId }),
    changeColor: () =>
      dispatch({ type: 'CHANGE_COLOR', id: noteId, color: color }),
    backdrop: () => dispatch({ type: 'BACKDROP' }),
    modal: () => dispatch({ type: 'MODAL' }),
    editNote: () =>
      dispatch({
        type: 'EDIT_NOTE',
        id: noteId,
        title: titleValue,
        text: noteValue,
        color: color,
        label: labels,
      }),
    checkboxReset: () => dispatch({ type: 'CHECKBOXRESET' }),
    updateNotes: () => dispatch({ type: 'UPDATE_NOTES', payload: payload }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
