import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TaskList from 'pages/task/TaskList';
import { Provider } from 'react-redux';
import * as TaskStories from 'stories/task/Task.stories';
import { TaskBoxState } from 'store/redux/taskSlice';

export const MockedState: TaskBoxState = {
  tasks: [
    {
      ...TaskStories.Default.args?.task,
      id: '1',
      title: 'Task 1',
    },
    {
      ...TaskStories.Default.args?.task,
      id: '2',
      title: 'Task 2',
    },
    {
      ...TaskStories.Default.args?.task,
      id: '3',
      title: 'Task 3',
    },
    {
      ...TaskStories.Default.args?.task,
      id: '4',
      title: 'Task 4',
    },
    {
      ...TaskStories.Default.args?.task,
      id: '5',
      title: 'Task 5',
    },
    { ...TaskStories.Default.args?.task, id: '6', title: 'Task 6' },
  ],
  status: 'idle',
  error: null,
};

const MockStore = ({
  taskBoxState,
  children,
}: {
  taskBoxState: TaskBoxState;
  children: ReactNode;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        taskBox: createSlice({
          name: 'taskBox',
          initialState: taskBoxState,
          reducers: {
            updateTaskState: (
              state,
              action: PayloadAction<{ id: string; newTaskState: string }>
            ) => {
              const { id, newTaskState } = action.payload;
              const task = state.tasks.findIndex(task => task.id === id);
              if (task >= 0) {
                state.tasks[task].state = newTaskState;
              }
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = () => <TaskList />;

export const Default = Template.bind({});
Default.decorators = [
  story => <MockStore taskBoxState={MockedState}>{story()}</MockStore>,
];

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.decorators = [
  story => {
    const pinnedTasks = [
      ...MockedState.tasks.slice(0, 5),
      {
        id: '6',
        title: 'Task 6 (pinned)',
        state: 'TASK_PINNED',
      },
    ];

    return (
      <MockStore
        taskBoxState={{
          ...MockedState,
          tasks: pinnedTasks,
        }}
      >
        {story()}
      </MockStore>
    );
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  story => (
    <MockStore
      taskBoxState={{
        ...MockedState,
        status: 'loading',
      }}
    >
      {story()}
    </MockStore>
  ),
];

export const Empty = Template.bind({});
Empty.decorators = [
  story => (
    <MockStore
      taskBoxState={{
        ...MockedState,
        tasks: [],
      }}
    >
      {story()}
    </MockStore>
  ),
];
