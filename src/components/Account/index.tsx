// External
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import React, { useCallback } from 'react'

// Wallet helpers
import { getErrorMessage } from 'src/wallet'

// Components
import { Button } from '../Button'

export function Account() {
  const { activate, account } = useWeb3React()

  const connectWallet = useCallback(() => {
    activate(new InjectedConnector({})).catch(error => {
      console.log(getErrorMessage(error))
    })
  }, [activate])

  if (account) {
    return (
      <div>
        {account.slice(0, 3)}...{account.slice(account.length - 3)}
      </div>
    )
  }

  return (
    <div>
      <Button onClick={connectWallet}>Login</Button>
    </div>
  )
}
