import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Label } from './Label'

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Heading = Template.bind({})
Heading.args = {
  fontSize: '16px',
  fontStyle: "regular",
  fontWeight: 700,
  lineHeight: "40px",
  color: "red",
  text: "Hello"
}