import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function contact() {
  return (
    <div>
      <Header/>
      <header className='bg-[url(https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center h-72 flex justify-center items-center'>
        <h1 className='text-5xl text-white tracking-wider'>Contact Us</h1>
      </header>
      <main className='max-w-7xl mx-auto flex flex-col items-center mb-10'>
        <div className='flex flex-col items-center space-y-5 pt-10'>
          <h2 className='text-3xl'>Get In Touch</h2>
          <p className='text-center w-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <form action="" className='grid grid-cols-1 grid-rows-7 sm:grid-cols-2 sm:grid-rows-5 p-8 gap-x-8 gap-y-6 w-full max-w-5xl'>
          <input type="text" className='px-2 py-3 border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-slate-500' placeholder='First Name'/>
          <input type="text" className='px-2 py-3 border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-slate-500' placeholder='Last Name'/>
          <input type="text" className='px-2 py-3 border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-slate-500' placeholder='Email'/>
          <input type="text" className='px-2 py-3 border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-slate-500' placeholder='Phone Number'/>
          <textarea className='col-span-1 sm:col-span-2 row-span-2 px-2 py-3 border border-slate-300 hover:border-slate-500 focus:outline-none focus:border-slate-500' placeholder='Enter your message here...'/>
          <button className='col-span-1 h-full py-3 sm:col-span-2 text-black bg-slate-500 hover:bg-slate-400'>Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default contact