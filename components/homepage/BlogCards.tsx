'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchBlogCards } from '../../sanity/sanity-utils';

type BlogCard = {
  _id: string;
  title: string;
  slug: string;
  mainImage: string;
  altText?: string;
  authorName?: string;
  publishedAt: string;
  categories: { title: string; slug: string }[];
};

const BlogCards = () => {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await fetchBlogCards();
      setBlogs(blogData);
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogs.map((blog) => (
        <div key={blog._id} className="border rounded-lg shadow-md overflow-hidden">
          <Image
            src={blog.mainImage}
            alt={blog.altText || 'Blog Image'}
            width={400}
            height={250}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-600">By {blog.authorName || 'Unknown'}</p>
            <p className="text-sm text-gray-500">
              Published: {new Date(blog.publishedAt).toLocaleDateString()}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {blog.categories.map((category) => (
                <span
                  key={category.slug}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
