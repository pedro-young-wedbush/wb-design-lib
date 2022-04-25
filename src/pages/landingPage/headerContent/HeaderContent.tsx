import {
  RootContainer,
  StockWidgetWrapper,
  PagingHeadingWrapper,
  SummaryWidgetPanel,
} from './styles'

const HeaderContent = () => {
  return (
    <RootContainer>
      <StockWidgetWrapper>Stock Widget</StockWidgetWrapper>
      <PagingHeadingWrapper>
        <h2>Good Morning! Heather Johnson</h2>
        <div>Your Household Summary</div>
      </PagingHeadingWrapper>
      <SummaryWidgetPanel>
        <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div>
        <div>Financial Summary Widget</div>
      </SummaryWidgetPanel>
    </RootContainer>
  )
}

export default HeaderContent
