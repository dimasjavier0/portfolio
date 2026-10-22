import { handleChat } from './chat'

// Worker entry: /api/* runs here first (see run_worker_first in wrangler.toml);
// everything else is served from the static assets built into dist/.

interface Env {
  AI: Ai
  ASSETS: Fetcher
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    if (pathname === '/api/chat') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } })
      }
      return handleChat(request, env)
    }
    if (pathname.startsWith('/api/')) return Response.json({ error: 'Not found' }, { status: 404 })
    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
