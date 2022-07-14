import React from 'react'
import { Button, Textarea } from '@chakra-ui/react'

function Comments() {
  return (
    <div className='mt-10 border-t-2 pt-4'>
      <h1 className='text-2xl font-extrabold'>Comments: </h1>
      <div className='mt-10'>
        LOOPED THROUGH COMMENTS
      </div>
      <form action="post" className='flex flex-col items-start'>
        <Textarea 
          className='mt-8' 
          placeholder='Enter Comment' 
          size='lg'
        />
        
        <Button 
          className='mt-4' 
          size='lg' 
          colorScheme='facebook'>Submit</Button>
      </form>
    </div>
  )
}

export default Comments