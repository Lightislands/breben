import React from 'react';

const WhoWeAre = () => (
  <section className='what-you-get-wrap'>
    <article className='wrap-container'>
      <h2>What you get?</h2>
        <div className='what-you-get'>
          <ul>
            <li>Only checked professionals - all our engineers are qualified specialists, that have experience in real commercial projects. They are not homemade IT guru.</li>
            <li>Start immediately - no need spent time for hiring and bureaucracy or notice period.</li>
            <li>Pay-as-you-go model (hour rates).</li>
            <li>You do not pay taxes for the employee.</li>
            <li>You can recover the costs associated with hiring our specialists.</li>
            <li>You can sign contract with our office in your country.</li>
          </ul>
          {/* <img src={require('../static/team.png')} alt="who we are" /> */}
        </div>
    </article>
  </section>
);

export default WhoWeAre;