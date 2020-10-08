import React, { Component } from 'react';

class WhyAdopt extends Component {
  render() {
    return (
      <section className='whyAdopt-description'>
        <h2>Why Adopt</h2>
        <p>
          Here at Petful, we believe all animals deserve a loving home.
          For this reason, we have chosen to display two of our pets at
          a time. You are able to choose one of the pets displayed on
          screen, or if you must, wait until those miracles have been
          adopted to see new availabilities. All of the pets on this platform
          are vet approved, house trained, and all-around lovable. Thank
          you for choosing Petful, we hope one of our pets chooses you!

        </p>
        <br/>
        <div className="image">
          <img src='http://placekitten.com/250/250' alt='a cute cat in the snow'/>
        </div>
      </section>
    )
  }
}

export default WhyAdopt;