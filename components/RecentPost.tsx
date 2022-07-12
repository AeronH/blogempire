import React from 'react'
import { urlFor } from '../sanity'
import { Post } from '../typings'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from '@chakra-ui/react'

interface Props {
  post: Post;
}

function RecentPost({post}: Props) {
  return (
      <Link key={post.id} href={`/post/${post.id}`}>
        <div className='flex flex-col w-72 mx-4 rounded-lg cursor-pointer group shadow-lg overflow-hidden'>
          <div className='flex justify-center border border-gray-300 overflow-hidden'>
            <img className='h-40 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' src={post.mainImage} alt="" />
          </div>
          
          <div className='px-4 pb-4 pt-2'>
            <div>
              <h2 className='font-bold text-xl mt-1 overflow-ellipsis'>{post.title}</h2>
            </div>

            <div>
              <h2 className='text-gray-500 flex-wrap overflow-ellipsis'>{post.description}</h2>
            </div>

            <Link href={`/author/${post.author[1]}`}>
              <div className='flex items-center space-x-1'>
                <h2 className='text-gray-400 mr-2'>By: {post.author[0]}</h2>
                <Avatar 
                src={post.author[2]}
                size='sm'
                name={post.author[0]}
              />
              </div>
            </Link>
          </div>
        </div>
      </Link>
  )
}

export default RecentPost