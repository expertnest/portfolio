'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { fetchPostBySlug } from '@/sanity/sanity-utils';
import MyPortableText from '@/MyPortableText';
import { Post } from '@/types/postType';
import { urlFor } from '@/sanity/sanity-utils';
import PageWrapper from '@/components/wrapper/page-wrapper';
import { RainbowButton } from "@/components/ui/rainbow-button";

 

type Props = {
  params: {
    slug: string;
  };
};

import { useTheme } from "next-themes";
import React from "react";

const BlogPostPage = ({ params }: Props) => {
  const { slug } = params;
  const [blogPost, setBlogPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme(); // Access the current theme

  useEffect(() => {
    async function fetchBlogPost() {
      const data = await fetchPostBySlug(slug);
      setBlogPost(data);
      setLoading(false);
    }

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600 animate-pulse">Loading...</p>
      </div>
    );

  if (!blogPost)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-600">Post not found</p>
      </div>
    );

  return (
    <PageWrapper>
      <div className="relative min-h-screen">
        <div className="flex flex-col items-center p-2">
          <div className="w-full max-w-5xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <Image
                className="object-cover pt-10"
                src={urlFor(blogPost.mainImage).url() || "/fallback-image.jpg"}
                alt={blogPost.mainImage?.alt || "Default Alt Text"}
                fill
                priority
              />
            </div>
            {/* Content Wrapper */}
            <div className="p-6 sm:p-10">
              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-center"
                style={{
                  color: theme === "dark" ? "white" : "black", // Change color based on theme
                }}
              >
                {blogPost.title}
              </h1>
              {/* Meta Info */}
              <p
                className="text-sm mb-6 text-center"
                style={{
                  color: theme === "dark" ? "white" : "black", // Change color based on theme
                }}
              >
             
             {/*
             
             <span className="font-semibold">
                  {blogPost.author?.name || "Unknown"}
                </span>{" "}
             */}   
           
                {blogPost.publishedAt
                  ? new Date(blogPost.publishedAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown Date"}
              </p>
              {/* Content */}
              <div className="prose max-w-none text-gray-700">
                <MyPortableText value={blogPost.body} />
              </div>
            </div>
          </div>
          <div className="w-full max-w-5xl mb-6">
            <Link href="/">
              <RainbowButton className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <p
                  style={{
                    color: theme === "dark" ? "dark" : "white", // Change color based on theme
                  }}
                >
                  ← Return Home
                </p>
              </RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default BlogPostPage;
