import React from 'react'

import AddNote from './components/forms/AddNote'
import CardList from './components/CardList/CardList'

const Main = () => {
  return (
    <main className="container px-4 mt-8 mx-auto">
      <section className="flex justify-center">
        <AddNote />
      </section>
      <section className="className='flex justify-center' mt-8">
        <CardList />
      </section>
    </main>
  )
}

export default Main
