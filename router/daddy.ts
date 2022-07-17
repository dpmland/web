import { Router } from 'oak/mod.ts';

const R = new Router();

R.get('/', (ctx) => {
  ctx.render('index.ejs', { title: 'Deno Package Manager' });
});

R.get('/install', (ctx) => {
  ctx.response.body = 'Hello from installl';
});

export default R;
