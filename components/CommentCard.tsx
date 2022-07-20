import React from 'react'
import { Comment } from '../typings'

interface Props {
  comment: Comment
}

function CommentCard({comment}: Props) {
  return (
    <div className=''>
      <div className='flex space-x-2 items-center'>
        <h1 className='font-semibold'>{comment.author}</h1>
        <h2 className='text-slate-400 text-sm'>{comment.publishedDate}</h2>
      </div>
      <p>{comment.body}</p>
    </div>
  )
}

export default CommentCard