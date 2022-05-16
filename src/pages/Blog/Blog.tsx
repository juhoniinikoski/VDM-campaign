import * as React from 'react';
import Layout from '../../components/Layout';
import ScrollToTop from '../../components/ScrollToTop';
import blogPhoto from '../../content/injection-gacb88f3b0_1920.jpg';
import './Blog.css'

function Blog() {
  return (
    <ScrollToTop>
      <Layout>
        <div style={{width: '100%'}}>
        <div className='blog-container'>
          <section className='blog-image'>
            <img style={{maxHeight: '100%'}} className='image' src={blogPhoto}/>
          </section>
          <section className='blog-text'>
            <h2>Blogin otsikko</h2>
            <p>Blogiteksti</p>
          </section>
        </div>
        <h3>Katso myös nämä</h3>
        </div>
      </Layout>
    </ScrollToTop>
  )
}

export default Blog