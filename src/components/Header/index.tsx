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
  color: '#28333d',
}))

export function Header({ varient }: HeaderProps) {
  return (
    <StyledHeader varient={varient}>
      <StyledNav>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/borrow-requests">Requests</NavLink>
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
  padding: props.theme.space[2],
  justifyContent: 'space-between',
  alignItems: 'center',
}))

Header.defaultProps = {
  variant: 'default',
}
