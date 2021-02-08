// Externals
import React, { FormEvent, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ethers } from 'ethers'

// Hooks
import { useBorrowRequest } from 'src/hooks/useBorrowRequest'
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'
import { useOpenSeaAsset } from 'src/hooks/useOpenSeaAsset'
import { useLoanManager } from 'src/hooks/useLoanManager'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'

// Components
import { SelectRateMode, RateMode } from './components/SelectRateMode'
import { PageHeader } from 'src/components/PageHeader'
import { Card, CardProps } from 'src/components/Card'
import { Container } from 'src/components/Container'
import { FormGroup } from 'src/components/FormGroup'

// Factories
import { LendingPoolFactory, DebtTokenFactory } from 'src/contracts'

// Constats
import { AAVE_LENDING_POOL_ADDRESS, DAI_CONTRACT_ADDRESS, LOAN_MANAGER_ADDRESS } from 'src/constants'
import { CardBody } from 'src/components/CardBody'
import { Button } from 'src/components/Button'
import { Center } from 'src/layouts/Center'

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

export function LendView() {
  const setPageTitle = useSetPageTitle()
  const [trxPending, setTrxPending] = useState<boolean>(false)
  const loanManager = useLoanManager()

  const [rateMode, setRateMode] = useState<RateMode>()
  const { library, account } = useWeb3React()

  const { borrowRequestId } = useParams<{
    borrowRequestId: string
  }>()

  const { borrowRequest, error, loading } = useBorrowRequest(borrowRequestId)
  // const openSeaAsset = useOpenSeaAsset({
  //   tokenAddress: '',
  //   tokenId: borrowRequest?.nftId.toNumber() as number,
  // })

  useEffect(() => {
    setPageTitle('Lend')
  }, [setPageTitle])

  if (!account) {
    return (
      <Layout>
        <Center minHeight="100%" minWidth="100%">
          Connect
        </Center>
      </Layout>
    )
  }

  if (loading) {
    return (
      <Layout>
        <Container>Finding Borrow Rquest</Container>
      </Layout>
    )
  }

  // No assets
  if (borrowRequest == null) {
    return (
      <Layout>
        <Container>Not found</Container>
      </Layout>
    )
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setTrxPending(true)

    const lendingPool = LendingPoolFactory.connect(AAVE_LENDING_POOL_ADDRESS, library.getSigner())

    if (!loanManager) {
      return
    }

    try {
      const { stableDebtTokenAddress, variableDebtTokenAddress } = await lendingPool.getReserveData(
        DAI_CONTRACT_ADDRESS
      )

      // Determine the APR type
      const debtTokenAddress = rateMode?.value === 'fixed' ? stableDebtTokenAddress : variableDebtTokenAddress

      console.log({ debtTokenAddress })
      const debitToken = DebtTokenFactory.connect(debtTokenAddress, library.getSigner())

      // Approve delegation
      const delegationTx = await debitToken.approveDelegation(LOAN_MANAGER_ADDRESS, ethers.constants.MaxUint256)
      await delegationTx.wait(2)
      const fulfillTx = await loanManager.fulfillRequest(borrowRequestId, '2')
      await delegationTx.wait(2)
    } catch (txError) {
      console.log(txError)
    }

    setTrxPending(false)
  }

  return (
    <Layout>
      <Container>
        <PageHeader title="Lend" />
        <LeverageCard>
          <CardBody>
            <form onSubmit={onSubmit}>
              <FormGroup>
                <SelectRateMode onChange={setRateMode} />
              </FormGroup>
              <FormGroup>
                <Button disabled={trxPending} type="submit">
                  Fulfill
                </Button>
              </FormGroup>
            </form>
          </CardBody>
        </LeverageCard>
      </Container>
    </Layout>
  )
}
