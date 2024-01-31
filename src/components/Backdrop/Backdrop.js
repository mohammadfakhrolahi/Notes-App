import React from 'react'
import {useDispatch} from 'react-redux'

const Backdrop = () => {
  const dispatch = useDispatch()
  const closeModalBackdropHandler = () => {
    dispatch({ type: 'BACKDROP' })
    dispatch({type: 'MODAL'})
  }
  return (
    <div  onClick={closeModalBackdropHandler} className='w-full h-full fixed top-0 right-0 bg-black/50 z-40'></div>
  )
}

export default Backdrop