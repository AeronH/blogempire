import Link from "next/link"

function Header() {
  return (
    <header className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
      <div className='flex space-x-5'>
        <Link href='/'>
          <img className ='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-4'>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className='text-white bg-blue-400 px-4 py-1 rounded-full'>Browse</h3>
        </div>
      </div>

      <div className="hidden md:w-1/5 md:inline-flex lg:inline-flex lg:w-1/3">
        <input className='border rounded-full px-5 py-1 w-full' type="text" placeholder='search'/>
      </div>

      <div className='flex items-center space-x-4 text-blue-400'>
        <h3>Sign In</h3>
        <h3 className='border px-4 py-1 rounded-full border-blue-400'>Get Started</h3>
      </div>
    </header>
  )
}

export default Header