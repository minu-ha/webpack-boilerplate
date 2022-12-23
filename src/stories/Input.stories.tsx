import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from 'components/Input';

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  placeholder: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  placeholder: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'large',
};
