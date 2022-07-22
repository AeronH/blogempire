import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Post } from '../../typings'
import Head from 'next/head'
import { db } from '../../firebase'
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore'
import Footer from '../../components/Footer'
import PostCard from '../../components/PostCard'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'

interface Props {
  posts: [Post];
}

function Author({posts}: Props) {

  const {data: session} = useSession();
  const [authorsPosts, setAuthorsPosts] = useState<Post[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null | undefined>('')

  const deletePost = async (e: any, post: Post) => {
    e.preventDefault();
    await deleteDoc(doc(db, 'posts', post.id));

    setAuthorsPosts(current => 
      current.filter(authorsPost => {
        return authorsPost !== post;
      }));
  }

  useEffect(() => {
    setCurrentUser(session?.user?.name);
    setAuthorsPosts(posts)
  }, [session])

  return (
    <div className="bg-slate-100">
      <Head>
        <title>{currentUser}</title>
      </Head>
      <Header />
      <section className='min-h-screen'>

        <div className='p-6 space-y-4 flex items-center justify-center h-72 bg-[url(https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat bg-cover bg-center'>
          <h1 className='text-5xl text-white'>{posts[0].author.name}</h1>
        </div>

        <div className='max-w-7xl mx-auto mt-12 p-6'>  
                   
            {(session?.uid === posts[0].author.uid) ? 
              <div>
                <h1 className='text-2xl mb-4'>Your posts:</h1>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {authorsPosts.map(post => (
                  <PostCard post={post}
                            allowDelete={true}
                            deletePost={deletePost}/>
                  ))}
                </div>
              </div>
              :
              <div>
                <h1 className='text-2xl mb-4'>{posts[0].author.name}'s posts: </h1>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-3'>
                  {authorsPosts.map(post => (
                  <PostCard post={post}/>
                  ))}
                </div>
              </div>
            }
                      
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Author

const postsRef = collection(db, 'posts');


export const getStaticPaths = async () => {
  
  const postsSnap = await getDocs(postsRef);

  const paths = postsSnap.docs.map((doc) => ({
    params: {
      uid: doc.data().author.uid
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { uid }: any = context.params;

  const q = query(postsRef, where('author.uid', '==', uid));
  const snap = await getDocs(q);
  const posts = snap.docs.map((doc) => {
    return {...doc.data(), id: doc.id};
  })

  if(!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts,
      revalidate: 60
    }
  }
}