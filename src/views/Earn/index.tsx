// Externals
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import React, { useEffect } from 'react'

// Hooks
import { useOpenSeaAssets } from 'src/hooks/useOpenSeaAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Components
import { Container } from 'src/components/Container'

const NoAssetsMessage = () => <Center>Hmmm ... you do not own any asset</Center>

export function EarnView() {
  const setPageTitle = useSetPageTitle()
  const [t] = useTranslation()
  const { assets, loading } = useOpenSeaAssets()

  useEffect(() => {
    setPageTitle('Earn')
  }, [setPageTitle])

  if (loading) {
    return (
      <Layout>
        <Container>Finding Borrow Rquests</Container>
      </Layout>
    )
  }

  // No assets
  if (assets.length === 0) {
    return (
      <Layout>
        <Container>
          <NoAssetsMessage />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <HeaderText>Earn</HeaderText>
        <CardGrid></CardGrid>
      </Container>
    </Layout>
  )
}

const CardGrid = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
}))

const HeaderText = styled.h1({
  textAlign: 'center',
  fontSize: '6vw',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})
