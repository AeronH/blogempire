import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  post: Post;
}

function RecentPost({post}: Props) {
  return (
      <Link key={post._id} href={`/post/${post.slug.current}`}>
        <div className='flex flex-col w-64 mx-4 rounded-xl cursor-pointer group shadow-lg overflow-hidden'>
          <div className='flex justify-center border border-gray-300 overflow-hidden'>
            <img className='h-40 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).url()!} alt="" />
          </div>
          
          <div className='px-2 pb-2'>
            <div>
              <h2 className='font-semibold text-xl mt-1'>{post.title}</h2>
            </div>

            <div>
              <h2 className='text-gray-500 flex-wrap'>{post.description}</h2>
            </div>

            <div className='flex items-center space-x-2'>
              <h2 className='text-gray-400'>{post.author.name}</h2>
              <img className='rounded-full' src={urlFor(post.author.image).width(30).url()!} alt="" />
            </div>
          </div>
        </div>
      </Link>
  )
}

export default RecentPost