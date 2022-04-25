import React, { FC} from 'react'

import {
  GlobalStyle,
  Header,
  Footer,
  MainContentWrapper,
  SidePane,
  MainPane,
  StyledContainer,
  ArticleWrapper,
  AsideWrapper,
} from './styles'

interface childProps {
  children: React.ReactElement
}

export const Container: FC<childProps> = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}


const Layout: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <h1>Menu</h1> */}
        <SidePane>
          <h1>Side Pane</h1>
        </SidePane>
        
        {/* <SidePane>
          <h1>Side Pane</h1>
        </SidePane>
        <MainPane>
          <Header>Header</Header>
          <MainContentWrapper>
            <ArticleWrapper>Article Content</ArticleWrapper>
            <AsideWrapper>Aside</AsideWrapper>
          </MainContentWrapper>
          <Footer>Footer</Footer>
        </MainPane> */}
      </Container>
    </>
  )
}

export default Layout
