import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPostPath, getPublishedPosts } from '../lib/posts';
import { sitePath } from '../lib/urls';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site!,
    customData: `<language>${SITE.language}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: sitePath(getPostPath(post)),
      categories: post.data.tags,
    })),
  });
}
