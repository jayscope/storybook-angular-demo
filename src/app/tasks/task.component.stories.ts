import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { TaskComponent } from './task.component';

// Default Test Data
const states = {
  initial: 'TASK_INBOX',
  pinned: 'TASK_PINNED',
  archived: 'TASK_ARCHIVED',
};

const task = {
  id: '1',
  title: 'Test Task',
  state: states.initial,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

// Recommended way of declaring actions for reuse
const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
}

// Story decleration
export default {
  // Section | Path / Name
  title: 'Design System|Productivity/Task',
  decorators: [
    // Add configurable knobs
    withKnobs
  ],
  // Used for doc gen for component properties
  component: TaskComponent
};

// Stories
export const initial = () => ({
  component: TaskComponent,
  props: {
    task: {
      ...task, 
      // Dynamic "knob" variables editable in the Storybook UI.
      // Note: these need to be unique instances. They can't be shared like the actions are.
      title: text('title', task.title),
      state: select('state', states, states.initial)
    },
    // Event callbacks displayed in the Storybook UI.
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask,    
  }  
});

export const pinned = () => ({
  component: TaskComponent,
  props: { 
    task: {
      ...task,       
      // Dynamic "knob" variables editable in the Storybook UI.
      // Note: these need to be unique instances. They can't be shared like the actions are.
      title: text('title', task.title),
      state: select('state', states, states.pinned) 
    },
    // Event callbacks displayed in the Storybook UI.
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask
  }
});
  
export const archived = () => ({
  component: TaskComponent,
  props: { 
    task: {
      ...task, 
      // Dynamic "knob" variables editable in the Storybook UI.
      // Note: these need to be unique instances. They can't be shared like the actions are.
      title: text('title', task.title),
      state: select('state', states, states.archived) 
    },
    // Event callbacks displayed in the Storybook UI.
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask
  }
});