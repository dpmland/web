import { Router } from 'opine/mod.ts';

const router = Router();

// Redirect to the Installer
router.get('/', (_req, res, _next) => {
	res.redirect('https://raw.githubusercontent.com/dpmland/dpm/main/install.ts');
});

export default router;
