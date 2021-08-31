import { Meta, Story } from '@storybook/react'
import React from 'react'
import { JigsawPuzzle } from '../src'
import '../src/jigsaw-puzzle.css'
import './jigsaw-puzzle.css'

export default {
  component: JigsawPuzzle,
  title: 'JigsawPuzzle',
  argTypes: {
    imageSrc: {
      defaultValue: 'https://images.unsplash.com/photo-1595045051853-05ef47bdfdbe?3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      description: 'Source of the image. Can be any URL or relative path.'
    },
    rows: {
      defaultValue: 3,
      description: 'The amount of rows the puzzle will have.'
    },
    columns: {
      defaultValue: 4,
      description: 'The amount of columns the puzzle with have.'
    },
    onSolved: {
      description: 'Called when the puzzle is solved.'
    }
  }
} as Meta

const Template: Story<Parameters<typeof JigsawPuzzle>[0]> = props => <JigsawPuzzle {...props} onSolved={() => alert('Solved!')}/>

export const Puzzle = Template.bind({})
