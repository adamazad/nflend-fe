// Externals
import { useCallback, useEffect, useState } from 'react'

// Hooks
import { useLoanManager } from './useLoanManager'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'
import { mapDataToBorrowRequest } from 'src/contracts/helpers'

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

  const fetchBorrowRequests = useCallback(async () => {
    // Return value
    const allBorrowRequests: BorrowRequest[] = []

    if (!loanManager) return allBorrowRequests

    // Get total
    const totalBorrowRequestCount = await loanManager.getTotalRequestCount()

    // Get each borrowRequest
    for (let i = 0; i < totalBorrowRequestCount.toNumber(); i++) {
      try {
        const res = await loanManager.borrowRequestById(i)

        allBorrowRequests.push(mapDataToBorrowRequest(res))
      } catch (e) {
        console.log(e)
      }
    }

    return allBorrowRequests
  }, [loanManager])

  useEffect(() => {
    fetchBorrowRequests()
      .then(setBorrowRequests)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [loanManager, fetchBorrowRequests])

  return {
    error,
    loading,
    borrowRequests,
  }
}
