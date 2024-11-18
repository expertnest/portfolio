// Define the structure for the Post type
export type Post = {
    _id: string; // Sanity document ID
    _type: "post"; // Sanity document type
    title: string; // Post title
    slug: {
      _type: "slug"; // Sanity slug type
      current: string; // Slug value
    };
    author: {
      _type: "reference"; // Sanity reference type
      _ref: string; // Reference to an author document ID
    };
    mainImage?: {
      _type: "image"; // Sanity image type
      asset: {
        _ref: string; // Reference to the image asset ID
        _type: "reference"; // Sanity reference type
      };
      alt?: string; // Alternative text for the image
      hotspot?: {
        x: number; // Horizontal focal point
        y: number; // Vertical focal point
        height: number; // Height of the crop
        width: number; // Width of the crop
      };
    };
    categories: {
      _type: "reference"; // Sanity reference type
      _ref: string; // Reference to a category document ID
    }[];
    publishedAt?: string; // ISO 8601 datetime string
    body: any; // Content type for the body, assumes a custom block content schema
  };
  