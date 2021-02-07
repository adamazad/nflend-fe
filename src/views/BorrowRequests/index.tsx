// Externals
import React, { useEffect } from 'react'

// Hooks
import { useBorrowRequests } from 'src/hooks/useBorrowRequests'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Components
import { BorrowRequestCard } from './components/BorrowRequestCard'
import { ErrorMesssage } from 'src/components/ErrorMessage'
import { Container } from 'src/components/Container'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'
import styled from 'styled-components'

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
          <Container>Loading</Container>
        </Center>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <Center minHeight="100%">
          <Container>
            <ErrorMesssage error={error} />
          </Container>
        </Center>
      </Layout>
    )
  }

  return (
    <Layout>
      <Center minHeight="100%" minWidth="100%">
        <Container>
          <CardGrid>
            {borrowRequests.map(borrowRequest => (
              <BorrowRequestCard
                borrowRequest={borrowRequest}
                key={`${borrowRequest.nftId}-${borrowRequest.cancelTimestamp}`}
              />
            ))}
          </CardGrid>
        </Container>
      </Center>
    </Layout>
  )
}

const CardGrid = styled.div(
  props => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: props.theme.space[3],
  }),
  props => `
    @media (min-width: ${props.theme.breakpoints[1]}) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 2fr));
    }
    @media (min-width: ${props.theme.breakpoints[2]}) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 3fr));
    }
  `
)
