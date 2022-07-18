import React from 'react'
import { Post } from '../typings'
import Link from 'next/link'
import { Avatar } from '@chakra-ui/react'

interface Props {
  post: Post;
}

function PostCard({post}: Props) {

  const backgroundStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0 ,0, 0.0), black), url(${post.mainImage})`,
  }

  return (
    <Link key={post.slug} href={`/post/${post.slug}`}>
      <div className='flex flex-col justify-end overflow-hidden relative h-72 group cursor-pointer'>
        <div className='absolute top-0 right-0 z-0 w-full h-full p-5 group bg-no-repeat bg-cover bg-center transition group-hover:scale-105 duration-300' style={backgroundStyles}>
        </div>
        <div className='z-50 p-4'>
          <h2 className='text-slate-300 text-sm italic truncate'>{post.categories.join(' ')}</h2>
          <h1 className='text-white text-lg font-semibold truncate'>{post.title}</h1>
          <p className='text-slate-300 truncate'>{post.description}</p>
        </div>
        
      </div>
    </Link>
  )
}

export default PostCard