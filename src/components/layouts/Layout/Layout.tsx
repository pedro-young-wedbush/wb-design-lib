import { FC } from 'react'

import {
  GlobalStyle,
  Header,
  Footer,
  MainContentWrapper,
  SidePane,
  MainPane,
  Container,
  ArticleWrapper,
  AsideWrapper,
} from './styles'

const Layout: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SidePane>
          <h1>Side Pane</h1>
        </SidePane>
        <MainPane>
          <Header>Header</Header>
          <MainContentWrapper>
            <ArticleWrapper>Article Content</ArticleWrapper>
            <AsideWrapper>Aside</AsideWrapper>
          </MainContentWrapper>
          <Footer>Footer</Footer>
        </MainPane>
      </Container>
    </>
  )
}

export default Layout;
