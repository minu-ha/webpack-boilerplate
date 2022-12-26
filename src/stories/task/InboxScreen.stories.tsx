import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@storybook/testing-library';
import { rest } from 'msw';
import React from 'react';

import InboxScreen from 'pages/task/InboxScreen';
import store from 'store/store';

import { Provider } from 'react-redux';
import { MockedState } from './TaskList.stories';

export default {
  title: 'InboxScreen',
  component: InboxScreen,
  decorators: [story => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof InboxScreen>;

const Template: ComponentStory<typeof InboxScreen> = () => <InboxScreen />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (_req, res, ctx) => {
          return res(ctx.json(MockedState.tasks));
        }
      ),
    ],
  },
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
  await waitFor(async () => {
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  });
};

export const Error = Template.bind({});
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (_req, res, ctx) => {
          return res(ctx.status(403));
        }
      ),
    ],
  },
};
