import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AboutPetfulPage.css';

export default class AboutPetfulPage extends Component {
  render(){
    
    return(
      <div className='description'>
        <section>Petful, established 2011, began as a way to help introduce
                 stray animals to loving homes and families. Our founder 
                 began the mission by rescuing strays from their neighborhood
                 and nursing them to health before giving them away. Soon,
                 community members began bringing stray pets, so they would 
                 have that luxury as well. As the intake grew, so did the demand
                 for loving pets to find safe homes. Today, Petful has helped 1,578
                 pets the family they deserve.<br></br> <br></br>
                 We hope that while you are here, you will find a pet to love. We know 
                 our precious animals will bring Petful joy to your home!

        </section>
        <br></br>
        <img src='https://images.pexels.com/photos/923360/pexels-photo-923360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='Cute Cat' />
       <div className='buttons'>
        <Link to={'/why-adopt'}>
          <button type='submit'>Why Adopt?</button>
        </Link>
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