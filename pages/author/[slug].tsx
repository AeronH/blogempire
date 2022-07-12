import { urlFor, sanityClient } from "../../sanity"
import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Author, Post } from '../../typings'
import Head from 'next/head'

interface Props {
  author: Author;
  posts: Post;
}

function Author({author, posts}: Props) {
  console.log(posts);
  return (
    <main>
      <Head>
        <title>{author.name}</title>
      </Head>
      <Header />
      <section className='max-w-7xl mx-auto'>

        <div className='p-6 mt-8 space-y-4'>
          <img className='rounded-full h-64 w-64 object-cover' src={urlFor(author.image).width(400).url()!} alt="" />
          <h1 className='text-3xl'>- {author.name} -</h1>
          <h2 className='text-gray-600 text-lg'>{author.bio[0].children[0].text}</h2>
        </div>

        <div className='w-full flex mt-12 p-6'>
          <div className='w-1/2 flex flex-col'>
            <h1>Recent Posts</h1>
            <div>

            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <h1>Top Posts</h1>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Author


export const getStaticPaths = async () => {
  const query = 
    `*[_type == 'author']{
      _id,
      slug,
    }`;

  const authors = await sanityClient.fetch(query);

  const paths = authors.map((author: Author) => ({
    params: {
      slug: author.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const authorQuery = `*[_type == 'author' && slug.current == $slug][0]{
    name,
    slug,
    image,
    bio,
  }`

  const postsQuery = `*[_type == 'post' && slug.current == $slug][0]{
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
  }`

  const author = await sanityClient.fetch(authorQuery, {
    slug: params?.slug,
  });

  const posts = await sanityClient.fetch(postsQuery, {
    slug: params?.slug,
  })

  if(!author) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      author,
      posts
    }
  }
}