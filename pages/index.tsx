import Head from 'next/head'
import Header from '../components/Header'
import { Post } from '../typings'
import PostCard from '../components/PostCard';
import Footer from '../components/Footer'
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase'

interface Props {
  posts: [Post];
}

export default function Home({posts}: Props) {
  
  console.log(posts);
  
  return (
    <div className="bg-slate-100">
      <Head>
        <title>Blog Empire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <section className='bg-[url("https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-no-repeat bg-cover bg-center'>
        <div className=' flex justify-start max-w-7xl mx-auto'>
          <div className='flex-col justify-center h-96 lg:h-backgroundHeightLg w-full px-10 py-20 space-y-16 md:w-1/2 max-w-xl'>
            <h1 className='font-extrabold font-serif text-6xl'>Discover.</h1>
            <h2 className='text-2xl font-serif'><span className='underline font-semibold italic'>Blog Empire</span> is a place to explore and discover the hot topics of the world.</h2>
          </div>
        </div>
      </section>

      <section className=''>

        <div className='px-5 max-w-7xl mx-auto py-10'>
          <div>
            <h2 className='font-extrabold font-serif text-3xl mb-4'>Recent Posts: </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {posts.map(post => (           
                <PostCard post={post}/>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


const postsRef = collection(db, 'posts');

export const getServerSideProps = async () => {
  const postsSnap = await getDocs(postsRef);

  const posts = postsSnap.docs.map((doc) =>  doc.data());
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}