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

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

  /* justify-content:space-evenly; */
  justify-content: space-between;
  align-items: stretch;
  width: 100vw;
  height: 100vh;

  color: white;
  background-color: salmon;
`

export const SideBar = styled.div`
  // display: flex;
  // justify-content:space-evenly;
  // align-items: center;
  /* width: 20%; */
  /* flex-basis: 20%; */
  flex: 1 auto;

  color: black;
  background-color: #ffffff;
`

export const Main = styled.div`
  /* width: 80%; */
  /* flex-basis: 80%; */
  flex: 1 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  padding: 0;
  margin: 0;

  color: black;
  /* background-color: lightcoral; */
  background-color: #f0f2f5;
`

export const Header = styled.div` 
  /* width: 80%; */
  /* flex-basis: 5%; */
  padding: 0;
  margin: 0;

  color: white;
  /* background-color: lightcoral; */
  background-color: #00245D;
`

export const Footer = styled.div`
  /* width: 80%; */
  /* flex-basis: 5%; */

  color: black;
  background-color: salmon;
  /* background-color: #f0f2f5; */
`
