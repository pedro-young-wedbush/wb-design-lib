import React, { FC } from 'react'
import StyledContainer from './styles'

interface childProps {
  children: React.ReactElement
}

const Container: FC<childProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
