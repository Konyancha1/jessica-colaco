import { sanityClient } from "./sanity";
import { galleryQuery } from "./queries";

export type GalleryItem = {
  _id: string;
  label: string;
  type: string;
  wide?: boolean;
  order: number;
  image?: {
    asset?: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
};

export async function getGallery(): Promise<GalleryItem[]> {
  return sanityClient.fetch<GalleryItem[]>(galleryQuery);
}