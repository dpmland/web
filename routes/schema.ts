import { Router } from 'opine/mod.ts';
import { join } from 'path/mod.ts';

const router = Router();

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

router.get('/', async (_req, res, _next) => {
	const path = join(Deno.cwd(), 'schema.json');
	if (exists(path) == false) {
		res.setStatus(500).json({
			error: 'Not found the file of the schema please report this on GitHub',
		});
		return;
	}
	const file = await Deno.readTextFile(path);
	res.json(JSON.parse(file));
});

export default router;
