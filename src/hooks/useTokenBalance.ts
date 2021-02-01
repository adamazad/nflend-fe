// External
import { Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'

// Contracts
import { ERC20Factory } from 'src/contracts'

/**
 * Returns the balance owned by the address
 */
export function useTokenBalance(tokenContractAddress: string) {
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0))
  const { library, account } = useWeb3React<Provider>()

  useEffect(() => {
    if (library && account) {
      const erc20Contract = ERC20Factory.connect(tokenContractAddress, library)
      erc20Contract
        .balanceOf(account)
        .then(setBalance)
        .catch((e: any) => console.log(e))
    }
  }, [tokenContractAddress, library, account])

  return balance
}
