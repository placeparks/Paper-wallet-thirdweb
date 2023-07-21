import { ThirdwebProvider, coinbaseWallet, metamaskWallet, paperWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";


function MyApp({ Component, pageProps }) {
  const paperId= process.env.NEXT_PUBLIC_PAPER_CLIENT_ID;
  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[ 
      metamaskWallet() ,
      coinbaseWallet(),
    paperWallet({
        paperClientId: paperId ,
        
      }),
  ]}
    >
       <Navbar />
      <Component {...pageProps} />
     
    </ThirdwebProvider>
  );
}

export default MyApp;
