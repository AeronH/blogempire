import React from 'react'
import Header from '../components/Header'

function browse() {
  return (
    <div>
      <Header />

      <section className='max-w-7xl mx-auto h-fit p-10'>
        <div className=''>
          <h1 className='text-3xl font-semibold'>Categories: </h1>
        </div>
        <div>
          <h1 className='text-3xl font-semibold'>Authors: </h1>
        </div>
      </section>
    </div>
  )
}

export default browse