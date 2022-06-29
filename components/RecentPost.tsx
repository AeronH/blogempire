import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  post: Post;
}

function RecentPost({post}: Props) {
  return (
        <div className='flex flex-col p-3 w-64 mx-6'>
          <div className='flex justify-center border border-gray-300'>
            <img className='h-40' src={urlFor(post.mainImage).url()!} alt="" />
          </div>
          
          <div>
            <h2 className='font-semibold text-xl mt-1'>{post.title}</h2>
          </div>

          <div>
            <h2 className='text-gray-500 flex-wrap'>{post.description}</h2>
          </div>

          <div className='flex items-center space-x-2'>
            <h2>{post.author.name}</h2>
            <img className='rounded-full' src={urlFor(post.author.image).width(30).url()!} alt="" />
          </div>
        </div>
  )
}

export default RecentPost