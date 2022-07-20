import { StringLike } from "@firebase/util";

export interface Post {
  author: {
    name: string;
    slug: string,
    image: string;
    uid: number;
  }
  body: string;
  categories: string[];
  description: string;
  mainImage: string;
  publishedDate: string;
  id: string;
  slug: string;
  title: string;
  comments: string[];
};

export interface Provider {
  callbackUrl: String;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

export interface Comment {
  author: string;
  publishedDate: string;
  body: string;
}



