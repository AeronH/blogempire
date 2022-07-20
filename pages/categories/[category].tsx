import React from 'react'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Post } from '../../typings'
import { categoryImages } from '../../categoryImages'
import PostCard from '../../components/PostCard'

interface Props {
  posts: [Post];
  category: string;
}

function Category({posts, category}: Props) {
  
  return (
    <div>
      <Header/>
      <main>
        <header style={{backgroundImage: `url(${categoryImages[category]})`}} className='bg-no-repeat bg-cover bg-center h-72 flex justify-center items-center'>
          <h1 className='text-5xl text-white tracking-wider'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
        </header>
        {posts.length ? 
        <section className='grid grid-cols-2 gap-3 p-3 max-w-7xl mx-auto'>
          {posts.map(post => (
            <PostCard post={post} />
          ))}
        </section> 
        : 
        <section className='max-w-7xl mx-auto  flex items-center justify-center h-[340px]'>
          <h1 className='text-3xl text-black tracking-wider'>There are no posts under this category yet...</h1>
        </section>
        }
        
      </main>
      <Footer />
    </div>
  )
}

export default Category

export const getServerSideProps = async (context: any) => {
  const { category } = context.query
  
  const postsRef = collection(db, 'posts');
  const q = query(postsRef, where('categories', 'array-contains', category));
  const postsSnap = await getDocs(q);

  const posts = postsSnap.docs.map(doc => doc.data());

  return {
    props: {
      posts, 
      category
    }
  }
}

