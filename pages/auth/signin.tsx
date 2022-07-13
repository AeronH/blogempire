import React from 'react'
import{ getProviders, signIn as signIntoProvider } from 'next-auth/react'
import {Provider} from '../../typings'

interface Props {
  providers: [Provider]
}

function signin({providers}: Props) {
  
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function  getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  }
}

export default signin