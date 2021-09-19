import React from 'react';

function Pool() {
  return (
    <section id="pool" className="section section-feature-grey">
      <div className="container">
        <div className="title-wrapper has-text-centered">
          <h2 className="title is-2">Pool</h2>
          <div className="divider is-centered"></div>
        </div>

        <div className="content-wrapper">
          <div className="columns">
            <div className="column">
              <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                <div className="card-title">
                  <h4>PIE</h4>
                </div>
                <div className="card-text">
                  <p>
                    Single independent staking pool
                  </p>
                </div>
                <div className="card-text">
                  <p>
                    1% fee + 340 ₳ fixed cost / epoch, deducted from the total rewards before distributing among the delegators
                  </p>
                </div>
                <hr/>
                <table className="node-table">
						      <tbody>
							      <tr>
								      <td>Pool ID</td>
								      <td>3949021b324378f6d3915471d902afce34e87700893ac8f3fe4b4d0d</td>
							      </tr>
							      <tr>
								      <td>Daedalus ID</td>
								      <td>pool189ysyxejgdu0d5u323cajq40ec6wsacq3yav3ul7fdxs6mhdhr0</td>
							      </tr>
						      </tbody>
					      </table>
                <div className="card-actions">
                  <div className="card-action">
                    <a href="https://adapools.org/pool/3949021b324378f6d3915471d902afce34e87700893ac8f3fe4b4d0d" className="button btn-align-md rounded primary-btn raised">View on Adapools</a>
                  </div>
                  <div className="card-action">
                    <a href="https://pooltool.io/pool/3949021b324378f6d3915471d902afce34e87700893ac8f3fe4b4d0d/epochs" className="button btn-align-md rounded primary-btn raised">View on Pooltool</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pool;
