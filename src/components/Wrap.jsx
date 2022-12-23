import React from 'react';
import WhatYouGet from './WhatYouGet';
import Footer from './Footer';
import Grid from './Grid';

const Wrap = () => {

  return (
    <div className="wrap">
      <section className="main">
        <div className="header-wrap">
          <div className="logo-wrap">
            <img className="logo" src={require('../static/logo.png')} alt="logo" />
            <h1>IT specialists in one click!</h1>
          </div>
          </div>
          <article className="intro-wrap">
            <div className="intro-section">
              <p className="intro">
                <h3>What we offer?</h3>
                <ul>
                  <li>Any IT professional from available 800 in 24 business hours.</li>
                  <li>Full IT team in 72 business hours.</li>
                  <li>Replace any specialist in 24 business hours.</li>
                </ul>
              </p>
            </div>
          </article>
      </section>
      <WhatYouGet />
      <Grid />
      <Footer />
    </div>
  )
};

export default Wrap;
