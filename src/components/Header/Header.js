import React from 'react'

import Logo from '../Logo/Logo'
import TextInput from '../forms/TextInput'
import BtnIcon from '../buttons/BtnIcon'

const Header = () => {
  return (
    <header className="mx-4">
      <div className="container flex justify-between items-center bg-white py-2 px-4 sm:px-10 mt-4  mx-auto rounded-full shadow-md">
          <Logo/>
          <div className="md:grow max-w-2xl">
            <TextInput />
          </div>
          <div>
            <BtnIcon>
              <span class="material-symbols-rounded">settings</span>
            </BtnIcon>
          </div>
      </div>
    </header>
  )
}

export default Header
