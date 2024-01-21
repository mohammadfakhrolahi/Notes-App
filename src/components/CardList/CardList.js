import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../Card/Card'
import Badge from '../Badge/Badge'

const CardList = () => {
  const stateNotes = useSelector((state) => state.notes)

  return (
    <div>
      <h2 className="ms-4 mb-4">Notes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {stateNotes.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              note={item.text}
              color={item.color}
            >
              {item.label.map((labels, index) => (
                <Badge key={index}>{labels}</Badge>
              ))}
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CardList
