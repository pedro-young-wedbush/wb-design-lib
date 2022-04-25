import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const BodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  #root {
    margin: 0 auto;
  }
`

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${BodyStyles}
`

export const MainPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  min-height: 100vh;
  background: salmon;
`

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 75%;

  color: black;
  background-color: #f0f2f5;
`

