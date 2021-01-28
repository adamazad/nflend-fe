// Externals
import React, { useState } from 'react'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowReuqest'

// Components
import { Container } from 'src/components/Container'

// Layouts
import { Center } from 'src/layouts/Center'

export function BorrowReuqestsView() {
  const [userNFTs, setUserNFTs] = useState([])

  const [borrowRequests, setBorrowRequests] = useState<BorrowRequest[]>([])

  return (
    <Center minHeight="100%">
      <Container></Container>
    </Center>
  )
}
