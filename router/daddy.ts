import { Context, Router } from 'oak/mod.ts';
import { createError } from 'http_errors/mod.ts';
import { join } from 'path/mod.ts';

const R = new Router();

R.get('/', (ctx: Context) => {
  ctx.render('index.ejs', { title: 'Deno Package Manager' });
});

R.get('/install', (ctx: Context) => {
  ctx.response.redirect(
    'https://raw.githubusercontent.com/dpmland/dpm/main/install.ts',
  );
});

R.get('/schema', async (ctx: Context) => {
  function exists(file: string): boolean {
    try {
      Deno.lstatSync(file);
      return true;
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return false;
      }
      throw err;
    }
  }
  const path = join(Deno.cwd(), 'schema.json');
  if (exists(path) == false) {
    ctx.response.status = 500;
    ctx.response.body = {
      error: 'Not found the file of the schema please report this on GitHub',
      code: 500,
    };
    return;
  }
  const file = await Deno.readTextFile(path);
  ctx.response.type = 'application/json';
  ctx.response.body = JSON.parse(file);
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
