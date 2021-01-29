// Externals
import styled from 'styled-components'
import React from 'react'

// Components
import { Account } from '../Account'
import { Link } from '../Link'

interface HeaderProps {
  varient?: 'fixed' | 'default'
}

export function Header({ varient }: HeaderProps) {
  return (
    <StyledHeader varient={varient}>
      <StyledNav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/deposit">Deposit NFT</Link>
        <Link to="/borrow">Borrow</Link>
        <Link to="/lend">Lend</Link>
      </StyledNav>
      <Account />
    </StyledHeader>
  )
}

const StyledNav = styled.nav(props => ({
  display: 'flex',
}))

const StyledHeader = styled.header<HeaderProps>(props => ({
  position: props.varient === 'fixed' ? 'fixed' : 'relative',
  height: props.theme.header.height,
  display: 'flex',
  padding: props.theme.space[2],
  justifyContent: 'space-between',
}))

Header.defaultProps = {
  variant: 'default',
}
