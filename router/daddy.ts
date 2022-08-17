import { Context, Router } from 'oak/mod.ts';
import { createError } from 'http_errors/mod.ts';

const R = new Router();

R.get('/', (ctx: Context) => {
  ctx.render('index.ejs', { title: 'Deno Package Manager' });
});

R.get('/install', (ctx: Context) => {
  ctx.response.redirect(
    'https://raw.githubusercontent.com/dpmland/dpm/main/install.ts',
  );
});

R.get('/schema', (ctx: Context) => {
  ctx.response.redirect(
    'https://raw.githubusercontent.com/dpmland/dpm/main/schemas/dpm.json',
  );
});

R.get('/discord', (ctx: Context) => {
  ctx.response.redirect('https://discord.com/invite/Um27YPJKud');
});

R.get('/(.*)', (ctx: Context) => {
  ctx.response.status = 404;
  const err = createError(404).toJSON();
  ctx.render('error.ejs', {
    title: 'ERROR Deno Package Manager',
    message: err.message,
    error: { status: err.status },
  });
});

export default R;
