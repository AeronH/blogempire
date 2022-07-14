import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Post } from "../../typings"
import Link from 'next/link'
import Head from 'next/head'
import Comments from '../../components/Comments'
import { Avatar } from '@chakra-ui/react'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

interface Props {
  post: Post;
}

function Post({post}: Props) {
  console.log(post);

  return (
    <main className='bg-slate-50'>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Header/>
      <section className='max-w-7xl mx-auto p-10 flex'>
        <div className='w-full lg:w-3/4 px-10'>
          <Link href={`/author/${post.author.slug}`}>
            <div className='flex items-center space-x-4 mb-10 cursor-pointer'>
              <Avatar 
                src={post.author.image}
                size='lg'
                name={post.author.name}/>
              <div className=''>
                <h2>{post.author.name}</h2>
                <h2 className='text-slate-500'>{post.publishedDate}</h2>
              </div>
            </div>
          </Link>

          <div className=''>
            <div className='space-y-5'>
              <h1 className='text-4xl font-extrabold'>{post.title}</h1>
              <h1 className='text-xl opacity-70'>{post.description}</h1>
            </div>

            {post.mainImage && <div className='flex justify-center h-72 w-full mt-10 px-10 overflow-hidden'>
              <img
                className='h-full object-center object-contain'
                src={post.mainImage}
              />
            </div>}

            <div className='font-small text-2xl mt-10'>
              <p className='indent-10'>{post.body}</p>
            </div>
            
          </div>
          <Comments />
        </div>


        <div className='hidden lg:inline-block sticky top-32 w-1/4 p-4 h-fit'>
          <div className='flex flex-col justify-start'>
            <img className='h-48 w-48 rounded-full object-cover' src={post.author.image} alt="" />
            <h1 className='text-2xl mt-2'>{post.author.name}</h1>
            {/* <h2 className='mt-4 text-slate-500'>{post.author.bio[0].children[0].text}</h2> */}
            <div className='mt-3 flex flex-wrap'>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit mr-2 hover:bg-slate-600 text-slate-50'>Follow</button>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit hover:bg-slate-600 text-slate-50'>Message</button>
              <Link href={`/author/${post.author.slug}`}>
                <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit mt-2 hover:bg-slate-600 text-slate-50'>View Profile</button>
              </Link>
            </div>

            <div className='mt-10'>
              <h1 className='text-2xl'>More from {post.author.name}:</h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Post

const postsRef = collection(db, 'posts');

export const getStaticPaths = async () => {
  
  const postsSnap = await getDocs(postsRef);

  const paths = postsSnap.docs.map((doc) =>  ({
    params: {
      slug: doc.data().slug
    }
  }));
  
  return {
    paths,
    fallback: true
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug }: any = context.params;
  const q = query(postsRef, where('slug', '==', slug));
  
  const postSnap = await getDocs(q);

  let post = postSnap.docs.map(doc => doc.data());

  if(post.length) {
    return {
      props: {
        post: post[0]
      }
    }
  } else {
    return {
      props: {}
    }
  }
    
}