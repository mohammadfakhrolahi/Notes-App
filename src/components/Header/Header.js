import React from 'react'

import Logo from '../Logo/Logo'
import TextInput from '../forms/TextInput'
import Button from '../buttons/Button'

const Header = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const themeHandler = () => {
    if (localStorage.theme === 'light' || !('theme' in localStorage)) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="mx-4">
      <div className="container flex justify-between items-center gap-2 bg-sky-100 dark:bg-slate-700 p-2 py-2 px-4 sm:px-10 mt-4  mx-auto rounded-full shadow-md">
        <Logo />
        <div className="md:grow max-w-2xl">
          <TextInput />
        </div>
        <div>
          <Button className="btn-icon" onClick={themeHandler}>
            <span className="material-symbols-rounded">routine</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
