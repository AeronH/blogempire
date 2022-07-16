import React from 'react'
import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Post } from '../../typings'

interface Props {
  posts: [Post];
}

function Category({posts}: Props) {
  
  const router = useRouter();
  const { category } = router.query
  console.log(posts);

  return (
    <div>
      <Header/>
      <main>
        {category}
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
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
      posts
    }
  }
}

