import Link from "next/link"
import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { Avatar, Button } from "@chakra-ui/react";
import Dropdown from "./Dropdown";

function Header() {
  const {data: session} = useSession();

  return (
    <nav className='sticky top-0 w-full bg-slate-50 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        <div className='flex space-x-5'>
          <Link href='/'>
            <img className ='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' />
          </Link>
          <div className='hidden md:inline-flex items-center space-x-4'>
            <Button variant='link' colorScheme='blue'>About</Button>
            <Button variant='link' colorScheme='blue'>Contact</Button>
            <Link href='/browse'>
              <Button 
                className='text-blue-600' 
                variant='outline' 
                colorScheme='blue'
              >Browse</Button>
            </Link>
          </div>
        </div>

        {session ? 

          <div className='flex items-center space-x-4'>
            <Avatar src={session.user?.image || ''}/>
            <Dropdown />
          </div>
          
          :

            <Button 
              onClick={() => signIn()} 
              className='mr-8' 
              colorScheme='blue'
            >Sign In</Button>

        }        
      </div>
    </nav>
  )
}

export default Header