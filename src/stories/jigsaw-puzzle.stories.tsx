import { Meta, StoryObj } from '@storybook/react'
import { JigsawPuzzle } from '../'
import '../jigsaw-puzzle.css'
import './jigsaw-puzzle.css'

const meta: Meta<typeof JigsawPuzzle> = {
  component: JigsawPuzzle,
  title: 'react-jigsaw-puzzle',
  argTypes: {
    imageSrc: {
      description: 'Source of the image. Can be any URL or relative path.',
      type: 'string'
    },
    rows: {
      defaultValue: 3,
      description: 'The amount of rows the puzzle will have.',
      type: 'number'
    },
    columns: {
      defaultValue: 4,
      description: 'The amount of columns the puzzle with have.',
      type: 'number'
    },
    onSolved: {
      description: 'Called when the puzzle is solved.',
      action: 'solved'
    }
  }
}

export default meta

type Story = StoryObj<typeof JigsawPuzzle>

export const Puzzle: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1595045051853-05ef47bdfdbe?3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
}
