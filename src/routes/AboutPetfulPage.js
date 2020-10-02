import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class AboutPetfulPage extends Component {
  render(){
    
    return(
      <div className='description'>
        <section>Here at Petful, we believe all animals deserve a loving home.
                 For this reason, we have chosen to display two of our pets at
                 a time. You are able to choose one of the pets displayed on 
                 screen, or if you must, wait until those miracles have been 
                 adopted to see new availabilities. All of the pets on this platform
                 are vet approved, house trained, and all-around lovable. Thank
                 you for choosing Petful, we hope one of our pets chooses you!

        </section>
        <img src='http://placekitten.com/300/300' alt='Cute Cat' />
        <Link to={'/adopt'}>
          <button type='submit'>Find a Pet</button>
        </Link>
        <Link to={'/'}>
          <button type='submit'>Return to Homepage</button>
        </Link>
      </div>      
    )
  }
}  