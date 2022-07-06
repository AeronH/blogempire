import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient } from '../sanity';
import { Post } from '../typings'
import RecentPost from '../components/RecentPost'
import PopularPost from '../components/PopularPost';
import Footer from '../components/Footer'
import Image from 'next/image'
import Logo from '../public/95ffeb53ee4b454ab99a87bf789ff5fc.png'

interface Props {
  posts: [Post];
}

export default function Home({posts}: Props) {

  console.log(posts);
  return (
    <div className="bg-slate-50">
      <Head>
        <title>Blog Empire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <section className='bg-gradient-to-r from-blue-800 to-cyan-400'>
        <div className=' flex flex-col max-w-7xl mx-auto md:flex-row '>
          <div className='flex-col justify-center h-96 w-full px-12 py-20 space-y-16 md:w-1/2 max-w-xl'>
            <h1 className='font-extrabold text-6xl'>Discover.</h1>
            <h2 className='text-2xl'><span className='underline font-semibold font-serif'>Blog Empire</span> is a place to explore and discover the hot topics of the world.</h2>
          </div>

          <div className='hidden md:flex justify-center items-center w-1/2'>
            <Image 
              src={Logo}
              height={200}
              width={200}/>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='p-5 max-w-7xl mx-auto'>
          <div>
            <h2 className='font-extrabold text-3xl mb-4'>Recent Posts:</h2>
          </div>

          <div className=' flex flex-wrap'>
            {posts.map(post => (            
                  <RecentPost post={post}/>  
            ))}
          </div>
        </div>

        <div className='p-5 max-w-7xl mx-auto'>
          <div>
            <h2 className='font-extrabold text-3xl mb-4'>Top of all time:</h2>
          </div>

          <div className='flex flex-col'>
            {posts.map(post => (           
                <PopularPost post={post}/>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    slug,
    author -> {
    name, 
    image,
    bio,
    slug
  },
  description,
  mainImage, 
  publishedAt,
  body
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}