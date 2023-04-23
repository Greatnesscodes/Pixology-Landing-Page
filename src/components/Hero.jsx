import React from 'react'
import { herobanner } from '../assets'
import { IonIcon } from '@ionic/react';

const Hero = () => {
  return (
    <section className="hero">
 
         <div className="container">
            <div className="hero-content">
            <h1 className="h1 hero-title">
              Building Digital <span className="has-before">Product</span>, Brand and Experience
            </h1>

            <p className="hero-text">
              At Pixology we specialize in designing, building, shipping and scaling beautiful, usable products with
              blazing-fast
              efficiency
            </p>

            <div className="wrapper">
              <a href="#" className="btn btn-primary has-before has-after">How It Works</a>

              <button className="hero-btn" aria-label="pixology promo">
                <IonIcon name="play-outline" aria-hidden="true" />

                <span className="span">Behind the scenes</span>
              </button>
            </div>

            <ul className="social-list">

<li>
  <a href="#" className="social-link" >
    <IonIcon name="logo-facebook" />

    <span className="span">Facebook</span>
  </a>
</li>

<li>
  <a href="#" className="social-link">
    <IonIcon name="logo-youtube" />

    <span className="span">Youtube</span>
  </a>
</li>

<li>
  <a href="#" className="social-link">
    <IonIcon name="logo-twitter" />

    <span className="span">Twitter</span>
  </a>
</li>

</ul>


            </div>

            <figure className="hero-banner">
            <img src={herobanner} width="794" height="637" alt="hero banner" className="w-100" />
          </figure>

            
        </div> 
    </section>
  )
}

export default Hero