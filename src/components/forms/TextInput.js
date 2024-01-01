import React from 'react'

import BtnIcon from '../buttons/BtnIcon'

const InputText = () => {
  return (
    <form className="flex gap-2 items-center bg-slate-50 md:pe-2.5 rounded-full">
      <BtnIcon>
        <span class="material-symbols-rounded">search</span>
      </BtnIcon>
      <input
        type="text"
        className="grow bg-slate-50 py-2.5 rounded-full focus:outline-0 hidden md:block"
        placeholder="Search"
      />
    </form>
  )
}

export default InputText
