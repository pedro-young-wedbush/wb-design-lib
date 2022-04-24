import { FC } from 'react'

import { GlobalStyle, Main, SideBar, Header, Footer, MainContentWrapper, SidePane, MainPane, Container } from './global'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SidePane>
          <h1>Side Pane</h1>
        </SidePane>
        <MainPane>
          <h1>Main Pane</h1>
        </MainPane>
        {/* <Main>
          <Header>
            <h1>Header</h1>
          </Header>
          <MainContentWrapper>
            <h1>Main Content</h1>
          </MainContentWrapper>
          <Footer>
            <h1>Footer</h1>
          </Footer>
        </Main> */}
      </Container>
    </>
  )
}

export default App
