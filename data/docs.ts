export interface TableOfContentsEntry {
  slug: string;
  title: string;
  category?: string;
  href: string;
  file: string;
}

export interface TableOfContentsCategory {
  title: string;
  href: string;
  entries: TableOfContentsCategoryEntry[];
}

export interface TableOfContentsCategoryEntry {
  title: string;
  href: string;
}

export const TABLE_OF_CONTENTS: Record<string, TableOfContentsEntry> = {};
export const CATEGORIES: TableOfContentsCategory[] = [];
