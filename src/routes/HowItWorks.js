import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class HowItWorks extends Component {
  render(){
    
    return(
      <div className='description'>
        <section>
            <h1>How It Works</h1>
                <p>
                    Are you ready to find the perfect pet for your home?

                    All you have to do is head over to our adoption page,
                    choose the pet of your choice, and come to our office 
                    to pick your furry friend up! If an animal is unavailable,
                    you will not be able to choose them. No need to worry though,
                    we get beautiful creatures everyday! Get started on your
                    adoption today!
                </p>
            

        </section>
        <br></br>
        <img src='http://placekitten.com/150/150' alt='Cute Cat' />
        <br></br>
        <div className="buttons">
        <Link to={'/adopt'}>
          <button type='submit'>Find a Pet</button>
        </Link>
        <Link to={'/'}>
          <button type='submit'>Return to Homepage</button>
        </Link>
        </div>
      </div>      
    )
  }
} 