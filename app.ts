// Copyright © 2022 Dpm Land. All Rights Reserved.

import { Application } from 'oak/mod.ts';
import { dejsEngine, oakAdapter, viewEngine } from 'view_engine/mod.ts';
import logger from 'oak_logger/mod.ts';
import { join } from 'path/mod.ts';
import { brightBlue, brightMagenta } from 'fmt/colors.ts';

// Own Routes
import daddyRouter from 'routes/daddy.ts';

// Start the Deno App
const APP = new Application();
const PORT = 3000;

// Middlewares
APP.use(viewEngine(oakAdapter, dejsEngine, {
  viewRoot: `${join(Deno.cwd(), 'views')}`,
}));

// Routes
APP.use(daddyRouter.routes());
APP.use(daddyRouter.allowedMethods());

if (
  typeof Deno.env.get('ENVIROMENT') == 'undefined' ||
  Deno.env.get('ENVIROMENT') == 'dev'
) {
  APP.use(logger.logger);
  APP.use(logger.responseTime);
}

// Start the App

APP.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https://' : 'http://';
  console.log(
    `${brightBlue('Listening on:')} ${
      brightMagenta(`${protocol}${hostname ?? 'localhost'}:${port}`)
    }`,
  );
});

await APP.listen({ port: PORT });
