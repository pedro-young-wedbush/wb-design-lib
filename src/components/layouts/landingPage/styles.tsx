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

export const SidePane = styled.div`
  flex: 1;
  color: black;
  background: #d7e8d4;
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

export const Footer = styled.div`
  height: 76px;

  color: white;
  /* background-color: #f0f2f5; */
  background-color: #00245d;
`

export const ArticleWrapper = styled.div`
  flex: 3;
  min-height: 100%;

  color: white;
  /* background-color: #f0f2f5; */
  background-color: tan;
`

export const AsideWrapper = styled.div`
  flex: 1;

  color: white;
  background-color: #f0f2f5;
  background-color: sandybrown;
`

export const Header = styled.div`
  padding: 0;
  margin: 0;

  height: 240px;

  color: black;
  background-color: #f0f2f5;
  border-bottom: 5px red;
`
