import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Task, { TaskProps } from 'pages/task/Task';

export default {
  title: 'Page/InboxScreen/TaskList/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'TEST',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
} as TaskProps;

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
} as TaskProps;
