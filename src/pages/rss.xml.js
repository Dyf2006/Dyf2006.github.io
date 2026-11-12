import { getPosts } from '../lib/posts';
import { sections, site } from '../data/site';

export const prerender = true;

const escape = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

export async function GET({ site: origin }) {
  const base = origin?.href ?? 'https://example.com';
  const posts = await getPosts();

  const items = posts
    .map((post) => {
      const url = new URL(`${sections[post.section].href}${post.slug}/`, base).href;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${escape(post.description)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${base}</link>
    <description>${escape(site.description)}</description>
    <language>${site.locale}</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
