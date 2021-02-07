// External
import styled from 'styled-components'
import {
  fontSize,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  SizeProps,
  space,
  variant,
} from 'styled-system'

export type ButtonProps = SizeProps &
  FontStyleProps &
  FontWeightProps & {
    variant?: string
    rounded?: boolean
  }

export const Button = styled.button<ButtonProps>(
  props => ({
    appearance: 'none',
    padding: '12px 16px',
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'middle',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: `2px solid #fff`,
    borderRadius: props.rounded ? '32px' : props.theme.radii.base,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'inherit',
    lineHeight: 1.5,
    textTransform: 'uppercase',
    color: props.theme.colors.primary,
    ':disabled': {
      opacity: 0.5,
    },
    ':hover': {
      textDecoration: 'underline',
    },
  }),
  fontSize,
  fontWeight,
  fontStyle,
  space,
  variant({
    variants: {
      primary: {
        bg: '#212121',
      },
      link: {
        bg: 'transparent',
      },
    },
  })
)

Button.defaultProps = {
  rounded: false,
  variant: 'primary',
}
