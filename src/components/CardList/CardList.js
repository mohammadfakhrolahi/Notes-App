import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

import Card from '../Card/Card'
import Badge from '../Badge/Badge'
import DropdownColors from '../DropdownItems/DropdownColors'

let noteId = ''
let color = ''

const CardList = (props) => {
  const stateNotes = useSelector((state) => state.notes)

  const deleteHandler = (id) => {
    noteId = id
    props.deleteNote()
  }

  const changeColorHandler = (e, id) => {
    // e.preventDefault()
    noteId = id
    const btnValue = e.currentTarget.value
    color = btnValue
    console.log(btnValue)
    console.log('clicked')
    props.changeColor()
  }

  useEffect(() => {}, [stateNotes])

  return (
    <div>
      <h2 className="ms-4 mb-8 text-4xl text-slate-700">Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {stateNotes.length == 0 ? (
          <p className="ms-4 text-slate-500">Notes you add appear here</p>
        ) : (
          stateNotes.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                note={item.text}
                color={item.color}
                deleteNote={() => deleteHandler(item.id)}
                onClickColor={(e) => changeColorHandler(e, item.id)}
              >
                {item.label.map((labels, index) => (
                  <Badge key={index}>{labels}</Badge>
                ))}
              </Card>
            )
          })
        )}
      </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
