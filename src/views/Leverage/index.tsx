// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'
import styled from 'styled-components'

// Hooks
import { useAccountAssets } from 'src/hooks/useAccountAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Components
import { ErrorMesssage } from 'src/components/ErrorMessage'
import { NFTAssetCard } from './components/NFTAssetCard'
import { Container } from 'src/components/Container'
import { Link } from 'src/components/Link'

const isOpenSeaAssetHasImage = (asset: OpenSeaAsset) => asset.imageUrl !== ''

export function LeverageView() {
  const setPageTitle = useSetPageTitle()
  const { account } = useWeb3React()
  const { assets, error, loading } = useAccountAssets(account as string)

  useEffect(() => {
    setPageTitle('Leverage')
  }, [setPageTitle])

  if (!account) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          <Container>Connect</Container>
        </Center>
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          <Container>Finding Your NFTs</Container>
        </Center>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          <Container>
            <ErrorMesssage error={error} />
          </Container>
        </Center>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <ErrorMesssage error={error} />
        </Container>
      </Layout>
    )
  }

  // No assets
  if (assets.length === 0) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          <Container>Hmmm ... you do not own any asset</Container>
        </Center>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <HeaderText>Leverage</HeaderText>
        <CardGrid>
          {assets
            .filter(asset => isOpenSeaAssetHasImage(asset))
            .map(userAsset => {
              const key = `${userAsset.tokenId}-${userAsset.assetContract}`

              return (
                <Link
                  key={key}
                  to={`/borrow-requests/new?tokenId=${userAsset.tokenId}&tokenContract=${userAsset.assetContract.address}`}
                  title="Leverage this NFT as collateral"
                >
                  <NFTAssetCard asset={userAsset} />
                </Link>
              )
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
