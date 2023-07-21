import { ThirdwebProvider, coinbaseWallet, metamaskWallet, paperWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[ 
      metamaskWallet() ,
      coinbaseWallet(),
    paperWallet({
        paperClientId: '38d60eb1-c2b1-422e-bb4b-a1d9d8cff50a',
        
      }),
  ]}
    >
       <Navbar />
      <Component {...pageProps} />
     
    </ThirdwebProvider>
  );
}

export default MyApp;
