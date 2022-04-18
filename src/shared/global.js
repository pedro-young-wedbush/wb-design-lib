import { createGlobalStyle, css } from 'styled-components'

import { Colors, Typography } from './styles'

export const fontUrl =
  'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900'

export const bodyStyles = css`
  /* Same as before */
`

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`
