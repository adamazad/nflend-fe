// Externals
import { useWeb3React } from '@web3-react/core'
import React from 'react'

// Components
import { CardTitle } from 'src/components/CardTitle'
import { CardBody } from 'src/components/CardBody'
import { Card } from 'src/components/Card'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'
import { useOpenSeaAsset } from 'src/hooks/useOpenSeaAsset'

interface BorrowRequestCardComponentProps {
  borrowRequest: BorrowRequest
}

export function BorrowRequestCard({ borrowRequest }: BorrowRequestCardComponentProps) {
  const { asset, error, loading } = useOpenSeaAsset({
    tokenAddress: borrowRequest.nft,
    tokenId: borrowRequest.nftId.toNumber(),
  })

  const { account } = useWeb3React()

  if (loading) {
    return (
      <Card>
        <CardBody>loading</CardBody>
      </Card>
    )
  }

  if (!asset) {
    return (
      <Card>
        <CardBody>Not asset</CardBody>
      </Card>
    )
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>{asset.assetContract.name}</CardTitle>
      </CardBody>
    </Card>
  )
}
