import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HowItWorks extends Component {
  render(){
    
    return(
      <div className='description'>
        <section>
            <h2>How It Works</h2>
                <p>
                  Are you ready to find the perfect pet for your home?
                </p>
              <ol>
                <li>Head to the adoption page by clicking on 'Find a Pet'</li>
                <li>Review our current dog and cat options</li>
                <li>Add your name to the list</li>
                <li>Once a cat or dog is available, you may adopt</li>
                <li>No returns ;)</li>
              </ol>

        </section>
        <br/>
        <img src='http://placekitten.com/150/150' alt='a cute fluffy wide eyed cat' />
        <br></br>
        <div className="buttons">
        <Link to={'/adopt'}>
          <button type='submit'>Find a Pet</button>
        </Link>
        </div>
      </div>      
    )
  }
} 