import React from 'react'
import { GlobalStyle } from './GlobalStyle'
import * as anchor from '@project-serum/anchor'
import { clusterApiUrl } from '@solana/web3.js'
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet
} from '@solana/wallet-adapter-wallets'

import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react'

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui'

import Home from './components/home'

const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS
)

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG
)

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID
)

const network = process.env.REACT_APP_SOLANA_NETWORK

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST
const connection = new anchor.web3.Connection(rpcHost)

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)
function App() {
  const endpoint = React.useMemo(() => clusterApiUrl(network), [])

  const wallets = React.useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>
          <GlobalStyle />
          <Home
            candyMachineId={candyMachineId}
            config={config}
            connection={connection}
            startDate={startDateSeed}
            treasury={treasury}
            txTimeout={txTimeout}
          />
        </WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
