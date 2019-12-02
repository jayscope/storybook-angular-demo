import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export default {
  title: 'TaskComponent',
  component: TaskComponent,
  includeStories: [], // or don't load this file at all  
};

const actions = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask")
}

export const standard = () => ({
  component: TaskComponent,
  props: {
    task: task,
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask,    
  }  
});

export const pinned = () => ({
  component: TaskComponent,
  props: { 
    task: {
      ...task, 
      state: 'TASK_PINNED' },
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask
  }
});
  
export const archived = () => ({
  component: TaskComponent,
  props: { 
    task: {
      ...task, 
      state: 'TASK_ARCHIVED' },
    onPinTask: actions.onPinTask,
    onArchiveTask: actions.onArchiveTask
  }
});