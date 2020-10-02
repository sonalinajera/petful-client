import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default class WhyAdopt extends Component {
  render(){
    
    return(
      <div className='description'>
        <section>
            <h2>Daniel and Jacketha</h2>
                <p>
                    It was the third of September, a day I'll always remember, because
                    that was the day, that we got our Sweetie Pie. We had just moved 
                    into the area, and the first thing our neighbors said to us,
                    when they brought us fresh cookies and punch, was that we needed
                    to checkout Petful. We have never been animal lovers, but as soon
                    as we logged on to the Petful site and saw Sweetie Pie, we fell in
                    love. Sweetie Pie has lived with us for 2 years now and we have nothing
                    but joy filling our home!
                </p>
            <h2>Jack Skelly</h2>
                <p>
                    It was the night before Halloween, and I needed a cat to ride on
                    my broom with me. I got lucky when I logged on to the Petful website
                    and saw Nightmare. He was pitch black with fully black eyes and a 
                    mysteriously black tongue. You could see his bones through his 
                    black fir as if they were glowing iridescently. Now, Nightmare and I
                    are waiting on Christmas to come around to spread som holiday cheer!
                        
                     
                </p>

        </section>
        <br></br>
        <img src='http://placekitten.com/300/300' alt='Cute Cat' />
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