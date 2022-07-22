import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Post } from "../../typings"
import Link from 'next/link'
import Head from 'next/head'
import Comments from '../../components/Comments'
import { Avatar } from '@chakra-ui/react'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import SidebarPostCard from '../../components/SidebarPostCard'
import Footer from '../../components/Footer'

interface Props {
  post: Post;
  authorPosts: [Post];
}

function Post({post, authorPosts}: Props) {
  
  if(post) {
    return (
      <main className='bg-slate-100 min-h-screen'>
        <Head>
          <title>{post?.title}</title>
        </Head>
        <Header/>
        
        <section className='max-w-7xl mx-auto p-10 flex'>
          <div className=' px-2 w-full lg:w-3/4 sm:px-10'>

            <div className='flex flex-col items-center pt-10'>
              <div className='space-y-5 flex flex-col items-center'>
                <h1 className='text-4xl'>{post.title}</h1>
                <h1 className='text-xl opacity-70'>{post.description}</h1>
                <Link href={`/author/${post.author.uid}`}>
                  <div className='flex space-x-1 items-center cursor-pointer'>
                    <p>By: </p>
                    <Avatar 
                      src={post.author.image}
                      size='xs'
                      name={post.author.name}/>
                    <p>{post.author.name}</p>
                  </div>
                </Link>
                <h2 className='text-slate-500'>{post.publishedDate}</h2>
              </div>

              {post.mainImage && <div className='flex justify-center h-72 w-full mt-10 px-10 overflow-hidden'>
                                  <img
                                    className='w-full object-contain'
                                    src={post.mainImage}
                                  />
                                </div>}

              <div className='text-xl mt-10'>
                <p className='indent-10'>{post.body}</p>
              </div>
              
            </div>
            <Comments post={post}/>
          </div>

          <div className='hidden lg:inline-block sticky top-32 w-1/4 p-4 h-fit'>
            <div className='flex flex-col justify-start'>
              <img className='h-40 w-40 rounded-full object-cover' src={post.author.image} alt="" />
              <h1 className='text-2xl mt-2'>{post.author.name}</h1>
              <div className='mt-3 flex flex-wrap'>
                <Link href={`/author/${post.author.uid}`}>
                  <button className=' text-slate-800 border border-slate-800 px-3 py-1 w-fit h-fit mt-2 hover:bg-slate-800 hover:text-white transition ease-in-out duration-300'>View Profile</button>
                </Link>
              </div>

              <div className='mt-10'>
                <h1 className='text-xl'>More from {post.author.name}:</h1>
                <div className='h-fit space-y-3 mt-5 p-3'>
                  {authorPosts.map(post => (
                    <SidebarPostCard key={post.id} post={post}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }
}

export default Post

const postsRef = collection(db, 'posts');

export const getStaticPaths = async () => {
  
  const postsSnap = await getDocs(postsRef);

  const paths = postsSnap.docs.map((doc) =>  ({
    params: {
      id: doc.data().id
    }
  }));
  
  return {
    paths,
    fallback: true
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;

  //Get the current post using the slug
  const q = query(postsRef, where('id', '==', id));
  const postSnap = await getDocs(q);
  const post = postSnap.docs.map(doc => doc.data());

  //Get all the posts by the author of the post we got above
  const authorQ = query(postsRef, where('author.uid', '==', post[0].author.uid), where('id', '!=', id));
  const authorPostsSnap = await getDocs(authorQ);
  const authorPosts = authorPostsSnap.docs.map(doc => doc.data());

  if(post.length) {
    return {
      props: {
        post: post[0],
        authorPosts,
      },
      revalidate: 60
    }
  } else {
    return {
      props: {},
      revalidate: 60
    }
    
  }
    
}