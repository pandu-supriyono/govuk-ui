import { ComponentStory, ComponentMeta } from '@storybook/react';
import SectionBreak from './SectionBreak';

export default {
  title: 'Components/SectionBreak',
  component: SectionBreak,
  argTypes: {
    size: {
      options: [undefined, 'm', 'l', 'xl'],
      control: 'radio',
    },
    visible: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SectionBreak>;

const Template: ComponentStory<typeof SectionBreak> = (args) => (
  <SectionBreak {...args} />
);

export const Default = Template.bind({});
