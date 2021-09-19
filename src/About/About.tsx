import React from 'react';

function About() {
  return (
    <section id="about" className="section is-medium section-secondary about">
      <div className="container">
        <div>
          <div>
            <h1 className="title section-title">What is Cardano?</h1>
          </div>
          <div className="mt-20">
            <p className="paragraph">
              Cardano is a blockchain platform for changemakers,
              innovators, and visionaries, with the tools and
              technologies required to create possibility for the
              many, as well as the few, and bring about positive
              global change.
            </p>
            <br/>
            <p>
              <a className="button cta rounded primary-btn raised"
                 href="https://cardano.org/discover-cardano/">
                Learn more
              </a>
            </p>
          </div>
        </div>

        <div style={{marginTop: '60px'}}>
          <div>
            <h1 className="title section-title">What is staking or delegating Cardano?</h1>
          </div>
          <div className="mt-20">
            <p className="paragraph">
              Staking or delegating is purchasing and holding ADA to
              support and secure the operations of the Cardano
              network. By staking your ADA, you also earn a passive
              income that comes from block rewards and transaction
              fees.
            </p>
            <br/>
            <p>
              <a
                className="button cta rounded primary-btn raised"
                href="https://cardano.org/stake-pool-delegation/">
                Learn more
              </a>
            </p>
          </div>
        </div>

        <div style={{marginTop: '60px'}}>
          <div>
            <h1 className="title section-title">Who we are</h1>
          </div>
          <div className="mt-20">
            <p className="paragraph">
              We are a small team of DevOps and enthusiastics based in
              California. We are committed to growing this pool while
              keeping it secure and reliable. We are excited to join
              the Cardano eco-system and grow together with the
              community.
            </p>
            <br/>
            <p className="paragraph">
              We are passionate about contributing our skills and time
              to grow Cardano ecosystem in light of Cardano playing an
              important role in upcoming financial revolution. As a
              stake pool operator, we aims to provide our delegators
              with a highly professional, reliable, and profitable
              stake pool.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
