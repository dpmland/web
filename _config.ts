import lume from 'lume/mod.ts';
import codeHighlight from 'lume/plugins/code_highlight.ts';

const site = lume();
site.use(codeHighlight());

site.ignore('README.md', 'CODE_OF_CONDUCT.md');
site.copy('img');
site.copy('styles')

export default site;
