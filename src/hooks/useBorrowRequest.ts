// Externals
import { useEffect, useState } from 'react'

// Hooks
import { useLoanManager } from './useLoanManager'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowReuqest'

interface UseBorrowRequestResponse {
  error: Error | false
  isLoading: boolean
  borrowRequest: BorrowRequest | undefined
}

export function useBorrowRequest(borrowRequestId: string): UseBorrowRequestResponse {
  const [borrowRequest, setBorrowRequest] = useState<BorrowRequest>()
  const [error, setError] = useState<Error | false>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const loanManager = useLoanManager()

  useEffect(() => {
    if (loanManager) {
      loanManager
        .borrowRequestById(borrowRequestId)
        .then(setBorrowRequest)
        .catch(setError)
        .then(() => setIsLoading(false))
    }
  }, [loanManager, borrowRequestId])

  return {
    error,
    isLoading,
    borrowRequest,
  }
}
