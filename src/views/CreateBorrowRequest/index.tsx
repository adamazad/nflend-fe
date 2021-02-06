// Externals
import { OpenSeaAsset } from 'opensea-js/lib/types'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

// Hooks
import { useOpenSeaAssets } from 'src/hooks/useOpenSeaAssets'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'
import { useLoanManager } from 'src/hooks/useLoanManager'
import { useInput } from 'src/hooks/useInput'

// Components
import { CURRENCY_LIST, SelectCurrency } from './components/SelectCurrency'
import { ErrorMesssage } from 'src/components/ErrorMessage'
import { SelectAsset } from './components/SelectAsset'
import { Container } from 'src/components/Container'
import { FormGroup } from 'src/components/FormGroup'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Utils
import { convertLocalTimestampToUtc } from 'src/utils'

export function CreateBorrowRequestView() {
  const setPageTitle = useSetPageTitle()
  const [trxPending, setTrxPending] = useState<boolean>(false)
  const { assets, error, loading } = useOpenSeaAssets()
  const loanManager = useLoanManager()

  // Forms
  const [asset, setAsset] = useState<OpenSeaAsset>()
  const [liquidationThreshold, onChangeLiquidationThreshold] = useInput(0)
  const [duration, onChangeDuration] = useInput(Date.now())
  const [currency, onChangeCurrency] = useState('')
  const [amount, onChangeAmount] = useInput(0)
  const [coupon, onChangeCoupon] = useInput(0)

  useEffect(() => {
    setPageTitle('New Borrow Request')
  }, [setPageTitle])

  const onSubmit = async () => {
    const cancelTimestampUtc = convertLocalTimestampToUtc(dayjs().unix())

    if (!loanManager) {
      return alert('No loan manager contract found')
    }

    if (!asset) {
      return alert('Missing asset')
    }

    if (loanManager && asset) {
      setTrxPending(true)

      const createBorrowRequestTx = await loanManager.createBorrowRequest(
        currency,
        asset.tokenAddress,
        asset.tokenId as string,
        amount,
        coupon,
        liquidationThreshold,
        cancelTimestampUtc,
        duration
      )

      setTrxPending(false)
    }
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
        <form onSubmit={onSubmit}>
          <FormGroup>
            <label>Asset</label>
            <SelectAsset assets={assets} onChange={setAsset} />
          </FormGroup>
          <FormGroup>
            <label>Currency</label>
            <SelectCurrency currencies={CURRENCY_LIST} />
          </FormGroup>
          <FormGroup>
            <label>Amount</label>
            <input value={amount} onChange={onChangeAmount} />
          </FormGroup>
          <FormGroup>
            <label>Duration</label>
            <input type="date" value={duration} onChange={onChangeDuration} />
          </FormGroup>
          <FormGroup>
            <label>Lidquidation Threshold</label>
            <input type="date" value={liquidationThreshold} onChange={onChangeLiquidationThreshold} />
          </FormGroup>
        </form>
      </Container>
    </Layout>
  )
}
