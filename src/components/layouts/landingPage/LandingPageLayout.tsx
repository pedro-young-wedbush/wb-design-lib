import React, { FC } from 'react'

import { GlobalStyle } from './styles'
 
import Container from '../container/Container'

interface childProps {
  children: React.ReactElement
}

const LandingPageLayout: FC<childProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        { children }
      </Container>
    </>
  )
}

export default LandingPageLayout