// Externals
import styled from 'styled-components'
import React from 'react'

// Components
import { Account } from '../Account'
import { Link } from '../Link'

interface HeaderProps {
  varient?: 'fixed' | 'default'
}

const NavLink = styled(Link)(props => ({
  color: props.theme.colors.primary,
  ':hover': {
    color: props.theme.colors.primary,
  },
}))

export function Header({ varient }: HeaderProps) {
  return (
    <StyledHeader varient={varient}>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/earn">Earn</NavLink>
        <NavLink to="/leverage">Leverage</NavLink>
      </StyledNav>
      <StyledNav>
        <Account />
      </StyledNav>
    </StyledHeader>
  )
}

const StyledNav = styled.nav(props => ({
  display: 'flex',
  gap: props.theme.space[3],
}))

const StyledHeader = styled.header<HeaderProps>(props => ({
  position: props.varient === 'fixed' ? 'fixed' : 'relative',
  height: props.theme.header.height,
  display: 'flex',
  padding: props.theme.space[3],
  justifyContent: 'space-between',
  alignItems: 'center',
}))

Header.defaultProps = {
  variant: 'default',
}
