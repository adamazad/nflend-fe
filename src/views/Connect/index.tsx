import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Redirect, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React from 'react'

// Layouts
import { Center } from 'src/layouts/Center'

// Hooks
import { useMountEffect } from 'src/hooks/useMountEffect'

// Components
import { Container } from 'src/components/Container'
import { Button } from 'src/components/Button'
import { setPageTitle } from 'src/redux/page'
import { Card } from 'src/components/Card'

function getErrorMessage(error: Error) {
  if (error instanceof NoEthereumProviderError) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network."
  } else if (error instanceof UserRejectedRequestErrorInjected) {
    return 'Please authorize this website to access your Ethereum account.'
  } else {
    console.error(error)
    return 'An unknown error occurred. Check the console for more details.'
  }
}

export function ConnectView() {
  const { account, activate } = useWeb3React()
  const { state } = useLocation()
  const dispatch = useDispatch()

  // @ts-ignore
  const nextLocation = state?.referrer || '/borrow'

  useMountEffect(() => {
    dispatch(setPageTitle('Login'))
  })

  const connectWallet = () =>
    activate(new InjectedConnector({})).catch(error => {
      console.log(getErrorMessage(error))
    })

  if (account) {
    return <Redirect to={nextLocation} />
  }

  return (
    <Center minHeight="100%">
      <Container>
        <Card>
          <Button onClick={connectWallet} title="Unlock wallet">
            Connect Metamask
          </Button>
        </Card>
      </Container>
    </Center>
  )
}
