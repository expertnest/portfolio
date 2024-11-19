import { Author } from "@/types/authorType"; // Ensure your types are imported correctly
import { Post } from "@/types/postType";
import { Category } from "@/types/categoryType";
import {  groq } from "next-sanity";
import { client } from "@/sanity/lib/client"
import createImageUrlBuilder from "@sanity/image-url";

// Sanity configuration
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "default-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "default-dataset";



const imageUrlBuilder = createImageUrlBuilder({ projectId, dataset });
export const urlFor = (source: any) => imageUrlBuilder.image(source);

// Fetch a list of blogs for cards
export async function fetchBlogCards(): Promise<
  {
    _id: string;
    title: string;
    slug: string;
    mainImage: string;
    altText?: string;
    authorName?: string;
    publishedAt: string;
    categories: { title: string; slug: string }[];
  }[]
> {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      "altText": mainImage.alt,
      "authorName": author->name,
      publishedAt,
      categories[]->{
        title,
        "slug": slug.current
      }
    } | order(publishedAt asc)[0...3]`
    
  );
}



// Fetch a single blog post by slug
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "authorName": author->name,
      "categories": categories[]->title,
      "mainImage": mainImage.asset->url,
      body,
      publishedAt
    }`,
    { slug }
  );
}

// Fetch all categories (optional utility function)
export async function fetchCategories(): Promise<Category[]> {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      title,
      "slug": slug.current
    }`
  );
}
