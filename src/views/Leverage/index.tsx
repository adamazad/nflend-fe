// Externals
import styled from 'styled-components'
import React from 'react'

// Hooks
import { useOpenSeaAssets } from 'src/hooks/useOpenSeaAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'
import { useMountEffect } from 'src/hooks/useMountEffect'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Components
import { NFTAssetCard } from './components/NFTAssetCard'
import { Container } from 'src/components/Container'

const NoAssetsMessage = () => <Center>Hmmm ... you do not own any asset</Center>

export function LeverageView() {
  const setPageTitle = useSetPageTitle()
  const { assets, loading } = useOpenSeaAssets()

  useMountEffect(() => {
    setPageTitle('Leverage')
  })

  if (loading) {
    return (
      <Layout>
        <Container>Finding NFTs</Container>
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

  console.log(assets)

  return (
    <Layout>
      <Container>
        <HeaderText>Leverage</HeaderText>
        <CardGrid>
          {assets.map(userAsset => {
            const key = `${userAsset.tokenId}-${userAsset.assetContract}`
            return <NFTAssetCard asset={userAsset} key={key} />
          })}
        </CardGrid>
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
