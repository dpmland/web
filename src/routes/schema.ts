import { Router } from 'opine/mod.ts';
import { join } from 'path/mod.ts';
import { dracoFiles } from 'draco/mod.ts';

const router = Router();

router.get('/', async (_req, res, _next) => {
	const path = join(Deno.cwd(), 'src', 'schema.json');
	if (dracoFiles.exists(path) == false) {
		res.setStatus(500).json({
			error: 'Not found the file of the schema please report this on GitHub',
		});
		return;
	}
	const file = await Deno.readTextFile(path);
	res.json(JSON.parse(file));
});

export default router;
