// Externals
import React, { useEffect } from 'react'
import styled from 'styled-components'

// Hooks
import { useBorrowRequests } from 'src/hooks/useBorrowRequests'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'

// Components
import { PageHeader } from 'src/components/PageHeader'
import { Container } from 'src/components/Container'
import { CardTitle } from 'src/components/CardTitle'
import { CardBody } from 'src/components/CardBody'
import { Card } from 'src/components/Card'
import { Link } from 'src/components/Link'
import { BorrowRequestCard } from '../BorrowRequests/components/BorrowRequestCard'

export function EarnView() {
  const setPageTitle = useSetPageTitle()
  const { borrowRequests, error, loading } = useBorrowRequests()

  useEffect(() => {
    setPageTitle('Earn')
  }, [setPageTitle])

  if (loading) {
    return (
      <Layout>
        <Container>Finding Borrow Rquests</Container>
      </Layout>
    )
  }

  // No assets
  if (borrowRequests.length === 0) {
    return (
      <Layout>
        <Container></Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <PageHeader title="Earn" />
        <CardGrid>
          {borrowRequests.map((borrowRequest, borrowRequestId) => {
            const key = `${borrowRequest.nft}-${borrowRequest.nftId}`

            return (
              <Link key={key} to={`/borrow-requests/${borrowRequestId}`}>
                <BorrowRequestCard borrowRequest={borrowRequest} />
              </Link>
            )
          })}
        </CardGrid>
      </Container>
    </Layout>
  )
}

const CardGrid = styled.div(props => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
}))
