// Externals
import { useEffect, useState } from 'react'

// Hooks
import { useLoanManager } from './useLoanManager'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'

interface UseBorrowRequestsResponse {
  error: Error | false
  loading: boolean
  borrowRequests: BorrowRequest[]
}

export function useBorrowRequests(): UseBorrowRequestsResponse {
  const [borrowRequests, setBorrowRequests] = useState<BorrowRequest[]>([])
  const [error, setError] = useState<Error | false>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const loanManager = useLoanManager()

  useEffect(() => {
    if (loanManager) {
      loanManager
        .borrowRequestById(0)
        // .then(setBorrowRequests)
        .catch(setError)
        .then(() => setLoading(false))
    }
  }, [loanManager])

  return {
    error,
    loading,
    borrowRequests,
  }
}
