import { configure } from '@storybook/angular';

import '../src/styles.less';

// automatically import all files ending in *.stories.ts
configure(require.context('../src', true, /\.stories\.ts$/), module);