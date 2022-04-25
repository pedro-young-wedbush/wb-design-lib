import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
import HeaderLayout from '../../components/layouts/header/HeaderLayout'
import FooterLayout from '../../components/layouts/footer/FooterLayout'
import ArticleLayout from '../../components/layouts/article/ArticleLayout'

import {
  MainContentWrapper,
  MainPane,
  AsideWrapper,
} from '../../components/layouts/landingPage/styles'

import SidePaneLayout from '../../components/layouts/sidePane/SidePaneLayout'

import HeaderContent from './headerContent/HeaderContent'
import FooterContent from './footerContent/FooterContent'

const SidePaneContent = () => {
  return <h1>Side Pane</h1>
}

function PageContent() {
  return (
    <>
      <SidePaneLayout>
        <SidePaneContent />
      </SidePaneLayout>
      <MainPane>
        <HeaderLayout>
          <HeaderContent />
        </HeaderLayout>

        <MainContentWrapper>
          <ArticleLayout>
            <p>Article Content</p>
          </ArticleLayout>
          <AsideWrapper>Aside</AsideWrapper>
        </MainContentWrapper>

        <FooterLayout>
          <FooterContent />
        </FooterLayout>
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
