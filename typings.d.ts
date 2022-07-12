export interface Post {
  author: string;
  body: string;
  categories: string[];
  description: string;
  id: string;
  mainImage: string;
  publishedDate: {
    nanoseconds: number;
    seconds: number;
  };
  slug: string;
  title: string
};

export interface Author {
  _id: string;
  _createdAt: string;
  name: string;
  image: string;
  bio: [{
    children: [{
      text: string;
    }]
  }]
  slug:{
    current: string;
  };
}

