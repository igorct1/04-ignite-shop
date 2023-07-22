import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const header = style({
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})
