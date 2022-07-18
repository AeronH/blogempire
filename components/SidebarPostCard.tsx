import React from 'react'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  post: Post;
}

function SidebarPostCard({post}: Props) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className='group flex items-center space-x-4 cursor-pointer'>
        <div className='rounded-full h-24 w-24 overflow-hidden'>
          {post.mainImage ?
            <img className='h-24 w-24 object-cover transition group-hover:scale-105 duration-300' src={post.mainImage} alt="" />
            :
            <div className='w-full h-full bg-slate-400 flex items-center justify-center transition group-hover:scale-105 duration-300'>
              <p className='font-semibold'>No image</p>
            </div>
          }
          
        </div>
        <div>
          <h1>{post.title}</h1>
          <h2 className='opacity-60'>{post.publishedDate}</h2>
        </div>
      </div>
    </Link>
  )
}

export default SidebarPostCard