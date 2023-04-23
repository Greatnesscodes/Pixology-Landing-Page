import React from 'react'
import { services } from "../constants";


const Services = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle has-before text-center">
          Our Services
        </p>

        <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
          service</span></h2>


          <ul className="grid-list">
        {services.map((list) => (
          <li
            key={list.id}
          >
            <div className='service-card'>
              <div className='card-icon'>
                <img src={list.icon} alt="" />
              </div>

              <h3 className="h3">
                  <a href="#" className="card-title">{list.title}</a>
                </h3>
            </div>
          </li>
        ))}
      </ul>
      </div>

      





    </section>
  )
}

export default Services