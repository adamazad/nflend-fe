// Externals
import { Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { Contract } from 'ethers'

// Contracts
import { getLoanManagerContract } from 'src/contracts'

// Constants
import { LOAN_MANAGER_ADDRESS } from 'src/constants'

export function useLoanManager() {
  const [loanManager, setLoanManager] = useState<Contract>()
  const { library, account } = useWeb3React<Provider>()

  useEffect(() => {
    if (!library) return

    try {
      const contract = getLoanManagerContract(LOAN_MANAGER_ADDRESS, library)
      setLoanManager(contract)
    } catch (e) {
      console.log('sss')
    }
  }, [library, account])

  return loanManager
}
