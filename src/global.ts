import styled, { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'

const BodyStyles = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  
    min-height: 100vh;
    flex-direction: row wrap; 
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
  flex: 1 1 100%;
  display: flex;
  flex-direction: row wrap;

  /* justify-content: space-between;
  align-items: stretch; */

  color: white;
  background-color: salmon;
`

export const SidePane = styled.div`
  flex: 1;
  color: black;
  background: #D7E8D4;
`

export const MainPane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 5;
  background: salmon;
`



export const SideBar = styled.div`
  // display: flex;
  // justify-content:space-evenly;
  // align-items: center;
  /* width: 20%; */
  /* flex-basis: 20%; */
  /* flex: 1 auto; */
  /* flex: 1 0 0; */
  flex: 1;
  color: black;
  background-color: #ffffff;
  background: #D7E8D4;
`

export const Main = styled.div`
  /* width: 80%; */
  /* flex-basis: 80%; */
  /* flex: 1 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; */

  display: flex;
  flex-direction: column;
  flex: 5;

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

  flex: 1 0;

  color: white;
  /* background-color: lightcoral; */
  background-color: #00245d;
`

export const Footer = styled.div`
  /* width: 80%; */
  /* flex-basis: 5%; */
  flex: 0;
  
  color: black;
  background-color: salmon;
  /* background-color: #f0f2f5; */
`

export const MainContentWrapper = styled.div`
  /* width: 80%; */
  /* flex-basis: 5%; */
  flex-grow: 1;
  color: white;
  background-color: lightblue;
  /* background-color: #f0f2f5; */
`
