import React from 'react'

// Components
import { Container } from 'src/components/Container'
import { Card } from 'src/components/Card'

// Layouts
import { Center } from 'src/layouts/Center'

export function BorrowView() {
  return (
    <Center>
      <Container>
        <Card>
          <Center>borrow request</Center>
        </Card>
      </Container>
    </Center>
  )
}
