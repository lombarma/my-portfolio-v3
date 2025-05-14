export interface Card {
  title: string;
  description: string;
  tags: string[];
  picture?: Picture;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Picture {
  path: string;
  altDescrption: string;
}
