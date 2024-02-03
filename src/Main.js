import React from 'react'

import Container from './components/Container/Container'
import AddNote from './components/forms/AddNote'
import CardList from './components/CardList/CardList'

const Main = () => {
  return (
    <Container>
      <section className="flex justify-center">
        <AddNote />
      </section>
      <section className="className='flex justify-center' mt-8">
        <CardList />
      </section>
    </Container>
  )
}

export default Main
