import styled from 'styled-components'

export interface LabelProps {
  fontSize: string,
  fontStyle: string,
  fontWeight: number,
  lineHeight: string,
  color: string,
  text?: string
}

export const StyledLabel = styled.div<LabelProps>`
  font-family: SourceSansProBlackItalic;
  font-size: ${(LabelProps) => LabelProps.fontSize};
  font-style: ${(LabelProps) => LabelProps.fontStyle};
  font-weight: ${(LabelProps) => LabelProps.fontWeight};
  line-height: ${(LabelProps) => LabelProps.lineHeight};
  color: ${(LabelProps) => LabelProps.color};
`