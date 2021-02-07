// Externals
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'

// Contracts
import { LoanManager, LoanManagerFactory } from 'src/contracts'

// Constants
import { LOAN_MANAGER_ADDRESS } from 'src/constants'

export function useLoanManager() {
  const [loanManager, setLoanManager] = useState<LoanManager>()
  const { library, account } = useWeb3React()

  useEffect(() => {
    if (!library) return

    try {
      const w: any = window // debug
      const contract = LoanManagerFactory.connect(LOAN_MANAGER_ADDRESS, library.getSigner())
      setLoanManager(contract)

      w.loanManager = contract
    } catch (e) {
      console.log(e)
    }
  }, [library, account])

  return loanManager
}
