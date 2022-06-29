import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { sanityClient } from '../sanity';
import { Post } from '../typings'
import RecentPost from '../components/RecentPost'
import PopularPost from '../components/PopularPost';
import Link from 'next/link';

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

      <Header />

      <section className='bg-blue-200'>
        <div className=' flex flex-col max-w-7xl mx-auto md:flex-row '>
          <div className='flex-col justify-center h-96 w-full px-12 py-20 space-y-16 md:w-1/2 max-w-xl'>
            <h1 className='font-bold text-6xl font-serif font'>Discover.</h1>
            <h2 className='text-2xl'><span className='underline font-semibold font-serif'>Blog Empire</span> is a place to explore and discover the hot topics of the world.</h2>
          </div>

          <div className='hidden md:flex justify-center items-center w-1/2'>
            Logo
          </div>
        </div>
      </section>

      <section className='p-5 max-w-7xl mx-auto'>
        <div>
          <h2 className='font-semibold text-xl mb-4 font-serif'>Recent Posts:</h2>
        </div>

        <div className=' flex flex-wrap'>
          {posts.map(post => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <RecentPost post={post}/>
              </Link>
              
          ))}
        </div>
      </section>

      <section className='p-5 max-w-7xl mx-auto'>
        <div>
          <h2 className='font-semibold text-xl mb-4 font-serif'>Top of all time:</h2>
        </div>

        <div className='flex flex-col'>
          {posts.map(post => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <PopularPost post={post}/>
            </Link>
          ))}
        </div>
      </section>
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
    image
  },
  description,
  mainImage, 
  publishedAt
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}