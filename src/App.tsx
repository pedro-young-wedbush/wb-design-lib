import { FC } from 'react'

import {
  GlobalStyle,
  Header,
  Footer,
  MainContentWrapper,
  SidePane,
  MainPane,
  Container,
} from './global'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SidePane>
          <h1>Side Pane</h1>
        </SidePane>
        <MainPane>
          <Header>Header</Header>
          <MainContentWrapper>Main Content</MainContentWrapper>
          <Footer>Footer</Footer>
        </MainPane>
      </Container>
    </>
  )
}

export default App
