import { ComponentStory, ComponentMeta } from '@storybook/react';
import Body from './Body';

export default {
  title: 'Body',
  component: Body,
  argTypes: {
    size: {
      options: [undefined, 's', 'l'],
      control: 'radio'
    }
  }
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
};
