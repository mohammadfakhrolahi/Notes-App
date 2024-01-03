import React from 'react'

import Button from '../buttons/Button'
import Badge from '../Badge/Badge'

const Card = ({ label, note, title, className }) => {
  const classes = `p-4 rounded-3xl ${className} || ''`
  return (
    <div className={classes}>
      <div>
        <div>
          <h4 className="pb-2 font-semibold">{title}</h4>
        </div>
        <div>
          <p className="pb-2">{note}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 my-3">
        <Badge>{label}</Badge>
        <Badge>{label}</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Button className="btn-xs">
          <span className="material-symbols-rounded">more_vert</span>
        </Button>
        <Button className="btn-xs">
          <span class="material-symbols-rounded">archive</span>
        </Button>
        <Button className="btn-xs">
          <span class="material-symbols-rounded">delete</span>
        </Button>
        <Button className="btn-xs">
          <span class="material-symbols-rounded">palette</span>
        </Button>
      </div>
    </div>
  )
}

export default Card
