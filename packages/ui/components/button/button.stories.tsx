import { Meta, StoryFn } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    children: 'Button',
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Default: StoryFn<typeof Button> = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Secondary: StoryFn<typeof Button> = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Destructive: StoryFn<typeof Button> = Template.bind({});
Destructive.args = {
  variant: 'destructive',
};
