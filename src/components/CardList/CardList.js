import React from 'react'

import Card from '../Card/Card'

const CardList = () => {
  const title = 'Lorem ipsum'
  const note = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`
  const label = 'Label'

  return (
    <div>
      <h2 className='ms-4 mb-4'>Notes</h2>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
      <Card title={title} note={note} label={label} className="bg-slate-300" />
      <Card title={title} note={note} label={label} className="bg-rose-300" />
      <Card title={title} note={note} label={label} className="bg-purple-300" />
      <Card title={title} note={note} label={label} className="bg-blue-300" />
      <Card title={title} note={note} label={label} className="bg-purple-300" />
      <Card title={title} note={note} label={label} className="bg-purple-300" />
    </div>
    </div>
  )
}

export default CardList
