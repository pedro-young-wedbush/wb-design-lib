import { FC } from 'react'

import { GlobalStyle, Container, Main, SideBar, Header, Footer } from './global'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar>
          <h1>Side Bar</h1>
        </SideBar>
        <Main>
          <Header>
            <h1>Header</h1>
          </Header>
          {/* <div></div>
          <h1>Main Content</h1> */}
          <Footer>
            <h1>Footer</h1>
          </Footer>
        </Main>
      </Container>
    </>
  )
}

export default App
