import React from 'react'
import Header from '../components/Header'
import { EmailIcon, QuestionOutlineIcon, StarIcon } from '@chakra-ui/icons'
import Footer from '../components/Footer'
import Link from 'next/link'

function aboutus() {
  return (
    <main className='scroll-smooth'>
      <Header />
      <header className='flex justify-center items-center bg-[url(https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-no-repeat bg-cover bg-center h-72'>
        <h1 className='text-5xl text-white tracking-wider'>About Us</h1>
      </header>
      {/* <nav className='flex justify-center items-center h-20 bg-slate-600'>
        <ul className='flex space-x-20'>
          <li>  
            <a href="#who-we-are" className='text-white font-semibold text-lg flex flex-col items-center'>
              <QuestionOutlineIcon h={5} w={5} color='white'/>
              <p>Who we are</p>
            </a>
          </li>
          <li>  
            <a href="" className='text-white font-semibold text-lg flex flex-col items-center'>
              <StarIcon h={5} w={5} color='white'/>
              <p>What we do</p>
            </a>
          </li>
          <li>  
            <a href="" className='text-white font-semibold text-lg flex flex-col items-center'>
              <EmailIcon h={5} w={5} color='white'/>
              <p>Contact us</p>
            </a>
          </li>
        </ul>
      </nav> */}


      <section className='max-w-7xl mx-auto space-y-10 my-10'>
        <div className='py-[75px] px-[60px] flex bg-[url(https://images.pexels.com/photos/409127/pexels-photo-409127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center h-fit'>
          <div className='bg-white h-full w-full sm:w-1/2 p-10 flex flex-col justify-center space-y-4 leading-5'>
            <h1 className='text-3xl'>Who we are</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Massa tempor nec feugiat nisl. Nam libero justo laoreet sit amet cursus sit amet. At elementum eu facilisis sed odio morbi quis. 
               
              
            </p>
            <p>
              Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. 
              Pretium quam vulputate dignissim suspendisse in est ante. Nisi porta lorem mollis aliquam ut porttitor leo a.  
              
            </p>
          </div>
        </div>

        <div className='py-[75px] px-[60px] flex justify-end bg-[url(https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center h-fit'>
          <div className='bg-white h-full w-full sm:w-1/2 p-10 flex flex-col justify-center space-y-4 leading-5'>
            <h1 className='text-3xl'>What we do</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Tortor consequat id porta nibh venenatis cras sed felis eget. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus.   
            </p>
            <p>
              Consectetur adipiscing elit ut aliquam purus sit amet luctus. Nisi quis eleifend quam adipiscing vitae proin. 
              Fringilla phasellus faucibus scelerisque eleifend donec pretium. In hac habitasse platea dictumst quisque sagittis purus. 
              
            </p>
          </div>
        </div>

        <div className='py-[75px] px-[60px] flex bg-[url(https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center h-fit'>
          <div className='bg-white h-full w-full sm:w-1/2 p-10 flex flex-col justify-center items-start space-y-4 leading-5'>
            <h1 className='text-3xl'>Contact Us</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra et ultrices neque ornare. Vitae tortor condimentum lacinia quis vel eros donec ac odio.  
            </p>
            <Link href='/contact'>
              <button className='border border-black px-6 py-3 hover:bg-black hover:text-white transition ease-in-out duration-300'>Get in touch!</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default aboutus