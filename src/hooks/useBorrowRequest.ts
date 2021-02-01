// Externals
import { useEffect, useState } from 'react'

// Hooks
import { useLoanManager } from './useLoanManager'

// Helpers
import { mapDataToBorrowRequest } from 'src/contracts/helpers'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'

interface UseBorrowRequestResponse {
  error: Error | false
  loading: boolean
  borrowRequest: BorrowRequest | undefined
}

export function useBorrowRequest(borrowRequestId: string): UseBorrowRequestResponse {
  const [borrowRequest, setBorrowRequest] = useState<BorrowRequest>()
  const [error, setError] = useState<Error | false>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const loanManager = useLoanManager()

  useEffect(() => {
    if (loanManager) {
      loanManager
        .borrowRequestById(borrowRequestId)
        .then(res => setBorrowRequest(mapDataToBorrowRequest(res)))
        .catch(setError)
        .then(() => setLoading(false))
    }
  }, [loanManager, borrowRequestId])

  return {
    error,
    loading,
    borrowRequest,
  }
}
