// Externals
import { InfuraProvider, Provider, Web3Provider } from '@ethersproject/providers'
import { OpenSeaAPI } from 'opensea-js'

// Constants
import { INFURA_API_KEY } from 'src/constants'
import { ERC20Factory, LoanManagerFactory } from 'src/contracts'

/**
 * Creates and returns a Infura instance connected to the mainnet
 */
export const getInfuraProvider = () => {
  return new InfuraProvider('homestead', INFURA_API_KEY)
}

/**
 *
 * @param address ERC20 Token contract address
 */
export const getERC20Contract = (contractAddress: string, provider: Provider) => {
  return ERC20Factory.connect(contractAddress, provider)
}

/**
 *
 * @param address ERC20 Token contract address
 */
export const getLoanManagerContract = (contractAddress: string, provider: Provider) => {
  return LoanManagerFactory.connect(contractAddress, provider)
}

export const getOpeanSeaAPI = () => new OpenSeaAPI({})

export const getWeb3Provider = () => {
  if ('ethereum' in window) {
    return new Web3Provider((window as any).ethereum)
  }
}
