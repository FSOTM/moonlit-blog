import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  return posts.sort(
    (left, right) => right.data.published.valueOf() - left.data.published.valueOf(),
  );
}

export function getPostPath(post: Post) {
  return `posts/${post.id}/`;
}

export function getReadingTime(body = '') {
  const hanCharacters = (body.match(/[\u3400-\u9fff]/g) ?? []).length;
  const latinWords = (body.replace(/[\u3400-\u9fff]/g, ' ').match(/[\p{L}\p{N}_-]+/gu) ?? [])
    .length;
  const minutes = Math.max(1, Math.ceil(hanCharacters / 400 + latinWords / 220));

  return `${minutes} 分钟`;
}

export function getAllTags(posts: Post[]) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => left.name.localeCompare(right.name, 'zh-CN'));
}
