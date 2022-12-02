import { ComponentStory, ComponentMeta } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    screenReaderAnnouncement: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args}>Hello, world</ErrorMessage>
);

export const Default = Template.bind({});
