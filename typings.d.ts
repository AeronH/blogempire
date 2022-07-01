export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
    bio: [{
      children: [{
        text: string;
      }]
    }]
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [{
    children: [{
      text: string;
    }]
  }]
};

