// Define the TypeScript type for a category document
export type Category = {
    _id: string; // Sanity document ID
    _type: "category"; // Sanity document type
    title: string; // Title of the category
    slug: {
      _type: "slug"; // Sanity slug type
      current: string; // Slug value
    };
    description: string; // Description of the category
  };
  