import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from  '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'

function Dropdown() {
  const {data: session} = useSession();
  return (
    <Menu>
      <MenuButton>
        <HamburgerIcon w={7} h={7}/>
      </MenuButton>
      <MenuList>
        <Link href={`/author/${session?.uid}`}>
          <MenuItem>{session?.user?.name}</MenuItem>
        </Link>
        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Dropdown