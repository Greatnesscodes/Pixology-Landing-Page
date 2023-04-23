import React from 'react'
import { usefulLinks, community } from '../constants'
import { instapost1, instapost2, instapost3, instapost4, instapost5, instapost6 } from '../assets'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <p className="footer-list-title">About Pixology</p>
            <p className="footer-text">
              A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
            </p>


            
          </div>

          <ul className="footer-list">
          <li>
            <p className="footer-list-title">Useful Links</p>
          </li>
              {usefulLinks.map((nav) => (
                <li key={nav.id}>
                  <p className="footer-link"> {nav.title}</p>
                 
                </li>
              ))

              }
          </ul>

          <ul className="footer-list">
          <li>
            <p className="footer-list-title">Community</p>
          </li>
          {community.map((nav) => (
                <li key={nav.id}>
                  <p className="footer-link"> {nav.title}</p>
                 
                </li>
              ))

              }
          </ul>

          <ul className="footer-list">
          <li>
            <p className="footer-list-title">Instagram post</p>
          </li>
          <li>
            <ul className="insta-post">
            <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost1} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost2} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost3} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost4} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost5} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="insta-card">

                  <figure className="post-banner">
                    <img src={instapost6} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>
                </div>
              </li>
            </ul>
          </li>
          </ul>
        </div>


        <div className="footer-bottom">

        <p className="copyright">
          &copy; 2023 Pixology. All Rights Reserved by Greatnesscodes
        </p>

        <ul className="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link">Terms and conditions</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Privacy policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Login / Signup</a>
          </li>

        </ul>

      </div>
      </div>
    </footer>
  )
}

export default Footer