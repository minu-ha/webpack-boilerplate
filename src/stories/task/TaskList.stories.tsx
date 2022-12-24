import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TaskList from 'components/TaskList';
import * as TaskStories from 'stories/task/Task.stories';
import { TaskProps } from '../../components/Task';

const {
  Default: { args },
} = TaskStories;

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = args => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      ...args?.task,
      task: { id: '1', title: 'Task 1' },
    },
    {
      ...args?.task,
      task: { id: '2', title: 'Task 2' },
    },
    {
      ...args?.task,
      task: { id: '3', title: 'Task 3' },
    },
    {
      ...args?.task,
      task: { id: '4', title: 'Task 4' },
    },
    {
      ...args?.task,
      task: { id: '5', title: 'Task 5' },
    },
    {
      ...args?.task,
      task: { id: '6', title: 'Task 6' },
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...(Default.args.tasks?.slice(0, 5) as TaskProps[]),
    {
      task: {
        id: '6',
        title: 'Task 6 (pinned)',
        state: 'TASK_PINNED',
      },
    },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
