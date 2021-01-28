// Externals
import React from 'react'
import { Card } from 'src/components/Card'
import { CardBody } from 'src/components/CardBody'
import { CardTitle } from 'src/components/CardTitle'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowReuqest'

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
