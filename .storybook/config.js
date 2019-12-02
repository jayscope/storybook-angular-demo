import { configure } from '@storybook/angular';

import '../src/styles.less';

// automatically import all files ending in *.stories.ts
const req = require.context('../src/', true, /\.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// automatically import all files ending in *.stories.js|ts|mdx
configure(require.context('../src', true, /\.stories\.([jt]s|mdx)$/), module);

configure(loadStories, module);