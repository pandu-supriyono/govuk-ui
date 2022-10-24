import { ComponentStory, ComponentMeta } from '@storybook/react';
import Caption from './Caption';

export default {
  title: 'Components/Caption',
  component: Caption,
  argTypes: {
    size: {
      options: [undefined, 'm', 'l', 'xl'],
      control: 'radio',
    },
    as: {
      options: [undefined, 'span', 'div'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args}>Hello, world</Caption>
);

export const Default = Template.bind({});
