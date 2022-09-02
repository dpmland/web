import { HandlerContext } from '$fresh/server.ts';

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return Response.redirect(
    'https://raw.githubusercontent.com/dpmland/dpm/main/install.ts',
  );
};
