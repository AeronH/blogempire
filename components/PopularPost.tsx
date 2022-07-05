import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  post: Post;
}

function PopularPost({post}: Props) {

  const authorSlugSplit = post.author.name.split(' ');
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className='flex justify-between w-full p-5 border-b-2 cursor-pointer group'>
        <div className='flex flex-col justify-center'>
          <h2 className='font-extrabold text-2xl mb-3'>{post.title}</h2>
          <h2 className='text-xl text-slate-600 mb-3'>{post.description}</h2>

          <Link href={`/author/${post.author.slug.current}`}>
            <div className='flex items-center space-x-2'>
              <h2 className='text-lg text-slate-400 mr-2'>By: {post.author.name}</h2>
              <Image
                className='rounded-full object-cover'
                src={urlFor(post.author.image).width(100).url()!}
                height={36}
                width={36}/>
              
            </div>
          </Link>
        </div>

        <div className='flex justify-center rounded-lg overflow-hidden'>
          <img className='h-50 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={urlFor(post.mainImage).height(200).width(300).url()!} alt="" />
        </div>
      </div>
    </Link>
  )
}

export default PopularPost