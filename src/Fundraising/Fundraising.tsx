import React from 'react';
import msfLogo from '../images/msf_logo.png';
import './Fundraising.css';

function Fundraising() {
  return (
    <section id="fundraising" className="section is-medium fundraising">
      <div className="container">

        <div className="msf-logo">
          <img src={msfLogo} alt="msf-logo"/>
        </div>
        <h1 className="title section-title">Fundraising for Doctors without borders</h1>

        <div className="mt-20">
          <p className="paragraph">
            We strongly believe in contributing to lifesaving
            movements, especially during this Covid-19 crisis. So we
            are committed to donating 20% of the fees that we collect
            from our pool to Doctors without borders every month. Help
            save lives.
          </p>
          <br/>
          <p>
            <a
              className="button cta rounded primary-btn"
              href="https://events.doctorswithoutborders.org/campaign/piestake"
              target="_blank"
              rel="noreferrer">
              Donate
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Fundraising;
