import lume from 'lume/mod.ts';
import codeHighlight from 'lume/plugins/code_highlight.ts';

const site = lume();
site.use(codeHighlight({/* your config here */}));

site.ignore('README.md', 'CODE_OF_CONDUCT.md');
site.copy('img');

export default site;
