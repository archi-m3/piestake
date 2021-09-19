import React from 'react';
import logo from '../images/logos/piestake.png';
import pieGraph from '../images/illustrations/pie-graph.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <nav
        className="navbar is-fresh is-transparent no-shadow"
        role="navigation"
        aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={logo} alt="logo" width="142" height="32"/>
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbar-menu" className="navbar-menu is-static">

            <div className="navbar-end">
              <a href="#about" className="navbar-item is-secondary">
                About
              </a>
              <a href="#fundraising" className="navbar-item is-secondary">
                Mission
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav
        id="navbar-clone"
        className="navbar is-fresh is-transparent is-active"
        role="navigation"
        aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src={logo} alt="" width="142" height="32"/>
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="cloned-navbar-menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="cloned-navbar-menu" className="navbar-menu is-fixed">

            <div className="navbar-end">
              <a href="#about" className="navbar-item is-secondary">
                About
              </a>
              <a href="#fundraising" className="navbar-item is-secondary">
                Mission
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <h1 className="title is-1 is-bold is-spaced">
                Pie Stake
              </h1>

              <h2 className="subtitle is-5 is-muted">
                Secure, reliable, low latency Cardano Staking Pool
              </h2>

              <p>
                <a className="button cta rounded primary-btn raised" href="#pool">
                  Get started
                </a>
              </p>
            </div>
            <div className="column is-5 is-offset-1">
              <figure className="image is-4by3">
                <img src={pieGraph} alt="Description"/>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot mb-20">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
