import { ComponentStory, ComponentMeta } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    size: {
      options: [undefined, 's', 'm', 'l', 'xl'],
      control: 'radio',
    },
    as: {
      options: [undefined, 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: 'select',
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args}>Hello, world</Heading>
);

export const Default = Template.bind({});
