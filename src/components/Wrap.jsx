import React from 'react';
import Head from './Head';
import WhatYouGet from './WhatYouGet';
import WhoWeAre from './WhoWeAre';
import Footer from './Footer';
import Grid from './Grid';

const Wrap = () => {

  return (
    <div className="wrap">
      <Head />
      <section className="about">
        <WhatYouGet />
        <WhoWeAre />
      </section>
      <Grid />
      <Footer />
    </div>
  )
};

export default Wrap;
