import { vars } from '@/styles/global.css'
import { style } from '@vanilla-extract/css'

export const cartItemContainer = style({
  display: 'flex',
  gap: '1.25rem',
})

export const cartItemImage = style({
  width: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  overflow: 'hidden',
})

export const image = style({
  objectFit: 'cover',
})

export const cartItemInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const cartItemTitle = style({
  color: vars.colors.gray300,
  fontSize: vars.fontSizes.md,
  fontWeight: 400,
})

export const cartItemPrice = style({
  color: vars.colors.white,
  fontSize: vars.fontSizes.md,
  fontWeight: 700,
})

export const cartItemButton = style({
  marginTop: 'auto',
  border: 0,
  background: 0,
  textAlign: 'left',
  fontSize: vars.fontSizes.default,
  color: vars.colors.green500,
  fontWeight: 700,

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: vars.colors.green300,
    },
  },
})
