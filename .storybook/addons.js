// Ability to edit props dynamically. 
// https://www.npmjs.com/package/@storybook/addon-knobs
import '@storybook/addon-knobs/register';

// Used to display data received by event handlers.
// https://www.npmjs.com/package/@storybook/addon-actions
import '@storybook/addon-actions/register';

// Write notes in text or html for stories.
// https://www.npmjs.com/package/@storybook/addon-notes
// register the notes addon as a tab
//import '@storybook/addon-notes/register';
// or register the notes addon as a panel. Only one can be used!
import '@storybook/addon-notes/register-panel';

// Show story source.
// https://github.com/storybookjs/storybook/tree/master/addons/storysource
import '@storybook/addon-storysource/register';

// Links to navigate between stories.
// https://www.npmjs.com/package/@storybook/addon-links
import '@storybook/addon-links/register';