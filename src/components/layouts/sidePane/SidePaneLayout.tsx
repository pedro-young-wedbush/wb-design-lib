import React, { FC } from 'react'
import StyledSidePane from './styles'

interface childProps {
  children: React.ReactElement
}

const SidePane: FC<childProps> = ({ children }) => {
  return <StyledSidePane>{children}</StyledSidePane>
}

export default SidePane
