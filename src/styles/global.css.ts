import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  colors: {
    white: '#fff',
    gray900: '#121214',
    gray800: '#202024',
    gray300: '#c4c4cc',
    gray100: '#e1e1e6',

    green500: '#00875f',
    green300: '#00b37e',
  },

  fontSizes: {
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  },
})

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('body', {
  backgroundColor: vars.colors.gray900,
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('body, input, textarea, button', {
  fontFamily: 'Roboto',
  fontWeight: 400,
})
