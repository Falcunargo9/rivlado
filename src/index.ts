export interface Env {
  IOT_DB?: D1Database;
  ENVIRONMENT?: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    return new Response('Rivlado Gateway - Active ✅', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};