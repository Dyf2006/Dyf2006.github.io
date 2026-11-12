import { getCollection, type CollectionEntry } from 'astro:content';
import { sectionOrder, type SectionId } from '../data/site';

export type AnyEntry = CollectionEntry<SectionId>;

export type Post = {
  section: SectionId;
  slug: string;
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  tags: string[];
  focus?: string;
  entry: AnyEntry;
};

function toPost(section: SectionId, entry: AnyEntry): Post {
  const data = entry.data as Record<string, any>;
  const focus = [data.source ?? data.piece ?? data.topic, data.stage].filter(Boolean).join(' · ');
  return {
    section,
    slug: entry.id,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    tags: data.tags ?? [],
    focus: focus || undefined,
    entry,
  };
}

export async function getPosts(section?: SectionId): Promise<Post[]> {
  const ids = section ? [section] : sectionOrder;
  const groups = await Promise.all(
    ids.map(async (id) => (await getCollection(id, (e) => !e.data.draft)).map((entry) => toPost(id, entry as AnyEntry))),
  );
  return groups.flat().sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function formatDate(date: Date): string {
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月 ${date.getDate()} 日`;
}
