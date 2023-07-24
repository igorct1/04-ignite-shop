import { vars } from '@/styles/global.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const spanCart = style({
  position: 'absolute',
  top: '-10px',
  right: '-15px',
  background: vars.colors.green500,
  padding: '.4rem 0.6rem',
  borderRadius: 9999,
  border: `2px solid ${vars.colors.gray900}`,
  color: vars.colors.white,
})

export const headerButton = style({
  border: 0,
  background: vars.colors.gray800,
  padding: '0.75rem',
  borderRadius: 6,
  cursor: 'pointer',

  position: 'relative',
})

globalStyle(`${headerButton} svg`, {
  color: vars.colors.gray500,
})

export const overlay = style({
  position: 'relative',
})

export const content = style({
  width: 480,
  padding: '3rem',
  height: '100vh',
  position: 'absolute',
  top: 0,
  right: 0,
  background: vars.colors.gray800,
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
})

export const modalClose = style({
  border: 0,
  background: 0,
  cursor: 'pointer',
  marginLeft: 'auto',
})

globalStyle(`${modalClose} svg`, {
  color: vars.colors.gray500,
})

export const cartContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

export const cartTitle = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: 'bold',
  color: vars.colors.gray100,
})

export const cartItemsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '2rem 0rem',
})

export const cartDetails = style({
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const cartDetailsInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const cartDetailsParagraph = style({
  color: vars.colors.gray100,
  fontWeight: 400,
})

export const cartDetailsSpan = style({
  color: vars.colors.gray300,
  fontWeight: 400,
  fontSize: vars.fontSizes.md,
})

export const cartDetailsPrice = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const totalPriceText = style({
  fontSize: vars.fontSizes.md,
  fontWeight: 700,
  color: vars.colors.gray100,
})

export const totalPriceValue = style({
  fontSize: vars.fontSizes.lg,
  fontWeight: 700,
  color: vars.colors.gray300,
})

export const cartDetailsButton = style({
  marginTop: '3.43rem',
  padding: '1.5rem',
  border: 0,
  borderRadius: 8,
  background: vars.colors.green500,
  cursor: 'pointer',
  color: vars.colors.white,
  fontWeight: 700,
  fontSize: vars.fontSizes.md,
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

export const emptyCart = style({
  fontSize: vars.fontSizes.lg,
  color: vars.colors.gray100,
  fontWeight: 700,
})
