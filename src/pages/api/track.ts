import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';
import path from 'node:path';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'src', 'data', 'analytics.json');
    
    let analyticsData: Record<string, any> = {};
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      analyticsData = JSON.parse(fileContent);
    } catch (e) {
      // Archivo no existe o está vacío
    }

    // Usar el path y label como llave única para no mezclar botones con el mismo nombre en diferentes páginas
    const key = `${data.path}::${data.label}`;
    if (!analyticsData[key]) {
      analyticsData[key] = { clicks: 0, tag: data.tag, path: data.path, label: data.label };
    }
    analyticsData[key].clicks += 1;
    analyticsData[key].lastClicked = data.timestamp;

    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(analyticsData, null, 2));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error tracking:', error);
    return new Response(JSON.stringify({ error: 'Failed to track' }), { status: 500 });
  }
}
