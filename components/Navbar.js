import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  const address = useAddress();
  const [isOpen, setIsOpen] = useState(false); // Add this state for mobile menu

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link href="/">
            <div className="navbar-brand">Mirac.eth</div>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle menu on click
            className="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent"> {/* Show menu when isOpen is true */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <div className="nav-link active" aria-current="page">Home</div>
                </Link>
              </li>
            </ul>
   
            {!address ? (
              <ConnectWallet btnTitle="Login" className="ml-auto" /> // Add "ml-auto" to push button to the right
            ) : (
              <Link href={`/profile/${address}`}>
                <div>
                  <Image
                    src="https://avatars.githubusercontent.com/u/81866624?v=4"
                    alt="profile"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
