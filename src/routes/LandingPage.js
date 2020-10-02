import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h2> Hero- About Petful </h2>
          <p>Content</p>
          <Link to={'/about'}><p>Learn more about Petful</p></Link>
        </div>
        <div className='landing-content'>
          <h2>Why Adopt</h2>
          <p>Content</p>
        </div>
        <div className='landing-content'>
          <h2>How to adopt</h2>
          <p>Content</p>
          <Link to={'/adopt'}><p>Checkout the awesome pets here</p></Link>
          
        </div>
        <div className='landing-content'>
          <h2> Heading 4</h2>
          <p>Content</p>
        </div>
      </div>
    )
  }
}

export default LandingPage
