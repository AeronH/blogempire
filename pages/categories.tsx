import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Link from 'next/link';

function categories() {
  
  const toCapitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  const categories = ['tech', 'travel', 'music', 'food', 'lifestyle', 'gaming', 'fitness', 'fashion'];
  const categoryImages: any = {
    tech: 'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    travel: 'https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    music: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    food: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    lifestyle: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    gaming: 'https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fitness: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    fashion: 'https://images.pexels.com/photos/975006/pexels-photo-975006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
  return (
    <div>
      <Header />
      <div className='bg-[url(https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] h-72 bg-no-repeat bg-cover bg-center flex items-center justify-center'>
        <h1 className='text-5xl text-white tracking-wider'>Categories</h1>
      </div>
      <section className='max-w-7xl mx-auto my-5 h-fit grid grid-cols-2 gap-3 px-10'>
        {categories.map(category => (
          <Link href={`/categories/${category}`}>
            <div className='flex justify-center items-center relative h-72 overflow-hidden group cursor-pointer'>
              <div style={{backgroundImage: `url(${categoryImages[category]})`}} className='absolute top-0 right-0 z-0 h-full w-full bg-no-repeat bg-cover bg-center transition group-hover:scale-105 duration-200'>
              </div>
              <div className='z-50'>
                <h1 className='text-4xl text-white'>{toCapitalize(category)}</h1>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default categories