import React from 'react'
import { featurebanner } from "../assets"
import { features } from '../constants';
import { IonIcon } from '@ionic/react';


const Features = () => {
  return (
    <section className="section feature" id="feature" aria-label="feature">
      <div className="container">
        <figure className="feature-banner">
          <img src={featurebanner} width="582" height="585" loading="lazy" alt="feature banner"
            className="w-100" />
        </figure>

        <div className="feature-content">
          <p className="section-subtitle has-before">Why Choose us</p>

          <h2 className="h2 section-title">
            Specialist in aviding clients of financial <span className="has-before">challenges</span>
          </h2>

          <ul className="feature-list">
            {features.map((nav) => (
              <li
                key={nav.id}

              >
                <div className='feature-card'>
                <div className="card-icon">
                    <IonIcon name="rocket-sharp"  />
                  </div>

                  <div>
                    <h3 className="h3 card-title">{nav.title}</h3>

                    <p className="card-text">
                      {nav.content}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Features