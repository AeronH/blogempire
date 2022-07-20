import Link from "next/link"
import { Avatar, Button } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { useSession, signIn } from 'next-auth/react'
import { AddIcon } from '@chakra-ui/icons'
import Image from 'next/image'

interface Props {
  inCreatePostPage: boolean
}

function Header({inCreatePostPage}: Props) {

  const {data: session} = useSession(); 
  console.log(session);
  
  return (
    <nav className='sticky top-0 w-full bg-slate-100 shadow-lg z-50 h-24 flex items-center'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center w-full'>
        <div className='flex space-x-5 items-center'>
          <Link href='/'>
            <div className='pl-5 sm:px-5 cursor-pointer'>
              <Image src='/blogempire.png' height='60' width='110'/>
            </div>
          </Link>

          <div className='space-x-5 flex '>
            <div className='space-x-5 hidden md:flex items-center'>
              <Link href='/aboutus'>
                <Button variant='link' colorScheme='black'>About</Button>
              </Link>

              <Link href='/contact'>
                <Button variant='link' colorScheme='black'>Contact</Button>
              </Link>
              
              <Link href='/categories'>
                <Button variant='link' colorScheme='black'>Categories</Button>
              </Link>
            </div>
            {(session && !inCreatePostPage) &&
              <Link href='/createpost'>
                <Button
                  className='sm:ml-40'
                  rightIcon={<AddIcon />}>Create Post
                </Button>
              </Link>}
            
          </div>
        </div>

        {session ? 
        <div className='mr-5 flex items-center space-x-3'>
          <Dropdown />
          <div className='hidden  sm:inline-flex'>
            <Avatar 
              src={session?.user?.image!}
              name={session?.user?.name!}/>
          </div>
        </div>
        : 
        <Button 
          variant='outline'
          colorScheme='gray'
          className='mr-10 border-black'
          onClick={() => signIn('google', {callbackUrl: '/'})}
        >Sign in </Button>}
      </div>
    </nav>
  )
}

Header.defaultProps = {
  inCreatePostPage: false,
}

export default Header