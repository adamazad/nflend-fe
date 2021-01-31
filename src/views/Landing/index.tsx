// Externals
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useCallback } from 'react'

// Layouts
import { HeaderAndContent as Layout } from 'src/layouts/HeaderAndContent'
import { Center } from 'src/layouts/Center'

// Hooks
import { useWalletConnect } from 'src/hooks/useWalletConnect'

// Components
import { Container } from 'src/components/Container'
import { Button } from 'src/components/Button'

export function LandingView() {
  const { activate } = useWalletConnect()
  const history = useHistory()

  const onClickBorrow = useCallback(() => {
    activate()
      .then(() => history.push('/borrow-requests/new'))
      .catch(error => {
        alert(error)
      })
  }, [activate, history])

  return (
    <Layout>
      <Container>
        <Center minHeight="100%" minWidth="100%">
          <Heading>Leverage your NFTs</Heading>
          <BorrowButton onClick={onClickBorrow}>Open a Loan</BorrowButton>
        </Center>
      </Container>
    </Layout>
  )
}

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff5555, #0000ff);
  font-weight: bold;
  font-size: 8vw;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const BorrowButton = styled(Button)({
  border: 'none',
  fontWeight: 'bold',
  background: 'transparent',
  fontSize: '2vw',
  textTransform: 'uppercase',
})
