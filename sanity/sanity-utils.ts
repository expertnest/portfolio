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
    } | order(publishedAt desc)`
  );
}

// Fetch a single blog post by slug
export async function fetchSingleBlogPost(slug: string): Promise<{
  _id: string;
  title: string;
  slug: string;
  mainImage: { url: string; alt: string | null };
  author: { name: string; image?: string };
  publishedAt: string;
  categories: { title: string; slug: string }[];
  body: any[]; // Define your block content type for better type safety
} | null> {
  const blog = await client.fetch(
    groq`
      *[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "mainImage": {
          "url": mainImage.asset->url,
          alt
        },
        "author": {
          name: author->name,
          "image": author->image.asset->url
        },
        publishedAt,
        categories[]->{
          title,
          "slug": slug.current
        },
        body[]{
          ...,
          markDefs[]{
            ...,
            _type == "link" => {
              "href": @.href,
              "text": children[0].text
            }
          }
        }
      }`,
    { slug }
  );

  return blog || null;
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
