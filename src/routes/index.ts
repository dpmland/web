import { Router } from 'opine/mod.ts';

const router = Router();

// GET home page.
router.get('/', (_req, res, _next) => {
	res.render('index', {
		title: 'Deno Package Manager',
	});
});

export default router;
