import Favorite from './Favorite'

import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'

export default {
  component: Favorite,
} as ComponentMeta<typeof Favorite>

export const Default: ComponentStoryObj<typeof Favorite> = {
  args: {},
  storyName: 'Default',
}
