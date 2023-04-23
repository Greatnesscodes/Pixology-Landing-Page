import React from 'react'
import { blog, smallBlog } from '../constants'

const Blog = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">

        <p className="section-subtitle text-center has-before">Blog Post</p>

        <h2 className="h2 section-title text-center">
          Popular <span className="has-before">blog post</span>
        </h2>

        <ul className="blog-list">
          {blog.map((nav) => (
            <li
              key={nav.id}
            >
              <div className="blog-card large">
                <figure className='card-banner'>
                  <img src={nav.img} width="644" height="363" alt="Godaddy user flow solution..." class="img-cover" />
                </figure>

                <div className='card-content'>
                  <div className="wrapper">
                    <a href="#" className="tag">{nav.title}</a>

                    <a href="#" className="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span className="span">{nav.date}</span>
                    </a>
                  </div>

                  <h3>
                    <a href="#" className="card-title">{nav.heading}</a>
                  </h3>

                  <p className="card-text">
                    {nav.content}
                  </p>
                </div>
              </div>
            </li>
          ))}


          {smallBlog.map((nav) => (
            <li
              key={nav.id}
            >
              <div className="blog-card">
                <figure className='card-banner'>
                  <img src={nav.img} width="644" height="363" alt="Godaddy user flow solution..." class="img-cover" />
                </figure>

                <div className='card-content'>
                  <div className="wrapper">
                    <a href="#" className="tag">{nav.title}</a>

                    <a href="#" className="publish-date">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                      <span className="span">{nav.date}</span>
                    </a>
                  </div>

                  <h3>
                    <a href="#" className="card-title">{nav.heading}</a>
                  </h3>

                  <p className="card-text">
                    {nav.content}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Blog