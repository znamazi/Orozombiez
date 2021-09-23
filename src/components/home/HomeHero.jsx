import React from 'react'

import { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import { CircularProgress, Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'

import {
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken
} from '../../utils/candyMachine'

import {
  BtnWallet,
  HomeHero,
  HomeHeroContent,
  SubTitle,
  Title,
  CounterText,
  Mint,
  WalletLabel
} from './home.styles'

const HomeHeroComponent = (props) => {
  const [balance, setBalance] = useState()
  const [isActive, setIsActive] = useState(false) // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false) // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false) // true when user got to press MINT

  const [alertState, setAlertState] = useState({
    open: false,
    message: '',
    severity: undefined
  })

  const [startDate, setStartDate] = useState(new Date(props.startDate))

  const wallet = useWallet()
  const [candyMachine, setCandyMachine] = useState()

  const onMint = async () => {
    try {
      setIsMinting(true)
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        )
        console.log({ mintTxId })
        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          'singleGossip',
          false
        )
        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success'
          })
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error'
          })
        }
      }
    } catch (error) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!'
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`
          setIsSoldOut(true)
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error'
      })
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet?.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
      setIsMinting(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      if (wallet?.publicKey) {
        const balance = await props.connection.getBalance(wallet.publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      }
    })()
  }, [wallet, props.connection])

  useEffect(() => {
    ;(async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction
      }

      const { candyMachine, goLiveDate, itemsRemaining } =
        await getCandyMachineState(
          anchorWallet,
          props.candyMachineId,
          props.connection
        )

      setIsSoldOut(itemsRemaining === 0)
      setStartDate(goLiveDate)
      setCandyMachine(candyMachine)
    })()
  }, [wallet, props.candyMachineId, props.connection])
  return (
    <HomeHero>
      <HomeHeroContent>
        <Title>Welcome to Orozombiez!</Title>

        <SubTitle background="#9054e6">
          Join the Orozombiez and be a part of history and a great dynamic, and
          growing community with fantastic perks to come. The Zombie you own
          will grant you access to members only benefits and features.
          <br />
          Orozombiez NFTs are generative and incontrovertibly rare and unique
          artworks limited to a total of 10,000 generated from more than 200
          different attributes and traits. 500 of them will be reserved for
          giveaways and airdrops.
        </SubTitle>
        {!wallet.connected ? (
          <BtnWallet>
            <WalletLabel>Connect Wallet!</WalletLabel>
          </BtnWallet>
        ) : (
          <Mint disabled={isSoldOut || isMinting || !isActive} onClick={onMint}>
            {isSoldOut ? (
              'SOLD OUT'
            ) : isActive ? (
              isMinting ? (
                <CircularProgress />
              ) : (
                <WalletLabel>MINT</WalletLabel>
              )
            ) : (
              <Countdown
                date={startDate}
                onMount={({ completed }) => completed && setIsActive(true)}
                onComplete={() => setIsActive(true)}
                renderer={renderCounter}
              />
            )}
          </Mint>
        )}
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </HomeHeroContent>
    </HomeHero>
  )
}

const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <CounterText>
      {hours} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  )
}
export default HomeHeroComponent
