// Externals
import React from 'react'

// Components
import { CardTitle } from 'src/components/CardTitle'
import { CardBody } from 'src/components/CardBody'
import { Card } from 'src/components/Card'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'

interface BorrowRequestCardComponentProps {
  borrowRequest: BorrowRequest
}

export function BorrowRequestCard({ borrowRequest }: BorrowRequestCardComponentProps) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{borrowRequest.nft}</CardTitle>
      </CardBody>
    </Card>
  )
}
