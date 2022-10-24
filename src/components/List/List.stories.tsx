import { ComponentMeta } from '@storybook/react';
import List from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    as: {
      options: [undefined, 'ul', 'ol'],
      control: 'radio',
    },
    spaced: {
      control: 'boolean',
    },
    type: {
      options: [undefined, 'bullet', 'number'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof List>;

const Story = ({ ...args }) => {
  return (
    <List {...args}>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </List>
  );
};

export const Default = Story.bind({});
