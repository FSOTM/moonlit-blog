import type { APIRoute } from 'astro';
import { sitePath } from '../lib/urls';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(sitePath('sitemap-index.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`);
};
