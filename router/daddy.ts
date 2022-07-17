import { Router } from 'oak/mod.ts';

const R = new Router();

R.get('/', (ctx) => {
  ctx.response.body = 'Hello from installl';
});

export default R;
