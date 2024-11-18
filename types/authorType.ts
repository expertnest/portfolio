// Define the structure for an author's bio content block
type BioBlock = {
    _key: string;
    _type: "block";
    style: "normal";
    children: {
      _key: string;
      _type: "span";
      marks: string[];
      text: string;
    }[];
  };
  
  export type Author = {
    _id: string; // Sanity document ID
    _type: "author"; // Sanity document type
    name: string; // Author's name
    slug: {
      _type: "slug"; // Sanity slug type
      current: string; // Slug value
    };
    image?: {
      _type: "image"; // Sanity image type
      asset: {
        _ref: string; // Reference to the image asset ID
        _type: "reference"; // Sanity reference type
      };
      hotspot?: {
        x: number; // Horizontal focal point
        y: number; // Vertical focal point
        height: number; // Height of the crop
        width: number; // Width of the crop
      };
    };
    bio: BioBlock[]; // Array of bio content blocks
  };
  