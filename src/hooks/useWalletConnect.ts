// External
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'

interface UseWalletConnectResponse {
  activate: () => Promise<void>
  deactivate: () => void
}

export function useWalletConnect(): UseWalletConnectResponse {
  const { activate: baseActivate, deactivate } = useWeb3React()

  const activate = useCallback(() => baseActivate(new InjectedConnector({})), [baseActivate])

  return {
    activate,
    deactivate,
  }
}
