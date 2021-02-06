import React from 'react'
import { OpenSeaAsset } from 'opensea-js/lib/types'

// Components
import { CardBody } from 'src/components/CardBody'
import { Card as BaseCard } from 'src/components/Card'
import { CardTitle } from 'src/components/CardTitle'
import styled from 'styled-components'

interface NFTAssetCardProps {
  asset: OpenSeaAsset
}

const Card = styled(BaseCard)(props => ({
  boxShadow: `5px 5px 0 #000`,
  background: '#222',
}))

const CardImage = styled.img(props => ({
  maxWidth: '100%',
  margin: 'auto',
  display: 'block',
}))

export function NFTAssetCard({ asset }: NFTAssetCardProps) {
  return (
    <Card>
      <CardBody>
        <CardImage src={asset.imageUrl} />
      </CardBody>
      <CardBody>
        <CardTitle>{asset.name}</CardTitle>
      </CardBody>
    </Card>
  )
}
