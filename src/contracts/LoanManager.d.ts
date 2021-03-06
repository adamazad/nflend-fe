/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers'
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface LoanManagerInterface extends ethers.utils.Interface {
  functions: {
    'borrowRequestById(uint256)': FunctionFragment
    'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)': FunctionFragment
    'fulfillRequest(uint256,uint256)': FunctionFragment
    'getRequestDebtBalance(uint256)': FunctionFragment
    'getTotalRequestCount()': FunctionFragment
    'liquidate(uint256)': FunctionFragment
    'removeRequest(uint256)': FunctionFragment
    'repay(uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'borrowRequestById', values: [BigNumberish]): string
  encodeFunctionData(
    functionFragment: 'createBorrowRequest',
    values: [string, string, BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'fulfillRequest', values: [BigNumberish, BigNumberish]): string
  encodeFunctionData(functionFragment: 'getRequestDebtBalance', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'getTotalRequestCount', values?: undefined): string
  encodeFunctionData(functionFragment: 'liquidate', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'removeRequest', values: [BigNumberish]): string
  encodeFunctionData(functionFragment: 'repay', values: [BigNumberish, BigNumberish]): string

  decodeFunctionResult(functionFragment: 'borrowRequestById', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createBorrowRequest', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'fulfillRequest', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getRequestDebtBalance', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getTotalRequestCount', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'liquidate', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'removeRequest', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'repay', data: BytesLike): Result

  events: {
    'RequestClosed(uint256)': EventFragment
    'RequestCreated(uint256)': EventFragment
    'RequestFulfilled(uint256)': EventFragment
    'RequestLiquidated(uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'RequestClosed'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RequestCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RequestFulfilled'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RequestLiquidated'): EventFragment
}

export class LoanManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: LoanManagerInterface

  functions: {
    borrowRequestById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
    >

    'borrowRequestById(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
    >

    createBorrowRequest(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)'(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    fulfillRequest(_id: BigNumberish, rateMode: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'fulfillRequest(uint256,uint256)'(
      _id: BigNumberish,
      rateMode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    getRequestDebtBalance(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    'getRequestDebtBalance(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>

    getTotalRequestCount(overrides?: CallOverrides): Promise<[BigNumber]>

    'getTotalRequestCount()'(overrides?: CallOverrides): Promise<[BigNumber]>

    liquidate(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'liquidate(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    removeRequest(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'removeRequest(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    repay(_id: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

    'repay(uint256,uint256)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  borrowRequestById(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
  >

  'borrowRequestById(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
  >

  createBorrowRequest(
    _currency: string,
    _nft: string,
    _nftId: BigNumberish,
    _amount: BigNumberish,
    _coupon: BigNumberish,
    _liqThreshold: BigNumberish,
    _cancelTimestamp: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)'(
    _currency: string,
    _nft: string,
    _nftId: BigNumberish,
    _amount: BigNumberish,
    _coupon: BigNumberish,
    _liqThreshold: BigNumberish,
    _cancelTimestamp: BigNumberish,
    duration: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  fulfillRequest(_id: BigNumberish, rateMode: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'fulfillRequest(uint256,uint256)'(
    _id: BigNumberish,
    rateMode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  getRequestDebtBalance(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  'getRequestDebtBalance(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

  getTotalRequestCount(overrides?: CallOverrides): Promise<BigNumber>

  'getTotalRequestCount()'(overrides?: CallOverrides): Promise<BigNumber>

  liquidate(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'liquidate(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  removeRequest(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'removeRequest(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  repay(_id: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>

  'repay(uint256,uint256)'(
    _id: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    borrowRequestById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
    >

    'borrowRequestById(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
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
    >

    createBorrowRequest(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)'(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    fulfillRequest(_id: BigNumberish, rateMode: BigNumberish, overrides?: CallOverrides): Promise<void>

    'fulfillRequest(uint256,uint256)'(
      _id: BigNumberish,
      rateMode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>

    getRequestDebtBalance(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getRequestDebtBalance(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getTotalRequestCount(overrides?: CallOverrides): Promise<BigNumber>

    'getTotalRequestCount()'(overrides?: CallOverrides): Promise<BigNumber>

    liquidate(_id: BigNumberish, overrides?: CallOverrides): Promise<void>

    'liquidate(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<void>

    removeRequest(_id: BigNumberish, overrides?: CallOverrides): Promise<void>

    'removeRequest(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<void>

    repay(_id: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>

    'repay(uint256,uint256)'(_id: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    RequestClosed(id: null): EventFilter

    RequestCreated(id: null): EventFilter

    RequestFulfilled(id: null): EventFilter

    RequestLiquidated(id: null): EventFilter
  }

  estimateGas: {
    borrowRequestById(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'borrowRequestById(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    createBorrowRequest(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)'(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    fulfillRequest(_id: BigNumberish, rateMode: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'fulfillRequest(uint256,uint256)'(
      _id: BigNumberish,
      rateMode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    getRequestDebtBalance(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    'getRequestDebtBalance(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>

    getTotalRequestCount(overrides?: CallOverrides): Promise<BigNumber>

    'getTotalRequestCount()'(overrides?: CallOverrides): Promise<BigNumber>

    liquidate(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'liquidate(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    removeRequest(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'removeRequest(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    repay(_id: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>

    'repay(uint256,uint256)'(_id: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>
  }

  populateTransaction: {
    borrowRequestById(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'borrowRequestById(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    createBorrowRequest(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createBorrowRequest(address,address,uint256,uint256,uint256,uint256,uint256,uint256)'(
      _currency: string,
      _nft: string,
      _nftId: BigNumberish,
      _amount: BigNumberish,
      _coupon: BigNumberish,
      _liqThreshold: BigNumberish,
      _cancelTimestamp: BigNumberish,
      duration: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    fulfillRequest(_id: BigNumberish, rateMode: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'fulfillRequest(uint256,uint256)'(
      _id: BigNumberish,
      rateMode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    getRequestDebtBalance(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getRequestDebtBalance(uint256)'(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>

    getTotalRequestCount(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'getTotalRequestCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    liquidate(_id: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'liquidate(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    removeRequest(_id: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'removeRequest(uint256)'(_id: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    repay(_id: BigNumberish, _amount: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>

    'repay(uint256,uint256)'(
      _id: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}
