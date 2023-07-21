import { useAddress, useContract, useOwnedNFTs,useDisconnect, ThirdwebNftMedia } from '@thirdweb-dev/react';
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/Home.module.css'

function Profile() {
    const router = useRouter();
    const address= useAddress();
    const disconnect = useDisconnect();
    const {
        contract
      } = useContract(
        '0xEF1F7c6491e8FE8b6d9d561737b9dDB92CeEdcD7',
        'edition-drop'
      );

      const{
        data: ownedNfts,
        isLoading: ownedNftsLoading,
      } = useOwnedNFTs(contract, address);
      const signout = () => {
        disconnect();
        router.push('/');
        }

  return (
    <div className={styles.profile}>
      <h1>Profile</h1>
      <button className='btn btn-primary' onClick={signout}>Sign Out</button>
      <h3>Your Collectibles</h3>
{!ownedNftsLoading && ownedNfts ? (
ownedNfts.length > 0 ? (
    ownedNfts.map((nft) => (
        <div key={nft.metadata.id} className={styles.nftCard}>  
        <ThirdwebNftMedia
        metadata={nft.metadata}
        />
        <div>
        <h2>{nft.metadata.name}</h2>
        <p>QTY: {nft.quantityOwned}</p>  
        </div>
        </div>
    ))
) : (
 <p>You don&apos;t own any NFTs yet.</p>
)
) : (
<p>Loading...</p>
)
}
    </div>
  )
}

export default Profile
