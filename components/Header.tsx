import Link from "next/link"

function Header() {
  return (
    <nav className='sticky top-0 w-full bg-slate-50 shadow-lg overflow-hidden z-50'>
      <div className='max-w-7xl mx-auto p-4 flex justify-between items-center'>
        <div className='flex space-x-5'>
          <Link href='/'>
            <img className ='w-44 object-contain cursor-pointer' src='https://links.papareact.com/yvf' />
          </Link>
          <div className='hidden md:inline-flex items-center space-x-4'>
            <h3 className='cursor-pointer'>About</h3>
            <h3 className='cursor-pointer'>Contact</h3>
            <h3 className='text-white bg-blue-400 px-4 py-1 rounded-full cursor-pointer hover:bg-blue-600 active:text-gray-100'>Browse</h3>
          </div>
        </div>

        {/* <div className="hidden md:w-1/5 md:inline-flex lg:inline-flex lg:w-1/3">
          <input className='border rounded-full px-5 py-1 w-full' type="text" placeholder='search'/>
        </div> */}

        <div className='flex items-center space-x-4 text-blue-400 '>
          <h3 className='cursor-pointer hover:text-blue-600'>Sign In</h3>
          <h3 className='border px-4 py-1 rounded-full border-blue-400 cursor-pointer hover:border-blue-600 hover:text-blue-600 active:bg-gray-100'>Get Started</h3>
        </div>
      </div>
    </nav>
  )
}

export default Header