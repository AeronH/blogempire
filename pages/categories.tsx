import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Link from 'next/link';
import { categoryImages } from '../categoryImages';


function categories() {
  
  const toCapitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  const categories = ['tech', 'travel', 'music', 'food', 'lifestyle', 'gaming', 'fitness', 'fashion'];
  
  return (
    <div>
      <Header />
      <div className='bg-[url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-72 bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <h1 className='text-5xl text-white tracking-wider'>Categories</h1>
      </div>
      <section className=' grid-cols-1 max-w-7xl mx-auto my-5 h-fit grid sm:grid-cols-2 gap-3 px-10'>
        {categories.map(category => (
          <Link href={`/categories/${category}`}>
            <div className='flex justify-center items-center relative h-72 overflow-hidden group cursor-pointer'>
              <div style={{backgroundImage: `url(${categoryImages[category]})`}} className='absolute top-0 right-0 z-0 h-full w-full bg-no-repeat bg-cover bg-center transition group-hover:scale-105 duration-300'></div>
              <h1 className='text-4xl text-white z-10'>{toCapitalize(category)}</h1>              
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default categories