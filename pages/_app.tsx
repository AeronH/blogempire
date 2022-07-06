import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { NextComponentType  } from 'next' //Import Component type


type CustomAppProps = AppProps & {
  Component: NextComponentType & {auth?: boolean} // add auth type
}

function MyApp({ Component, pageProps: {session, ...pageProps} }: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
