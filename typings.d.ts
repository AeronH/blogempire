import { StringLike } from "@firebase/util";

export interface Post {
  author: {
    name: string;
    slug: string,
    image: string;
  }
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

export interface Provider {
  callbackUrl: String;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

