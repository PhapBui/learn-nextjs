export interface Work {
  id: string | number;
  title: string;
  tagList?: string[];
  shortDescription?: string;
  thumbnailUrl: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
