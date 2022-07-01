import { urlFor, sanityClient } from "../../sanity"
import Header from "../../components/Header"
import { GetStaticProps } from 'next'
import { Post } from "../../typings"

interface Props {
  post: Post;
}

function Post({post}: Props) {
  console.log(post);

  return (
    <main className='bg-slate-50'>
      <Header/>
      <section className='max-w-7xl mx-auto p-10 flex'>
        <div className='w-full lg:w-3/4'>
          <div className='flex items-center space-x-4 mb-10'>
            <img className='rounded-full' src={urlFor(post.author.image).width(60).url()!} alt="" />
            <div className=''>
              <h2>{post.author.name}</h2>
              <h2 className='text-slate-500'>{new Date(post._createdAt).toLocaleString()}</h2>
            </div>
          </div>

          <div>
            <div className='ml-10 space-y-5'>
              <h1 className='text-4xl font-bold'>{post.title}</h1>
              <h1>{post.description}</h1>
            </div>

            <img className='mx-auto mt-10' src={urlFor(post.mainImage).width(500).url()!} alt="" />

            <div className='m-10 font-medium text-xl text'>
              {post.body.map(p => (
                <p className='mb-10 indent-16'>{p.children[0].text}</p>
                
              ))}
            </div>
            
          </div>
        </div>


        <div className='hidden lg:inline-block w-1/4'>
          <div className='flex flex-col justify-start'>
            <img className='rounded-full w-32' src={urlFor(post.author.image).url()!} alt="" />
            <h1 className='text-2xl mt-2'>{post.author.name}</h1>
            <h2 className='mt-4 text-slate-500'>{post.author.bio[0].children[0].text}</h2>
            <div className='mt-3 flex flex-col space-y-2'>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit'>Follow</button>
              <button className='rounded-full bg-slate-500 px-3 py-1 w-fit'>Message</button>
            </div>
          </div>

          <div className='mt-10'>
            <h1 className='text-2xl'>More from {post.author.name}:</h1>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = 
    `*[_type == 'post']{
      _id,
      slug,
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
      name,
      image,
      bio
    },
    description,
    mainImage,
    slug, 
    body
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if(!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post,
    }
  }
}