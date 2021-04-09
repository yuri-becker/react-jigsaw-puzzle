import { addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: themes.dark,
  }
})

const loaderFn = () => {
  const req = require.context('./', true, /\.stories\.tsx$/)
  const allExports = []
  req.keys().forEach(fname => allExports.push(req(fname)))
  return allExports
}

configure(loaderFn, module)
