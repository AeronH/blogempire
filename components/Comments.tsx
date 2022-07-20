import React, { useState, useEffect } from 'react'
import { Textarea } from '@chakra-ui/react'
import { Comment, Post } from '../typings'
import CommentCard from '../components/CommentCard'
import { useSession } from'next-auth/react'
import { arrayUnion, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

interface Props {
  post: Post
}

function Comments({post}: Props) {

  const {data: session} = useSession();

  const [newComment, setNewComment] = useState<string>('');
  const [currentComments, setCurrentComments] = useState<any>([]);

  //Gets all the comments on the post and set them to the currentComments state on page load.
  useEffect(() => {
    const getComments = async () => {
      const commentSnap = await getDoc(doc(db, 'posts', post.id));
      const postSnap = commentSnap.data()
      const comments = postSnap?.comments;
      setCurrentComments(comments);
      
    }
    getComments();
  }, [post])

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addComment();
    setNewComment('');
  }

  const addComment = async () => {
    const addedComment = {
      author: session?.user?.name,
      publishedDate: new Date().toUTCString().slice(5, 16),
      body: newComment
    }
    
    const commentRef = doc(db, 'posts', post.id);

    await updateDoc(commentRef, {comments: arrayUnion(addedComment)});
    setCurrentComments((comments: [Comment]) => [...comments, addedComment]);
  }

  return (
    <div className='mt-10 border-t-2 pt-4'>
      <h1 className='text-2xl underline'>Comments: </h1>
      <div className='mt-10'>
        {currentComments.length ? 
          <div className='flex flex-col space-y-5'>
            {currentComments.map((comment: Comment) => (
              <CommentCard comment={comment}/>
            ))}
          </div>
          :
          <h1>There are no comments for this post</h1>
        }
      </div>
      {session && 
        <form action="post" className='flex flex-col items-start'>
        <Textarea 
          className='mt-8' 
          placeholder='Enter Comment' 
          size='lg'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        
        <button onClick={handleSubmit} className='border border-slate-800 px-5 py-3 mt-5 hover:bg-slate-800 hover:text-white transition duration-300 ease-in-out active:bg-slate-900'>Submit</button>
      </form>
      }
      
    </div>
  )
}

export default Comments