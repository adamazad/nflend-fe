import { Provider } from '@ethersproject/providers'
import { Contract } from 'ethers'

// ABIs
import LoanManagerABI from './abi/LoanManager.json'
import ERC20ABI from './abi/ERC20.json'

/**
 *
 * @param address ERC20 Token contract address
 */
export const getERC20Contract = (contractAddress: string, provider: Provider) => {
  return new Contract(contractAddress, ERC20ABI, provider)
}

/**
 *
 * @param address ERC20 Token contract address
 */
export const getERC721Contract = (contractAddress: string, provider: Provider) => {
  return new Contract(contractAddress, ERC20ABI, provider)
}

/**
 *
 * @param address ERC20 Token contract address
 */
export const getLoanManagerContract = (contractAddress: string, provider: Provider) => {
  return new Contract(contractAddress, LoanManagerABI, provider)
}