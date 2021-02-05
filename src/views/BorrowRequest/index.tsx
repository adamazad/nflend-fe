// Externals
import { useParams } from 'react-router-dom'
import React, { useCallback } from 'react'

// Hooks
import { useBorrowRequest } from 'src/hooks/useBorrowRequest'
import { useLoanManager } from 'src/hooks/useLoanManager'

// Components
import { Container } from 'src/components/Container'
import { Button } from 'src/components/Button'

// Layouts
import { Center } from 'src/layouts/Center'

interface BorrowRequestParams {
  borrowRequestId: string
}

export function BorrowRuquestsView() {
  const { borrowRequestId } = useParams<BorrowRequestParams>()
  const { borrowRequest, error, loading } = useBorrowRequest(borrowRequestId)
  const loanManager = useLoanManager()

  const repayLoan = useCallback(async () => {
    try {
      if (loanManager) {
        const repayTrx = await loanManager.repay(borrowRequestId, 1)
      }
    } catch (e) {
      alert(e)
    }
  }, [loanManager, borrowRequestId])

  const removeLoan = useCallback(async () => {
    try {
      if (loanManager) {
        const removeTrx = await loanManager.removeRequest(borrowRequestId)
      }
    } catch (e) {
      alert(e)
    }
  }, [loanManager, borrowRequest])

  const liquidateLoan = useCallback(async () => {
    try {
      if (loanManager) {
        const removeTrx = await loanManager.removeRequest(borrowRequestId)
      }
    } catch (e) {
      alert(e)
    }
  }, [loanManager, borrowRequest])

  if (loading) {
    return (
      <Center minHeight="100%">
        <Container>Loading</Container>
      </Center>
    )
  }

  if (error) {
    return (
      <Center minHeight="100%">
        <Container>{error.message}</Container>
      </Center>
    )
  }

  return (
    <Center minHeight="100%">
      <Container>
        <Button onClick={repayLoan}>Repay</Button>
        <Button onClick={liquidateLoan}>Liquidate</Button>
        <Button onClick={removeLoan}>Remove</Button>
        {JSON.stringify(borrowRequest, null, 2)}
      </Container>
    </Center>
  )
}
