import { HandlerContext } from '$fresh/server.ts';

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.redirect(
    'https://discord.com/invite/Um27YPJKud',
  );
};
