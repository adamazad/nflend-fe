// Externals
import { useTheme } from 'styled-components'
import React from 'react'

// Components
import { Header } from 'src/components/Header'
import { Flex } from 'src/components/Flex'

export const HeaderAndContent: React.FC = ({ children }) => {
  const { header } = useTheme()

  return (
    <Flex flexDirection="column" minHeight="100%">
      <Header />
      <Flex marginTop={header.height} py={20} flexGrow={3}>
        {children}
      </Flex>
    </Flex>
  )
}
