import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';

function Navbar() {
  const address = useAddress();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            
             
              {!address ? (
                <ConnectWallet btnTitle="Login" />
              ) : (
                <Link href={`/profile/${address}`}>
                  <img
                    src="https://avatars.githubusercontent.com/u/81866624?v=4"
                    alt="profile"
                    style={{
                      width: '40px',  // Adjust the width as needed
                      height: '40px', // Adjust the height as needed
                      borderRadius: '50%',
                    }}
                  />
                </Link>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
