import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import HeaderLayout
 from '../../components/layouts/header/HeaderLayout'

import {
  Footer,
  MainContentWrapper,
  MainPane,
  ArticleWrapper,
  AsideWrapper,
} from '../../components/layouts/landingPage/styles'

import SidePaneLayout from '../../components/layouts/sidePane/SidePaneLayout'

function PageContent() {
  return (
    <>
      <SidePaneLayout>
        <h1>Side Pane</h1>
      </SidePaneLayout>
      <MainPane>
        <HeaderLayout><h1>Header</h1></HeaderLayout>
        
        <MainContentWrapper>
          <ArticleWrapper>Article Content</ArticleWrapper>
          <AsideWrapper>Aside</AsideWrapper>
        </MainContentWrapper>
        <Footer>Footer</Footer>
      </MainPane>
    </>
  )
}
const LandingPage = () => {
  return (
    <LandingPageLayout>
      <PageContent />
    </LandingPageLayout>
  )
}

export default LandingPage
