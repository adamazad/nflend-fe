// External
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import React, { useCallback } from 'react'
import styled from 'styled-components'

// Wallet helpers
import { getErrorMessage } from 'src/wallet'

// Components
import { Button } from '../Button'

const ConnectButton = styled(Button)({
  border: 'none',
  fontWeight: 'bold',
  background: 'transparent',
  padding: 0,
  outline: 'none',
})

const AccountText = styled.div({
  fontWeight: 'bold',
})

export function Account() {
  const { activate, account, deactivate } = useWeb3React()

  const connectWallet = useCallback(() => {
    activate(new InjectedConnector({})).catch(error => {
      alert(getErrorMessage(error))
    })
  }, [activate])

  const disconnectWallet = useCallback(() => deactivate(), [deactivate])

  if (account) {
    return (
      <>
        <AccountText>
          {account.slice(0, 3)}...{account.slice(account.length - 3)}
        </AccountText>
        <ConnectButton onClick={disconnectWallet}>Logout</ConnectButton>
      </>
    )
  }

  return <ConnectButton onClick={connectWallet}>Login</ConnectButton>
}
