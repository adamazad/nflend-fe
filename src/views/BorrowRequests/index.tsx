// Externals
import React, { useEffect } from 'react'

// Hooks
import { useBorrowRequests } from 'src/hooks/useBorrowRequests'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Components
import { BorrowRequestCard } from './components/BorrowRequestCard'
import { Container } from 'src/components/Container'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

export function BorrowRequestsView() {
  const { borrowRequests, error, loading } = useBorrowRequests()
  const setPageTitle = useSetPageTitle()

  useEffect(() => {
    setPageTitle('Borrow Requests')
  }, [setPageTitle])

  if (loading) {
    return (
      <Layout>
        <Center minHeight="100%">
          <Container>Loading!</Container>
        </Center>
      </Layout>
    )
  }

  return (
    <Layout>
      <Center minHeight="100%">
        <Container>
          {borrowRequests.map(borrowRequest => (
            <BorrowRequestCard
              borrowRequest={borrowRequest}
              key={`${borrowRequest.nftId}-${borrowRequest.cancelTimestamp}`}
            />
          ))}
        </Container>
      </Center>
    </Layout>
  )
}
