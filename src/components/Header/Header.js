import React from 'react'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <span>Logo</span>
      <div>
        <form>
          <input type="text" placeholder="Search" />
        </form>
      </div>
    </header>
  )
}

export default Header
