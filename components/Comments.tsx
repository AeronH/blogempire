import React from 'react'
import { Button, Textarea } from '@chakra-ui/react'

function Comments() {
  return (
    <div className='mt-10 border-t-2 pt-4'>
      <h1 className='text-2xl underline'>Comments: </h1>
      <div className='mt-10'>
        LOOPED THROUGH COMMENTS
      </div>
      <form action="post" className='flex flex-col items-start'>
        <Textarea 
          className='mt-8' 
          placeholder='Enter Comment' 
          size='lg'
        />
        
        <button className='border border-slate-800 px-5 py-3 mt-5 hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out active:bg-slate-900'>Submit</button>
      </form>
    </div>
  )
}

export default Comments