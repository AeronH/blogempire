import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'

interface Props {
  post: Post;
}

function PopularPost({post}: Props) {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className='flex justify-between w-full p-5 border-b-2 cursor-pointer group'>
        <div className='flex flex-col justify-center'>
          <h2 className='text-3xl mb-3'>{post.title}</h2>
          <h2 className='text-xl text-slate-600 mb-3'>{post.description}</h2>

          <div className='flex items-center space-x-2'>
            <h2 className='text-lg text-slate-400'>{post.author.name}</h2>
            <img className='rounded-full' src={urlFor(post.author.image).width(30).url()!} alt="" />
          </div>
        </div>

        <div className='flex justify-center rounded-lg overflow-hidden'>
          <img className='h-50 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).height(200).width(300).url()!} alt="" />
        </div>
      </div>
    </Link>
  )
}

export default PopularPost