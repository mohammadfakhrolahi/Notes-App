import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from '../Card/Card'
import Badge from '../Badge/Badge'

const CardList = () => {
  const stateNotes = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    dispatch({ type: 'DELETE_NOTE', id: id })
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
                title={item.id}
                note={item.text}
                color={item.color}
                onClick={() => deleteHandler(item.id)}
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

export default CardList
