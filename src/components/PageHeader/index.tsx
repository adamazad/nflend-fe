import styled from 'styled-components'
import React from 'react'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return <HeaderText>{title}</HeaderText>
}

const HeaderText = styled.h1({
  textAlign: 'center',
  fontSize: '6vw',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})
