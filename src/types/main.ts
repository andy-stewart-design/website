export interface Frontmatter {
  title: string;
  date: string;
  summary: string;
  image?: string;
  tags?: string[];
}

export interface Post extends Frontmatter {
  slug: string;
}

export interface Snippet {
  title: string;
  summary: string;
  framework: string;
  slug: string;
}
