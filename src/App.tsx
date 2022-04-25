import { FC } from 'react'
import LandingPageLayout from './components/layouts/landingPage/LandingPageLayout'

import {
  Header,
  Footer,
  MainContentWrapper,
  MainPane,
  ArticleWrapper,
  AsideWrapper,
} from './components/layouts/landingPage/styles'

import SidePane from './components/layouts/sidePane/SidePane'

const App: FC = () => {
  return (
    <LandingPageLayout>
      <>
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
      </>
    </LandingPageLayout>
  )
}

export default App
