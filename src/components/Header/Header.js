import React from 'react'

import Logo from '../Logo/Logo'
import TextInput from '../forms/TextInput'
import Button from '../buttons/Button'

const Header = () => {
  return (
    <header className="mx-4">
      <div className="container flex justify-between items-center bg-sky-100 p-2 py-2 px-4 sm:px-10 mt-4  mx-auto rounded-full shadow-md">
          <Logo/>
          <div className="md:grow max-w-2xl">
            <TextInput />
          </div>
          <div>
            <Button className="btn-icon">
              <span className="material-symbols-rounded">settings</span>
            </Button>
          </div>
      </div>
    </header>
  )
}

export default Header
