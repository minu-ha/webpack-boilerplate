import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Task from 'components/Task';

export default {
  title: 'Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'TEST',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};