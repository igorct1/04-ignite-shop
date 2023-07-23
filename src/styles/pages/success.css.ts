import { style } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const successContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,
})

export const title = style({
  fontSize: vars.fontSizes['2xl'],
  color: vars.colors.gray100,
})

export const paragraph = style({
  fontSize: vars.fontSizes.xl,
  color: vars.colors.gray300,
  maxWidth: 560,
  textAlign: 'center',

  marginTop: '2rem',
})

export const back = style({
  marginTop: '5rem',
  display: 'block',
  color: vars.colors.green500,
  fontSize: vars.fontSizes.lg,
  selectors: {
    '&:hover': {
      color: vars.colors.green300,
    },
  },
})

export const imageContainer = style({
  width: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: '0.25rem',

  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = style({
  objectFit: 'cover',
})
