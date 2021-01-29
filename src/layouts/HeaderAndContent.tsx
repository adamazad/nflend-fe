// Externals
import React from 'react'

// Components
import { Header } from 'src/components/Header'
import { Flex } from 'src/components/Flex'

export const HeaderAndContent: React.FC = ({ children }) => {
  return (
    <Flex flexDirection="column" minHeight="100%">
      <Header />
      <Flex py={20} flexGrow={3}>
        {children}
      </Flex>
    </Flex>
  )
}
