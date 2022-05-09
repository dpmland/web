import lume from 'lume/mod.ts';
import codeHighlight from 'lume/plugins/code_highlight.ts';
import imagick from 'lume/plugins/imagick.ts';

// Base site
const site = lume();

// Plugins
site.use(codeHighlight());
site.use(imagick({
  cache: true,
}));

// Ignore the main files!
site.ignore('README.md', 'CODE_OF_CONDUCT.md');

// Copy the files necessary
site.copy('img');
site.copy('styles', '.');

export default site;
