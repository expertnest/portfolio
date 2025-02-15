'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchBlogCards } from '../../sanity/sanity-utils';
import { TITLE_TAILWIND_CLASS } from '@/utils/constants';
import Link from 'next/link';  // Import the Link component

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Fetch blogs data
  useEffect(() => {
    async function fetchData() {
      const blogData = await fetchBlogCards();
      setBlogs(blogData);
    }
    fetchData();
  }, []);

  // Check screen size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Switch to carousel below `md` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Carousel controls
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <h2
        className={`${TITLE_TAILWIND_CLASS} sm:mt-[35px] md:mt-[100px] font-semibold tracking-tight dark:text-white text-gray-900 text-center`}
      >
       Latest Blog Posts
      </h2>
      <p className="max-w-[500px] text-gray-600 dark:text-gray-400 mt-2 mx-auto text-center md:pb-5 md:text-2xl">
       Read my thoughts on web topics!
      </p>

      {isMobile ? (
        // Carousel for mobile
        <div className="relative overflow-hidden md:w-full mt-4 sm:max-w-[370px]">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="w-full min-w-full p-6 flex-shrink-0"
              >
                <div className="border rounded-lg shadow-md overflow-hidden">
                  <Link legacyBehavior href={`/blog/${blog.slug}`}>
                    <a>
                      <Image
                        src={blog.mainImage}
                        alt={blog.altText || 'Blog Image'}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-bold">{blog.title}</h2>
                        <p className="text-sm text-gray-600">
                          By {blog.authorName || 'Unknown'}
                        </p>
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
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
            onClick={prevSlide}
          >
            ←
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
            onClick={nextSlide}
          >
            →
          </button>
        </div>
      ) : (
        // Grid layout for medium and larger screens
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-6 md:pb-12">
          {blogs.map((blog) => (
            <div key={blog._id} className="border rounded-lg shadow-md overflow-hidden">
              <Link legacyBehavior href={`/blog/${blog.slug}`}>
                <a href={`/blog/${blog.slug}`}>
                  <Image
                    src={blog.mainImage}
                    alt={blog.altText || 'Blog Image'}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold">{blog.title}</h2>
                    <p className="text-sm text-gray-600">
                      By {blog.authorName || 'Unknown'}
                    </p>
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
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCards;
