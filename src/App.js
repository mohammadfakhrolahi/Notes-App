import React from 'react'
import { useSelector } from 'react-redux'

import Header from './components/Header/Header'
import Main from './Main'
import Backdrop from './components/Backdrop/Backdrop'

function App() {
  const backdrop = useSelector(state => state.backdrop)
  const modal = useSelector(state => state.modal)

  return (
    <div className='pb-16'>
      <Header/>
      <Main/>
      {backdrop ? <Backdrop/> : null}
    </div>
   
  )
}

export default App
