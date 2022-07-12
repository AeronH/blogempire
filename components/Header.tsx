import Link from "next/link"
import Image from 'next/image'
import { Avatar, Button } from "@chakra-ui/react";
import Dropdown from "./Dropdown";

function Header() {

  return (
    <nav className='sticky top-0 w-full bg-slate-50 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        <div className='flex space-x-5'>
          <Link href='/'>
            <img className ='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' />
          </Link>
          <div className='hidden md:inline-flex items-center space-x-4'>
            <Button variant='link' colorScheme='gray'>About</Button>
            <Button variant='link' colorScheme='gray'>Contact</Button>
            <Link href='/browse'>
              <Button  
                variant='outline' 
                colorScheme='gray'
              >Browse</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header