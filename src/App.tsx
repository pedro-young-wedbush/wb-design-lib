import { FC } from 'react'

import { GlobalStyle, Container, Main, SideBar } from './global'

const App:FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar>
          <h1>Side Bar</h1>
        </SideBar>
        <Main>
          <h1>Home Page</h1>
        </Main>
      </Container>
    </>
  )
}

export default App