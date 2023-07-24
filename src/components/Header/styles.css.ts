import { style } from '@vanilla-extract/css'

export const header = style({
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const centeredHeader = style({
  display: 'flex',
  margin: '0 auto',
  justifyContent: 'center',
})
