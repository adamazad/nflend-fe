// Externals
import React from 'react'

// Hooks
import { useSetPageTitle } from 'src/hooks/useSetPageTitle'

// Components
import { PageHeader } from 'src/components/PageHeader'

// Layouts
import { HeaderAndContent } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

export function NetworkErrorView() {
  const setPageTitle = useSetPageTitle()

  setPageTitle('Network Error')

  return (
    <HeaderAndContent>
      <Center minWidth="100%" minHeight="100%">
        <PageHeader title="Network Error" />
        Please change your network to Kovan
      </Center>
    </HeaderAndContent>
  )
}
