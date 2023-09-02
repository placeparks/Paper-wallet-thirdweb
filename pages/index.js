import { ConnectWallet, ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const{
    contract
  } = useContract(
    '0xEF1F7c6491e8FE8b6d9d561737b9dDB92CeEdcD7',
    'edition-drop'
  );

  const {
    data: nfts,
    isLoading:nftsLoading,
  }= useNFTs(contract);
  return (
    
    <>
      <div className={styles.main}>
<h1 className={styles.title}>My Nft Collection</h1>

<div className={styles.sub}>
{!nftsLoading && nfts && (
        <div className={styles.grid}>
          {nfts.map((nft) => (
              <Link 
              key={nft.metadata.id}
              href={`/artwork/${nft.metadata.id}`}>
                <div className={styles.card}> 
                <ThirdwebNftMedia
                metadata={nft.metadata}
                />
                <div className={styles.cardBody}>
                  <h2>{nft.metadata.name}</h2>
                  </div>
                </div>
              </Link>
          ))}
        </div>
        )
        } 
       </div>
        </div>
    </>

  );
}
