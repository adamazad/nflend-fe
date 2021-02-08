// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'

// Hooks
import { useAccountAssets } from 'src/hooks/useAccountAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Components
import { ErrorMesssage } from 'src/components/ErrorMessage'
import { NFTAssetCard } from './components/NFTAssetCard'
import { PageHeader } from 'src/components/PageHeader'
import { Container } from 'src/components/Container'
import { CardGrid } from 'src/components/CardGrid'
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
        <PageHeader title="Leverage" />
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
