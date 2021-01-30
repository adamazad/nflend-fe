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
})

const AccountText = styled.div({
  fontWeight: 'bold',
})

export function Account() {
  const { activate, account } = useWeb3React()

  const connectWallet = useCallback(() => {
    activate(new InjectedConnector({})).catch(error => {
      alert(getErrorMessage(error))
    })
  }, [activate])

  if (account) {
    return (
      <AccountText>
        {account.slice(0, 3)}...{account.slice(account.length - 3)}
      </AccountText>
    )
  }

  return (
    <div>
      <ConnectButton onClick={connectWallet}>Login</ConnectButton>
    </div>
  )
}
