import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      options: [undefined, 's', 'm', 'l', 'xl'],
      control: 'radio',
    },
    heading: {
      options: [false, true],
      control: 'radio',
    },
    children: {
      contol: 'text',
      defaultValue: 'Hello, world',
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
