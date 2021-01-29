import { BigNumber } from 'ethers'

export interface BorrowRequest {
  currency: string
  borrower: string
  lender: string
  nft: string
  nftId: BigNumber
  amount: BigNumber
  coupon: BigNumber
  liqThreshold: BigNumber
  cancelTimestamp: BigNumber
  repayTimestamp: BigNumber
  endTimestamp: BigNumber
}
