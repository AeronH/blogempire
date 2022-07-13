import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Header from '../components/Header';
import { Input, Textarea, Button, Checkbox, CheckboxGroup, Stack, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { db } from '../firebase'
import { addDoc, collection, doc } from 'firebase/firestore'

function createpost() {

  const {data: session} = useSession();

  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [categories, setCategories] = useState<string[]>([]);
  const [description, setDescription] = useState<string>();
  const [mainImage, setMainImage] = useState<string>();

  const [titleError, setTitleError] = useState<boolean>(false);
  const [bodyError, setBodyError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [mainImageError, setMainImageError] = useState<boolean>(false);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    checkErrors();
    if(title && body && description && mainImage){
      addPostToDatabase();
      resetFields();
    }
  };

  const checkErrors = () => {
    title ? setTitleError(false) : setTitleError(true);
    body ? setBodyError(false) : setBodyError(true);
    description ? setDescriptionError(false) : setDescriptionError(true);
    mainImage ? setMainImageError(false) : setMainImageError(true);
  }

  const resetFields = () => {
    setTitle('');
    setBody('');
    setCategories([]);
    setDescription('');
    setMainImage('');
    setTitleError(false);
    setBodyError(false);
    setMainImageError(false);
    setDescriptionError(false);
  }

  const handleChecked = (e: any): void => {
    e.preventDefault();
    const isChecked = e.target.checked;

    if(isChecked) {
      setCategories([...categories, e.target.value]);
    } else {
      let newCategories = categories.filter(item => {
        return item !== e.target.value;
      });
      setCategories(newCategories); 
    }
  }

  const dbRef: any = collection(db, 'posts');

  const addPostToDatabase = async () => {
    const newData = {
      author: {
        name: session?.user?.name, 
        slug: session?.user?.name?.split(' ').join('-').toLocaleLowerCase(),
        image: session?.user?.image
      },
      body,
      categories: categories,
      description,
      mainImage,
      publishedDate: new Date().toUTCString().slice(5, 16),
      slug: title?.split(' ').join('-').toLocaleLowerCase(),
      title
    };

    await addDoc(dbRef, newData); 
  }

  return (
    <div>
      <Header inCreatePostPage={true}/>
      <section className='max-w-7xl mx-auto p-10'>
        
          <form action="post" className='space-y-5'>
            <div className='space-y-2'>
              <FormControl isRequired isInvalid={titleError}>
                <FormLabel htmlFor="title-input">Title: </FormLabel>
                <Input 
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder='Enter the title'></Input>
                <FormErrorMessage>A title is required</FormErrorMessage>
              </FormControl>
            </div>

            <div className='space-y-2'>
              <FormControl isRequired isInvalid={descriptionError}>
                <FormLabel htmlFor="title-input">Description: </FormLabel>
                <Input 
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder='Enter the description'></Input>
                <FormErrorMessage>A description is required</FormErrorMessage>
              </FormControl>
            </div>

            <div className='space-y-2'>
            <FormControl isRequired isInvalid={mainImageError}>
              <FormLabel htmlFor="title-input">Image: </FormLabel>
              <Input 
                onChange={(e) => setMainImage(e.target.value)}
                value={mainImage}
                placeholder='Enter the image URL'></Input>
              <FormErrorMessage>An image is required</FormErrorMessage>
            </FormControl>
            </div>

            <div className='space-y-2'>
              <FormControl isRequired isInvalid={bodyError}>
                <FormLabel htmlFor="title-input">Body: </FormLabel>
                <Textarea 
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                  placeholder='Enter the body'></Textarea>
                <FormErrorMessage>A body is required</FormErrorMessage>
             </FormControl>
            </div>

            <div className='space-y-2'>
              <FormLabel htmlFor="category-checkbox">Category: </FormLabel>
              <CheckboxGroup colorScheme='blue'>
                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox onChange={handleChecked} value='programming'>Programming</Checkbox>
                  <Checkbox onChange={handleChecked} value='gaming'>Gaming</Checkbox>
                  <Checkbox onChange={handleChecked} value='lifestyle'>Lifestyle</Checkbox>
                  <Checkbox onChange={handleChecked} value='food'>Food</Checkbox>
                  <Checkbox onChange={handleChecked} value='travel'>Travel</Checkbox>
                  <Checkbox onChange={handleChecked} value='fashion'>Fashion</Checkbox>
                  <Checkbox onChange={handleChecked} value='fitness'>Fitness</Checkbox>
                </Stack>
              </CheckboxGroup>
            </div>

            
            <Button onClick={handleSubmit}>Submit</Button>
          </form>
        
      </section>
    </div>
  )
}

export default createpost