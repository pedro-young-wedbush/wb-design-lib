import { StyledLabel, LabelProps } from './styles'

export const Label = ({
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  text,
}: LabelProps) => {
  return (
    <StyledLabel
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
    >
      {text}
    </StyledLabel>
  )
}
