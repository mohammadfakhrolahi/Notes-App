import React from 'react'

const Container = (props) => {
  return (
    <main className="container px-4 mt-8 mx-auto">
      {props.children}
    </main>
  )
}

export default Container
