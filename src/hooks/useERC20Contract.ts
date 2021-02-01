// Externals
import { Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useState, useEffect } from 'react'

// Contracts
import { ERC20, ERC20Factory } from 'src/contracts'

export function useERC20Contract(contractAddress: string) {
  const [contract, setContract] = useState<ERC20>()
  const { library, account } = useWeb3React<Provider>()

  useEffect(() => {
    if (library) {
      const erc20Contract = ERC20Factory.connect(contractAddress, library)
      setContract(erc20Contract)
    }
  }, [contractAddress, library, account])

  return contract
}
