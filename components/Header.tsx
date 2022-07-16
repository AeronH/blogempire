import Link from "next/link"
import { Avatar, Button } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { useSession, signIn } from 'next-auth/react'
import { AddIcon } from '@chakra-ui/icons'

interface Props {
  inCreatePostPage: boolean
}

function Header({inCreatePostPage}: Props) {

  const {data: session} = useSession(); 
  console.log(session);
  
  return (
    <nav className='sticky top-0 w-full bg-slate-50 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        <div className='flex space-x-5'>
          <Link href='/'>
            <img className ='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' />
          </Link>

          <div className='space-x-5 flex'>
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
                className='ml-4'
                rightIcon={<AddIcon />}>Create Post
              </Button>
            </Link>}

          </div>
        </div>

        {session ? 
        <div className='flex items-center space-x-3'>
          <Dropdown />
          <Avatar 
            src={session?.user?.image!}
            name={session?.user?.name!}/>
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