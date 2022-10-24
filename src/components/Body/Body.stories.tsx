import { ComponentStory, ComponentMeta } from '@storybook/react';
import Body from './Body';

export default {
  title: 'Components/Body',
  component: Body,
  argTypes: {
    size: {
      options: [undefined, 'xs', 's', 'm', 'l', 'lead'],
      control: 'radio',
    },
  },
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
};
