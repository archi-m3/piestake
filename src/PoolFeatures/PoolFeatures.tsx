import react from 'react';
import InfrastructureIcon from '../images/illustrations/icons/infrastructure.svg';
import SecurityIcon from '../images/illustrations/icons/security.svg';
import MaintenanceIcon from "../images/illustrations/icons/maintenance.svg";
import BackupIcon from "../images/illustrations/icons/backup.svg";
import './PoolFeatures.css';

function PoolFeatures() {
  return (
    <section className="section is-medium pool-features">
      <div className="container">
        <div className="columns">
          <div className="column is-centered-tablet-portrait">
            <h1 className="title section-title">Pool features</h1>
            <div className="divider"></div>
          </div>
          <div className="column is-7">
            <article className="media icon-box">
              <figure className="media-left">
                <p className="image">
                  <img src={InfrastructureIcon} alt="infrastructure"/>
                </p>
              </figure>
              <div className="media-content mt-20">
                <div className="content">
                  <p>
                    <span className="icon-box-title">Infrastructure</span>
                    <span className="icon-box-text">
                      Our dedicated servers are hosted in different regions around the world.
                    </span>
                  </p>
                </div>
              </div>
            </article>

            <article className="media icon-box">
              <figure className="media-left">
                <p className="image">
                  <img src={SecurityIcon} alt="security"/>
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <span className="icon-box-title">Security</span>
                    <span className="icon-box-text">
                      Our bread and butter is setting up stable, secure environments that fit the needs of stake pool delegation. We follow best security practices such as hardening the nodes, DDOS mitigation and intrusion detection.
                    </span>
                  </p>
                </div>
              </div>
            </article>

            <article className="media icon-box">
              <figure className="media-left">
                <p className="image">
                  <img src={MaintenanceIcon} alt="maintenance"/>
                </p>
              </figure>
              <div className="media-content mt-20">
                <div className="content">
                  <p>
                    <span className="icon-box-title">Maintenance</span>
                    <span className="icon-box-text">
                      We maintain and monitor 24/7.
                    </span>
                  </p>
                </div>
              </div>
            </article>

            <article className="media icon-box">
              <figure className="media-left">
                <p className="image">
                  <img src={BackupIcon} alt="backup"/>
                </p>
              </figure>
              <div className="media-content mt-10">
                <div className="content">
                  <p>
                    <span className="icon-box-title">Backup</span>
                    <span className="icon-box-text">
                      We store data in best in class storage securely. Automatic backups are generated daily.
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoolFeatures;
