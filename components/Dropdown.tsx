import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from  '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { useSession, signOut } from 'next-auth/react'

function Dropdown() {
  const {data: session} = useSession();
  return (
    <Menu>
      <MenuButton>
        <HamburgerIcon w={7} h={7}/>
      </MenuButton>
      <MenuList>
        <MenuItem>{session?.user?.name}</MenuItem>
        <MenuItem>Learn More</MenuItem>
        <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Dropdown