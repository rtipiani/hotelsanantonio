/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="node" />

declare module '@vercel/kv' {
  export * from '@vercel/kv/dist/index';
  export const kv: import('@vercel/kv/dist/index').VercelKV;
}
