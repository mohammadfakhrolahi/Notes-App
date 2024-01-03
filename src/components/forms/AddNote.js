import React from 'react'

import Button from '../buttons/Button'

import '../../index.css'

const AddNote = () => {
  return (
    <form className="w-full sm:max-w-xl bg-sky-100 p-2 rounded-3xl">
      <div>
        <input
          type="text"
          className="w-full bg-sky-100 py-2.5 px-4 rounded-3xl font-medium focus:outline-0"
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          type="text" rows={4}
          className="w-full bg-sky-50 py-2.5 px-4 rounded-3xl  focus:outline-0"
          placeholder="Take a note..."
        />
      </div>

      <div>
        <div>
          <div className="flex justify-end items-center gap-1 mt-4">
            <Button className="btn-secondary">
              <span className="material-symbols-rounded me-2 text-sm">
                sell
              </span>{' '}
              Label
            </Button>
            <Button className="btn-secondary">
              <span className="material-symbols-rounded me-2 text-sm">
                palette
              </span>{' '}
              Color
            </Button>
          </div>
        </div>
        <hr className="border-t border-sky-300 my-2" />
        <div className="flex justify-end items-center ">
          <Button className="btn-primary">Create</Button>
        </div>
      </div>
    </form>
  )
}

export default AddNote
