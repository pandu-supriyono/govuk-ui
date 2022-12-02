import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fieldset from './Fieldset';

export default {
  title: 'Components/Fieldset',
  component: Fieldset,
  argTypes: {
    legend: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Fieldset>;

const Template: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args}>Hello, world</Fieldset>
);

export const Default = Template.bind({});
