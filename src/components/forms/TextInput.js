import React from 'react'

import Button from '../buttons/Button'

const InputText = () => {
  return (
    <form className="flex gap-2 items-center bg-sky-50 dark:bg-slate-600 md:pe-2.5 rounded-full duration-200">
      <Button className="btn-icon">
        <span className="material-symbols-rounded">search</span>
      </Button>
      <input
        type="text"
        className="grow bg-sky-50 dark:bg-slate-600 text-black dark:text-slate-100 py-2.5 rounded-full focus:outline-0 duration-200"
        placeholder="Search"
      />
    </form>
  )
}

export default InputText
