// Externals
import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'

// Hooks
import { useAccountAssets } from 'src/hooks/useAccountAssets'
import { useOpenSeaAssets } from 'src/hooks/useOpenSeaAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Components
import { NFTAssetCard } from './components/NFTAssetCard'
import { Container } from 'src/components/Container'
import { OpenSeaAsset } from 'opensea-js/lib/types'

const NoAssetsMessage = () => <Center>Hmmm ... you do not own any asset</Center>

const isOpenSeaAssetHasImage = (asset: OpenSeaAsset) => asset.imageUrl !== ''

export function LeverageView() {
  const setPageTitle = useSetPageTitle()
  const { assets, error, loading } = useOpenSeaAssets()
  const { account } = useWeb3React()

  useEffect(() => {
    setPageTitle('Leverage')
  }, [setPageTitle])

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
          {assets
            .filter(asset => isOpenSeaAssetHasImage(asset))
            .map(userAsset => {
              const key = `${userAsset.tokenId}-${userAsset.assetContract}`
              return <NFTAssetCard asset={userAsset} key={key} />
            })}
        </CardGrid>
      </Container>
    </Layout>
  )
}

const CardGrid = styled.div(
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

const HeaderText = styled.h1({
  textAlign: 'center',
  fontSize: '6vw',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})
