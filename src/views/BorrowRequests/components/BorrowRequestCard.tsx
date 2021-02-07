// Externals
import styled from 'styled-components'
import React from 'react'

// Components
import { Card as BaseCard } from 'src/components/Card'
import { CardTitle } from 'src/components/CardTitle'
import { CardBody } from 'src/components/CardBody'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'
import { useOpenSeaAsset } from 'src/hooks/useOpenSeaAsset'

interface BorrowRequestCardComponentProps {
  borrowRequest: BorrowRequest
}

const Card = styled(BaseCard)(props => ({
  boxShadow: `5px 5px 0 #000`,
  background: '#222',
}))

const CardImage = styled.img(props => ({
  display: 'block',
  maxWidth: '100%',
  margin: 'auto',
}))

export function BorrowRequestCard({ borrowRequest }: BorrowRequestCardComponentProps) {
  const { asset, error, loading } = useOpenSeaAsset({
    tokenAddress: borrowRequest.nft,
    tokenId: borrowRequest.nftId.toNumber(),
  })

  if (loading) {
    return (
      <Card minHeight={300}>
        <CardBody>loading</CardBody>
      </Card>
    )
  }

  if (!asset) {
    return (
      <Card minHeight={300}>
        <CardBody>No asset</CardBody>
      </Card>
    )
  }

  return (
    <Card>
      <CardBody>
        <CardImage src={asset.imageUrl} />
      </CardBody>
      <CardBody>
        <CardTitle>{asset.name}</CardTitle>
        <div>${borrowRequest.coupon.toString()}</div>
      </CardBody>
    </Card>
  )
}
