import React from 'react'
import { Post } from '../typings'
import Link from 'next/link'
import  {DeleteIcon} from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'

interface Props {
  post: Post;
  allowDelete: boolean;
  deletePost: any;
}

function PostCard({post, allowDelete, deletePost}: Props) {

  const backgroundStyles = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0 ,0, 0.0), black), url(${post.mainImage})`,
  }

  return (
    <Link key={post.slug} href={`/post/${post.id}`}>
      <div className='flex flex-col justify-end overflow-hidden relative h-72 group cursor-pointer'>
        <div className='absolute top-0 right-0 z-0 w-full h-full p-5 group bg-no-repeat bg-cover bg-center transition group-hover:scale-105 duration-300' style={backgroundStyles}>
        </div>
        <div className='z-50 flex justify-between items-end'>
          <div className='p-4'>
            <h2 className='text-slate-300 text-sm italic truncate'>{post.categories.join(' ')}</h2>
            <h1 className='text-white text-lg font-semibold truncate'>{post.title}</h1>
            <p className='text-slate-300 truncate'>{post.description}</p>
          </div>
          {allowDelete && 
            <div className='h-fit p-4 transition hover:scale-110 duration-200'>
              <Icon as={DeleteIcon} h={8} w={8} color='white' onClick={(e) => deletePost(e, post)}/>
            </div>
          }
          
        </div>
        
      </div>
    </Link>
  )
}

PostCard.defaultProps = {
  allowDelete: false,
  deletePost: null
}

export default PostCard