import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <h2>About Petful </h2>
          
          <Link to={'/about'}><p>Learn more about Petful</p></Link>
        </div>
        <div className="landing-content">
          <h2> How It Works </h2>
          
          <Link to={'/how'}><p>Learn how to adopt</p></Link>
        </div>
        <div className='landing-content'>
          <h2>Why Adopt</h2>
          
          <Link to={'/why-adopt'}><p>See how you can make a difference</p></Link>
        </div>
        <div className='landing-content'>
          <h2>How to adopt</h2>
          
          <Link to={'/adopt'}><p>Checkout the awesome pets here</p></Link>
          
        </div>
        <div className='landing-content'>
          <h2> Success Stories</h2>
          
          <Link to={'/success'}><p>Checkout the awesome pets here</p></Link>
        </div>
      </div>
    )
  }
}

export default LandingPage
