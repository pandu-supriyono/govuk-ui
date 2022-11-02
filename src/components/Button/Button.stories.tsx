import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colour: {
      options: [undefined, 'secondary', 'warning'],
      control: 'select',
    },
    start: {
      options: [true, false],
      control: 'radio',
    },
    disabled: {
      options: [true, false],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

export const AsHref = Template.bind({});

AsHref.args = {
  as: 'a',
  href: '#',
};
