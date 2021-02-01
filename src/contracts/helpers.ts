// Interfaces
import { BigNumber } from 'ethers'
import { BorrowRequest } from 'src/interfaces/BorrowRequest'

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
