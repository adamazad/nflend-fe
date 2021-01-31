// Externals
import { useEffect, useState } from 'react'

// Hooks
import { useLoanManager } from './useLoanManager'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'

interface UseBorrowRequestsResponse {
  error: Error | false
  isLoading: boolean
  borrowRequests: BorrowRequest[]
}

export function useBorrowRequests(): UseBorrowRequestsResponse {
  const [borrowRequests, setBorrowRequests] = useState<BorrowRequest[]>([])
  const [error, setError] = useState<Error | false>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const loanManager = useLoanManager()

  useEffect(() => {
    if (loanManager) {
      loanManager
        .borrowRequestById()
        .then(setBorrowRequests)
        .catch(setError)
        .then(() => setIsLoading(false))
    }
  }, [loanManager])

  return {
    error,
    isLoading,
    borrowRequests,
  }
}
