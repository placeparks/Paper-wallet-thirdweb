import React, {useState} from 'react';
import styles from './Token.module.css';
import { useRouter } from 'next/router';
import {useContract, usePaperWalletUserEmail, useNFT, useAddress, ThirdwebAuthProvider, ThirdwebNftMedia } from '@thirdweb-dev/react';
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";

function MyComponent() {
  const router = useRouter();
  const { tokenId } = router.query;

  const address = useAddress();
  const email = usePaperWalletUserEmail();

  const {
    contract
  } = useContract(
    '0xEF1F7c6491e8FE8b6d9d561737b9dDB92CeEdcD7',
    'edition-drop'
  );

  const {
    data: nft,
    isLoading: nftLoading,
  } = useNFT(contract, tokenId);

  const[paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
    }

  return (
    <div className={styles.container}>
      {!nftLoading && nft ? (
        <div className={styles.grid}>
          <ThirdwebNftMedia
            metadata={nft.metadata}
            height='50%%'
            width='50%'
          />
          <div className={styles.cardBody}>
          {address && email && tokenId ? (
            !paymentSuccessful ? (
              <div className={styles.papergroup}>
                    <CheckoutWithCard
                    configs={{
                        contractId:'c7b2a9bd-8c25-4ba8-a5d6-2270c14d8b41',
                        walletAddress: address,
                        contractArgs:{
                            "tokenId": tokenId,
                        },
                        email: email.data,
                    }}
                    onPaymentSuccess={handlePaymentSuccess}
                    options={{
                        colorBackground:"#ffffff",
                        colorPrimary:"#99e0ff",
                        colorText:"#63636",
                        borderRadius: 6,
                        inputBackgroundColor:"#ffffff",
                        inputBorderColor:"#b0b0b0",
                    }}
                    />
                </div>
            ) : (
                <div>
                <p>Payment Successful</p>
                <button onClick={() => router.push(`/profile/${address}`)}> View Collectibles </button>
                </div>
            )
                
            ) : (
                <p>Login to Purchase this NFT</p>
            )}
            </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
