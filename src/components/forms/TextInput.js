import React from 'react'

import Button from '../buttons/Button'

const InputText = () => {
  return (
    <form className="flex gap-2 items-center bg-sky-50 md:pe-2.5 rounded-full">
      <Button className="btn-icon">
        <span className="material-symbols-rounded">search</span>
      </Button>
      <input
        type="text"
        className="grow bg-sky-50 py-2.5 rounded-full focus:outline-0 "
        placeholder="Search"
      />
    </form>
  )
}

export default InputText
