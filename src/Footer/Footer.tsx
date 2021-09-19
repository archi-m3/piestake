import React from 'react';
import PieStakeWhiteIcon from '../images/logos/piestake-white-icon.png';
import {ReactComponent as TwitterIcon} from '../images/twitter-logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer footer-dark">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="footer-logo">
              <img src={PieStakeWhiteIcon} alt="footer-logo"/>
            </div>
          </div>
          <div className="column">
            <div className="footer-column">
              <div className="footer-header">
                <h3>Contact Us</h3>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item email" href="mailto:piestake@protonmail.com">
                      piestake@protonmail.com
                    </a>
                  </div>
                </nav>
                <h3>Follow Us</h3>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" href="https://twitter.com/piestake">
                      <TwitterIcon className="icon"/>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
