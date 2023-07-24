import { style, globalStyle } from '@vanilla-extract/css'
import { vars } from '../global.css'

export const homeContainer = style({
  display: 'flex',

  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2) )',
  width: '100%',
  marginLeft: 'auto',
  minHeight: 656,
})

export const product = style({
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
})

globalStyle(`${product}:hover footer`, {
  transform: 'translateY(0%)',
  opacity: 1,
})

export const image = style({
  objectFit: 'cover',
})

export const footer = style({
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '2rem',
  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  backgroundColor: 'rgba(0,0,0,0.6)',
})

export const footerProductInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const footerProductCartButton = style({
  border: 0,
  background: vars.colors.green500,
  padding: '0.75rem',
  borderRadius: 6,
  cursor: 'pointer',

  selectors: {
    '&:not(:disabled):hover': {
      background: vars.colors.green300,
    },
    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  },
})

globalStyle(`${footerProductCartButton} svg`, {
  color: vars.colors.gray100,
})

export const strong = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.white,
})

export const span = style({
  fontSize: vars.fontSizes.xl,
  fontWeight: 'bold',
  color: vars.colors.green300,
})
