// Externals
import { AssetContractType, OpenSeaAsset, WyvernSchemaName } from 'opensea-js/lib/types'
import { MOCK_NFT_CONTRACT_ADDRESS } from 'src/constants'
import { BigNumber } from 'ethers'

// Interfaces
import { BorrowRequest } from 'src/interfaces/BorrowRequest'
import { TokenMetadata } from 'src/interfaces/TokenMetadata'

type Results = [
  string,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
]

export function mapDataToBorrowRequest(results: Results): BorrowRequest {
  const keys = [
    'currency',
    'borrower',
    'lender',
    'nft',
    'nftId',
    'amount',
    'coupon',
    'liqThreshold',
    'cancelTimestamp',
    'repayTimestamp',
    'endTimestamp',
  ]

  return keys.reduce<any>((acc, key, i) => {
    acc[key] = results[i]
    return acc
  }, {})
}

export function mapFakeAavegotchiToOpenSeaAsset(data: TokenMetadata, tokenId: string): OpenSeaAsset {
  return {
    assetContract: {
      address: MOCK_NFT_CONTRACT_ADDRESS,
      description: 'Fake Aavegotchi',
      imageUrl: 'https://gateway.pinata.cloud/ipfs/QmXYvwfMJEA2EhhnHo8gnCK3UUhCf6z3HGhomVYYt7Jh3x',
      name: 'Fake Aavegotchi',
      tokenSymbol: 'FakeAaveotchi',
      buyerFeeBasisPoints: 1,
      devBuyerFeeBasisPoints: 1,
      devSellerFeeBasisPoints: 1,
      openseaBuyerFeeBasisPoints: 1,
      openseaSellerFeeBasisPoints: 1,
      schemaName: WyvernSchemaName.ERC721,
      sellerFeeBasisPoints: 1,
      type: AssetContractType.NonFungible,
    },
    backgroundColor: '#ddd',
    buyOrders: null,
    collection: {
      editors: [''],
      stats: {},
      traitStats: {},
      createdDate: new Date(),
      name: 'Tokenized Tweets',
      description:
        'Archive any tweet on the blockchain as an NFT and have solid, undeniable proof of its legitimacy. Remember that tweets can only be tokenized once.',
      slug: 'tokenizedtweets',
      hidden: false,
      featured: false,
      featuredImageUrl: '',
      displayData: { card_display_style: 'contain' },
      paymentTokens: [],
      openseaBuyerFeeBasisPoints: 0,
      openseaSellerFeeBasisPoints: 250,
      devBuyerFeeBasisPoints: 0,
      devSellerFeeBasisPoints: 750,
      payoutAddress: '0xfc336c125085f20958d4caa62963e2c693242d43',
      imageUrl:
        'https://lh3.googleusercontent.com/oF2dNdAgFnWjllW9pQUAbFuRySNhuEvoTECAoLV-FSNDGeVEcOTjauFyLs0m796GLGP28vKwDPKB6BYOMeANU31FEXnFPDxmW1C29g=s120',
      largeImageUrl: 'null',
      externalLink: 'https://tokenizedtweets.com',
      wikiLink: 'null',
    },
    description: 'Fake',
    externalLink: '',
    imagePreviewUrl: data.properties.image.description,
    imageUrl: data.properties.image.description,
    imageUrlOriginal: data.properties.image.description,
    imageUrlThumbnail: data.properties.image.description,
    isPresale: false,
    lastSale: null,
    name: 'Fake Aavegotchi',
    numSales: 0,
    openseaLink: '',
    orders: null,
    owner: {
      address: '0x',
      config: '',
      profileImgUrl: '-',
      user: null,
    },
    sellOrders: null,
    tokenAddress: MOCK_NFT_CONTRACT_ADDRESS,
    tokenId,
    traits: [],
    transferFee: null,
    transferFeePaymentToken: null,
  }
}
