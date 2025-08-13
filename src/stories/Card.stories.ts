import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'bordered', 'elevated']
    }
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content that provides some additional information about the topic.'
  }
};

export const Bordered: Story = {
  args: {
    title: 'Bordered Card',
    content: 'This card has a border around it to provide visual separation.',
    variant: 'bordered'
  }
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    content: 'This card has a shadow effect to appear elevated above the surface.',
    variant: 'elevated'
  }
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    content: 'This card includes an image at the top to make it more visually appealing.',
    imageUrl: 'https://via.placeholder.com/320x160',
    variant: 'elevated'
  }
};
