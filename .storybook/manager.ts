
import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

console.error('hALLO')
addons.setConfig({
  theme: themes.dark,
  panelPosition: 'right',
  showNav: false,
  toolbar: {
    fullscreen: {hidden: true},
    zoom: {hidden: true},
    eject: {hidden: true},
    copy: {hidden: true},
    title: {hidden: true},
  }
})