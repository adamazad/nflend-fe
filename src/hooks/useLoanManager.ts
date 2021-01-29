// Externals
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { Contract } from 'ethers'

// Contracts
import { getLoanManagerContract } from 'src/contracts'

// Constants
import { LOAN_MANAGER_ADDRESS } from 'src/constants'

export function useLoanManager() {
  const [loanManager, setLoanManager] = useState<Contract>()
  const { library, account } = useWeb3React()

  useEffect(() => {
    if (!library) return

    const contract = getLoanManagerContract(LOAN_MANAGER_ADDRESS, library.getProvider())

    setLoanManager(contract)
  }, [library, account])

  return loanManager
}
