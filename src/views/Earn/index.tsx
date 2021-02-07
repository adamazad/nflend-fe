// Externals
import React, { useEffect } from 'react'

// Hooks
import { useBorrowRequests } from 'src/hooks/useBorrowRequests'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'

// Components
import { BorrowRequestCard } from '../BorrowRequests/components/BorrowRequestCard'
import { PageHeader } from 'src/components/PageHeader'
import { Container } from 'src/components/Container'
import { CardGrid } from 'src/components/CardGrid'
import { Link } from 'src/components/Link'

export function EarnView() {
  const setPageTitle = useSetPageTitle()
  const { borrowRequests, loading } = useBorrowRequests()

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
