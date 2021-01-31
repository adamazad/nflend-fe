// Externals
import { Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { useState, useEffect } from 'react'
import { Contract } from 'ethers'

// ERC20 Abi
import ERC20Abi from 'src/contracts/abi/ERC20.json'

export function useERC20Contract(contractAddress: string) {
  const [contract, setContract] = useState<Contract>()
  const { library, account } = useWeb3React<Provider>()

  useEffect(() => {
    const erc20Contract = new Contract(contractAddress, ERC20Abi, library)

    setContract(erc20Contract)
  }, [contractAddress, library, account])

  return contract
}
