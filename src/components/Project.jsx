import React from 'react'
import { projects } from '../constants'
import { project1, project2, project3, project4, project5} from '../assets'


const Project = () => {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
      <p className="section-subtitle has-before text-center">Projects</p>

      <h2 className="h2 section-title text-center">
            Pixology complete <span className="has-before">project</span>
          </h2>

          <ul className="filter-list">
          {projects.map((nav) => (
              <li
                key={nav.id}
              >
                <button className="filter-btn active" data-filter-btn>{nav.title}</button>
              </li>
            ))}
          </ul>

         <ul className='grid-list'>
        
            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" >
                  <img src={project1} alt="" className="img-cover"/>
                </figure>
                <div className="card-content">
                  <h3 class="h3">
                    <div className="card-title">Book art design</div>
                  </h3>

                  <div class="card-tag">Branding</div>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" >
                  <img src={project2} alt="" className="img-cover"/>
                </figure>
                <div className="card-content">
                  <h3 class="h3">
                    <div className="card-title">Book art design</div>
                  </h3>

                  <div class="card-tag">Branding</div>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" >
                  <img src={project3} alt="" className="img-cover"/>
                </figure>
                <div className="card-content">
                  <h3 class="h3">
                    <div className="card-title">Book art design</div>
                  </h3>

                  <div class="card-tag">Branding</div>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" >
                  <img src={project4} alt="" className="img-cover"/>
                </figure>
                <div className="card-content">
                  <h3 class="h3">
                    <div className="card-title">Book art design</div>
                  </h3>

                  <div class="card-tag">Branding</div>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" >
                  <img src={project5} alt="" className="img-cover"/>
                </figure>
                <div className="card-content">
                  <h3 class="h3">
                    <div className="card-title">Book art design</div>
                  </h3>

                  <div class="card-tag">Branding</div>
                </div>
              </div>
            </li>

            
         </ul>
      </div>
    </section>
  )
}

export default Project