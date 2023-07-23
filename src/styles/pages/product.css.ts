import { style } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const productContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const imageContainer = style({
  width: '100%',
  maxWidth: 576,
  height: 'calc(656px - 0.5rem)',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const image = style({
  objectFit: 'cover',
})

export const productDetails = style({
  display: 'flex',
  flexDirection: 'column',
})

export const title = style({
  fontSize: vars.fontSizes['2xl'],
  color: vars.colors.gray300,
})

export const price = style({
  marginTop: '1rem',
  display: 'block',
  fontSize: vars.fontSizes['2xl'],
  color: vars.colors.green300,
})

export const paragraph = style({
  marginTop: '2.5rem',
  fontSize: vars.fontSizes.md,
  lineHeight: 1.6,
  color: vars.colors.gray300,
})

export const button = style({
  marginTop: 'auto',

  backgroundColor: vars.colors.green500,
  border: 0,
  color: vars.colors.white,
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontSize: vars.fontSizes.md,

  selectors: {
    '&:not(:disabled):hover': {
      backgroundColor: vars.colors.green300,
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
  },
})
