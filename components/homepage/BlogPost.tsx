'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchSingleBlogPost } from '../../sanity/sanity-utils';
import MyPortableText from '@/MyPortableText';

// Define a more specific type for the body
type PortableTextBlock = {
  _key: string;
  _type: string;
  children: { text: string; marks: string[] }[];  // Adjust according to your actual data structure
};

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  mainImage: { url: string; alt: string | null };
  author: { name: string; image?: string };
  publishedAt: string;
  categories: { title: string; slug: string }[];
  body: PortableTextBlock[];  // Use PortableTextBlock[] here instead of any[]
};

type Props = {
  params: {
    slug: string;
  };
};

const BlogPostPage = ({ params }: Props) => {
  const { slug } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    async function fetchBlogData() {
      const blogData = await fetchSingleBlogPost(slug);
      setBlog(blogData);
    }

    if (slug) {
      fetchBlogData();
    }
  }, [slug]);

  return (
    <div className="p-6">
      {blog ? (
        <>
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            <p className="text-sm text-gray-500">By {blog.author.name}</p>
            <p className="text-sm text-gray-500">
              Published: {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
          </div>
          <Image
            src={blog.mainImage.url}
            alt={blog.mainImage.alt || 'Blog Main Image'}
            width={800}
            height={500}
            className="w-full rounded-md"
          />
          <div className="mt-6">
            <MyPortableText value={blog.body} />  {/* Ensure MyPortableText can handle PortableTextBlock[] */}
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-bold">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {blog.categories.map((category) => (
                <span
                  key={category.slug}
                  className="bg-green-100 text-green-600 text-sm font-medium px-2 py-1 rounded"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading blog post...</p>
      )}
    </div>
  );
};

export default BlogPostPage;
