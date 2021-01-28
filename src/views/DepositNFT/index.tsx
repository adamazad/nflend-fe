// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'react-i18next'
import { OpenSeaAPI } from 'opensea-js'

// Components
import { CardTitle } from 'src/components/CardTitle'
import { Container } from 'src/components/Container'
import { CardBody } from 'src/components/CardBody'
import { Card } from 'src/components/Card'

// Layouts
import { Center } from 'src/layouts/Center'

const NoAssetsMessage = () => <Center>Hmmm ... you do not own any asset</Center>

export function DepisteNFTView() {
  const [userAssetsCount, setUserAssetsCount] = useState<number>(0)
  const [userAssets, setUserAssets] = useState<OpenSeaAsset[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { account } = useWeb3React()

  const openSea = new OpenSeaAPI({})

  const fetchUserAssets = async () => {
    const { assets, estimatedCount } = await openSea.getAssets({
      owner: account as string,
    })

    setUserAssets(assets)
    setUserAssetsCount(estimatedCount)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUserAssets()
  }, [])

  return (
    <Center minHeight="100%">
      <Container>
        <Card>
          <CardBody>
            <CardTitle>Import NFTs</CardTitle>
          </CardBody>
          <CardBody>Your assets will show up here</CardBody>
        </Card>
      </Container>
    </Center>
  )
}
