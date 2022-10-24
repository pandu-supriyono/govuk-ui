import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    colour: {
      options: [undefined, 'muted', 'text-colour', 'inverse'],
      control: 'radio',
    },
    noVisitedState: {
      control: 'boolean',
    },
    noUnderline: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  children: 'Default link style',
};

export const Muted = Template.bind({});
Muted.args = {
  href: '#',
  children: 'Muted',
  colour: 'muted',
};

export const TextColour = Template.bind({});
TextColour.args = {
  href: '#',
  children: 'Text colour',
  colour: 'text-colour',
};

export const Inverse = Template.bind({});
Inverse.args = {
  href: '#',
  children: 'Inverse',
  colour: 'inverse',
};

export const NoVisitedState = Template.bind({});
NoVisitedState.args = {
  href: '#',
  children: 'No visited state',
  noVisitedState: true,
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  href: '#',
  children: 'No underline',
  noUnderline: true,
};
