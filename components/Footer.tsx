import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-black text-white px-5 py-8'>
      <div className=' flex flex-col max-w-7xl mx-auto md:flex-row'>
        <div className='flex basis-3/4'>
          <section className='hidden pr-1 sm:inline basis-1/3'>
            <h1 className='text-3xl font-bold mb-4'>Blog Empire</h1>
            <h2 className=''><span className='italic font-semibold'>Blog Empire</span> is a place to explore and discover the hot topics of the world.</h2>
          </section>

          
          <div className='grow'>
            <h2 className='text-xl font-semibold mb-4'>Menu</h2>
            <ul className='space-y-4'>
              <li>
                <Link href='/'>
                  <p className='hover:underline cursor-pointer'>Home</p>
                </Link>
              </li>
              <li>
                <Link href='/aboutus'>
                  <p className='hover:underline cursor-pointer'>About Us</p>
                </Link>
              </li>
              <li>
                <Link href='/contact'>
                  <p className='hover:underline cursor-pointer'>Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className='grow'>
            <h2 className='text-xl font-semibold mb-4'>Categories</h2>
            <ul className='space-y-4'>
              <li>
                <Link href='/categories/tech'>
                  <p className='hover:underline cursor-pointer'>Tech</p>
                </Link>
              </li>
              <li>
                <Link href='/categories/gaming'>
                  <p className='hover:underline cursor-pointer'>Gaming</p>
                </Link>
              </li>
              <li>
                <Link href='/categories/fitness'>
                  <p className='hover:underline cursor-pointer'>Fitness</p>
                </Link>
              </li>
              <li>
                <Link href='/categories'>
                  <p className='hover:underline cursor-pointer'>View All</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className='grow'>
            <h2 className='text-xl font-semibold mb-4'>Socials</h2>
            <ul className='space-y-4'>
              <li>
                <p className='hover:underline cursor-pointer'>Facebook</p>
              </li>
              <li>
                <p className='hover:underline cursor-pointer'>Twitter</p>
              </li>
              <li>
                <p className='hover:underline cursor-pointer'>Instagram</p>
              </li>
            </ul>
          </div>
        </div>

        <section className='items-center flex flex-col p-2 basis-1/4'>
          <div className=''>
            <h2 className='mb-2 text-lg font-semibold'>Newsletter</h2>
            <form action="post" className='space-y-2'>
              <div className='flex space-x-2'>
                <input 
                  className='px-2 py-3 w-1/2'
                  type="text" 
                  placeholder='First Name'/>
                <input 
                  className='px-2 py-3 w-1/2'
                  type="text" 
                  placeholder='Last Name'/>
              </div>
              <input className='px-2 py-3 w-full' type="email" placeholder='Email'/>
              <button className='w-full px-2 py-3 text-black font-semibold bg-slate-500 hover:bg-slate-400'>Subscribe</button>
            </form>
          </div>
        </section>
      </div>
      

    </footer>
  )
}

export default Footer