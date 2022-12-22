import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '../components/Input';

export default {
  title: 'Form/AInput',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const SmallBox = Template.bind({});
SmallBox.args = {
  placeholder: 'abed',
};

export const Medium = () => <Input placeholder="Medium size" />;
export const Large = () => <Input placeholder="Large size" />;
