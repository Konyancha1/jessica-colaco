export type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  href?: string;
  content?: string;
};

export const posts: Post[] = [];