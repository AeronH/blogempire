import { urlFor, sanityClient } from "../../sanity"
import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Post } from "../../typings"
import Link from 'next/link'
import Image from 'next/image'
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
  // const date = new Date(post.publishedDate);

  return (
    <main className='bg-slate-50'>
      {/* <Head>
        <title>{post.title}</title>
      </Head>
      <Header/>
      <section className='max-w-7xl mx-auto p-10 flex'>
        <div className='w-full lg:w-3/4'>
        <Link href={`/author/${post.id}`}>
          <div className='flex items-center space-x-4 mb-10 cursor-pointer'>
            <Avatar 
              src={post.author[2]}
              size='lg'
              name={post.author[0]}/>
            <div className=''>
              <h2>{post.author[0]}}</h2>
              <h2 className='text-slate-500'>{date}</h2>
            </div>
          </div>
        </Link>

          <div>
            <div className='ml-10 space-y-5'>
              <h1 className='text-4xl font-extrabold'>{post.title}</h1>
              <h1 className='text-xl'>{post.description}</h1>
            </div>

            <img className='mx-auto mt-10' src={urlFor(post.mainImage).width(500).url()!} alt="" />
            <div className='w-full h-80 relative mx-auto mt-10 px-10'>
              <Image
                className='object-center object-contain'
                src={urlFor(post.mainImage).url()!}
                layout='fill'
                priority
              />
            </div>

            <div className='m-10 font-medium text-2xl leading-10'>
              {post.body}
            </div>
            
          </div>
          <Comments />
        </div>


        <div className='hidden lg:inline-block sticky top-32 w-1/4 p-4 h-fit'>
          <div className='flex flex-col justify-start'>
            <img className='h-48 w-48 rounded-full object-cover' src={urlFor(post.author.image).width(400).url()!} alt="" />
            <h1 className='text-2xl mt-2'>{post.author[0]}</h1>
            <h2 className='mt-4 text-slate-500'>{post.author.bio[0].children[0].text}</h2>
            <div className='mt-3 flex flex-wrap'>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit mr-2 hover:bg-slate-600 text-slate-50'>Follow</button>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit hover:bg-slate-600 text-slate-50'>Message</button>
              <Link href={`/author/${post.author.slug.current}`}>
                <button className='rounded-full bg-slate-500 px-3 py-1 w-fit h-fit mt-2 hover:bg-slate-600 text-slate-50'>View Profile</button>
              </Link>
            </div>

            <div className='mt-10'>
              <h1 className='text-2xl'>More from {post.author[0]}:</h1>
            </div>
          </div>

          
        </div>
      </section> */}
    </main>
  )
}

export default Post

const postsRef = collection(db, 'posts');

export const getStaticPaths = async () => {
  
  const postsSnap = await getDocs(postsRef);

  const paths = postsSnap.docs.map((doc) =>  ({
    params: {
      id: doc.id
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const q = query(postsRef, where('id', '==', params?.id));
  console.log(q);
  

  const postSnap = await getDocs(q);

  const post = postSnap.docs.map((doc) =>  {
    return {...doc.data(), id: doc.id};
  })


  // const query = `*[_type == 'post' && slug.current == $slug][0]{
  //   _id,
  //   _createdAt,
  //   title,
  //   author-> {
  //     name,
  //     image,
  //     bio,
  //     slug
  //   },
  //   description,
  //   mainImage,
  //   slug, 
  //   body
  // }`

  // const post = await sanityClient.fetch(query, {
  //   slug: params?.slug,
  // });

  if(!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: JSON.parse(JSON.stringify(post[0]))
    }
  }
}