import React from 'react'

const InputText = () => {
  return (
    <form className="max-w-fit md:max-w-2xl flex items-center bg-slate-50 md:pe-2.5 rounded-full gap-2 ">
      <button className="p-2.5 rounded-full text-slate-500 hover:bg-slate-200 duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <input type="text" className="grow bg-slate-50 py-2.5 rounded-full focus:outline-0 hidden md:block" placeholder="Search" />
    </form>
  )
}

export default InputText
