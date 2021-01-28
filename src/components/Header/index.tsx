// Externals
import styled from 'styled-components'
import React from 'react'

// Components
import { Account } from '../Account'
import { Link } from '../Link'

export function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Link to="/dashboard">Dashboard</Link>
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

const StyledHeader = styled.header(props => ({
  display: 'flex',
  padding: props.theme.space[2],
  justifyContent: 'space-between',
}))
