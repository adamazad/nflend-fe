// Externals
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { OpenSeaAsset } from 'opensea-js/lib/types'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import dayjs from 'dayjs'

// Hooks
import { useAccountAssets } from 'src/hooks/useAccountAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'
import { useLoanManager } from 'src/hooks/useLoanManager'

// Components
import { SelectCurrency, CURRENCY_LIST, Currency } from './components/SelectCurrency'
import { DURATION_LIST, SelectDuration } from './components/SelectDuration'
import { ErrorMesssage } from 'src/components/ErrorMessage'
import { SelectAsset } from './components/SelectAsset'
import { Container } from 'src/components/Container'
import { Card, CardProps } from 'src/components/Card'
import { FormGroup } from 'src/components/FormGroup'
import { CardBody } from 'src/components/CardBody'
import { Button } from 'src/components/Button'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Utils
import { convertLocalTimestampToUtc } from 'src/utils'
import { PageHeader } from 'src/components/PageHeader'

// Constants
import { LOAN_MANAGER_ADDRESS, MOCK_NFT_CONTRACT_ADDRESS } from 'src/constants'
// Contracts
import { ERC721Factory } from 'src/contracts'

interface LeverageCardProps extends CardProps {
  backgroundImage?: string
}

const LeverageCard = styled(Card)<LeverageCardProps>(props => ({
  backgroundImage: `url(${props.backgroundImage})`,
  backgroundColor: '#212121',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50%',
}))

const LIQUIDATION_THRESHOLD_FACTOR = 1.5

export function CreateBorrowRequestView() {
  const setPageTitle = useSetPageTitle()
  const { account, library } = useWeb3React()
  const [trxPending, setTrxPending] = useState<boolean>(false)
  const { assets, error, loading } = useAccountAssets(account as string)
  const loanManager = useLoanManager()
  // Forms
  const [asset, setAsset] = useState<OpenSeaAsset>()
  const [duration, setDuration] = useState<number>(DURATION_LIST[0].value) // one hour
  const [currency, setCurrency] = useState<Currency>(CURRENCY_LIST[0])
  const [amountToBorrow, setAmountToBorrow] = useState(100)
  const [liquidationThreshold, setLiquidationThreshold] = useState(amountToBorrow * LIQUIDATION_THRESHOLD_FACTOR)
  const [coupon, setCoupon] = useState(10)
  const [apr, setAPR] = useState(10)

  const onChangeAmountToBorrow = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(target.value)
    setAmountToBorrow(value)
    setLiquidationThreshold(value * LIQUIDATION_THRESHOLD_FACTOR)
  }

  const onChangeAPR = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(target.value)
    setAPR(value)
    // amount to borrow $100
    // APR = 10%
    // total to pay back $110
    // coupon = $10
    console.log({ delta: 1 + value / 100 })
    const totalPayback = amountToBorrow * (1 + value / 100)
    console.log({ totalPayback, value })
    const couponValue = (totalPayback * value) / 100
    setCoupon(parseInt(couponValue.toFixed(0)))
  }

  useEffect(() => {
    setPageTitle('New Borrow Request')
    if (!asset) {
      setAsset(assets[0])
    }
  }, [setPageTitle, assets, asset])

  const approveNFT = async () => {
    const erc721 = ERC721Factory.connect(MOCK_NFT_CONTRACT_ADDRESS, library.getSigner())
    return await erc721.approve(LOAN_MANAGER_ADDRESS, asset?.tokenId as string)
  }

  const isNFTApproved = async () => {
    const erc721 = ERC721Factory.connect(MOCK_NFT_CONTRACT_ADDRESS, library.getSigner())

    console.log({ tokenId: asset?.tokenId })
    const approvedAddress = await erc721.getApproved(asset?.tokenId as string)

    return approvedAddress.toLocaleLowerCase() === LOAN_MANAGER_ADDRESS.toLocaleLowerCase()
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()

    setTrxPending(true)

    const cancelTimestampUtc = convertLocalTimestampToUtc(dayjs().add(duration, 's').unix())

    if (!loanManager) {
      return alert('No loan manager contract found')
    }
    if (!asset) {
      return alert('Missing asset')
    }
    if (!currency) {
      return alert('No currency is selected')
    }

    try {
      // Approve the NFT if not already approved
      const isApproved = await isNFTApproved()

      if (!isApproved) {
        const approveTx = await approveNFT()
      }

      // Create the borrow request
      const createBorrowRequestTx = await loanManager.createBorrowRequest(
        currency.address,
        asset.tokenAddress,
        asset.tokenId as string,
        amountToBorrow,
        coupon,
        liquidationThreshold,
        cancelTimestampUtc,
        duration
      )
    } catch (txError) {
      console.log(txError)
    }

    setTrxPending(false)
  }

  if (!account) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          Connect
        </Center>
      </Layout>
    )
  }

  if (loading || trxPending) {
    return (
      <Layout>
        <Container>Fetching your OpenSea assets ...</Container>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <Center minHeight="100%">
            <ErrorMesssage error={error} />
          </Center>
        </Container>
      </Layout>
    )
  }

  if (assets.length === 0) {
    return (
      <Layout>
        <Container>
          <Center minHeight="100%">You do not own any NFTs</Center>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <PageHeader title="Leverage" />
        <LeverageCard backgroundImage={asset?.imageUrl}>
          <CardBody>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <label>Asset</label>
                <SelectAsset
                  assets={assets}
                  onChange={nAsset => {
                    console.log(nAsset.tokenId)
                    setAsset(nAsset)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Currency</label>
                <SelectCurrency currencies={CURRENCY_LIST} onChange={setCurrency} />
              </FormGroup>
              <FormGroup>
                <label>Amount To Borrow</label>
                <input id="amountToBorrow" value={amountToBorrow} onChange={onChangeAmountToBorrow} />
              </FormGroup>
              <FormGroup>
                <label>Loan Duration</label>
                <SelectDuration
                  onChange={({ value }) => {
                    console.log({ duration: value })
                    setDuration(value)
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>APR (%)</label>
                <input value={apr} onChange={onChangeAPR} />
              </FormGroup>
              <FormGroup>
                <label>Coupon</label>
                <div>{coupon}</div>
              </FormGroup>
              <FormGroup>
                <label>Liquidation Threshold</label>
                <div>{liquidationThreshold}</div>
              </FormGroup>
              <FormGroup>
                <FormNote>
                  <p>Note that the lender will have to pay the interest rate of your loan on Aave.</p>
                  <p>This represents beetween 4 and 10% of APR.</p>
                </FormNote>
              </FormGroup>
              <FormGroup>
                <Button disabled={trxPending} type="submit">
                  Create
                </Button>
              </FormGroup>
            </form>
          </CardBody>
        </LeverageCard>
      </Container>
    </Layout>
  )
}

const FormNote = styled.div`
  background: linear-gradient(138.02deg, #ff0099 0.01%, #ffffff 100%);
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
