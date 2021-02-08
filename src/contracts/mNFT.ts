import { Provider } from '@ethersproject/providers'
import Axios from 'axios'
import { MOCK_NFT_CONTRACT_ADDRESS } from 'src/constants'

import { TokenMetadata } from 'src/interfaces/TokenMetadata'
import { getInfuraProvider, getWeb3Provider } from 'src/providers'
import { ERC721Factory } from './factories/ERC721__factory'
import { mapFakeAavegotchiToOpenSeaAsset } from './helpers'

const tokenURICacheMap = new Map<string, TokenMetadata>()

export async function fetchTokenURIData(url: string) {
  // Retrieve from cache
  if (tokenURICacheMap.has(url)) {
    return tokenURICacheMap.get(url) as TokenMetadata
  }

  const { data } = await Axios.get<TokenMetadata>(url)

  // Cache
  tokenURICacheMap.set(url, data)

  return data
}

export async function getToken(tokenId: string, provider: Provider) {
  const erc721Contract = ERC721Factory.connect(MOCK_NFT_CONTRACT_ADDRESS, provider)

  const tokenURI = await erc721Contract.tokenURI(tokenId)

  const data = await fetchTokenURIData(tokenURI)

  return mapFakeAavegotchiToOpenSeaAsset(data, tokenId)
}
