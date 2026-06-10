import type { Env } from './index';

export async function handleRequest(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  return new Response('Worker Active', { status: 200 });
}