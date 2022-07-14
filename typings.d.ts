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
  publishedDate: string;
  slug: string;
  title: string;
};

export interface Provider {
  callbackUrl: String;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
}

