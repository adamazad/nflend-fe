import styled from 'styled-components'

export const CardGrid = styled.div(
  props => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: props.theme.space[3],
  }),
  props => `
    @media (min-width: ${props.theme.breakpoints[1]}) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
    }
    @media (min-width: ${props.theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 3fr));
    }
  `
)
