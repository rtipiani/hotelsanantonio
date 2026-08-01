import type { APIRoute } from 'astro';
import { kv } from '@vercel/kv';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { roomId, roomName, lang } = body;

    if (!roomId || !roomName) {
      return new Response(JSON.stringify({ error: 'Missing room data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const today = new Date().toISOString().split('T')[0];
    const month = today.substring(0, 7);

    // Fallback for local development if KV env vars are not set
    if (!import.meta.env.KV_REST_API_URL || !import.meta.env.KV_REST_API_TOKEN) {
      console.log(`[Analytics Mock] Click tracked for room ${roomId} (${roomName}) [Lang: ${lang || 'es'}]`);
      return new Response(JSON.stringify({ success: true, mocked: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const totalKey = `clicks:room:${roomId}:total`;
    const monthKey = `clicks:room:${roomId}:${month}`;
    const nameKey = `room:${roomId}:name`;
    const globalTotalKey = 'clicks:total';

    await kv.incr(totalKey);
    await kv.incr(monthKey);
    await kv.incr(globalTotalKey);
    
    // Guardar el nombre de la habitación para mostrarlo en el admin
    await kv.set(nameKey, roomName);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error tracking click:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

